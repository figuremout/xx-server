// 对数据库进行操作
const TalkModel = require('../models/Talk');

module.exports = {
    // CRUD
    addTalk(ownerID, content, callback){
        TalkModel.create({
            ownerID: ownerID,
            content: content
          }, function(err, res){
            callback(err, res);
        });
    },
    addReply(talkID, ownerID, content, callback){
        var reply = {ownerID: ownerID, content: content, createAt: Date()};
        TalkModel.findOneAndUpdate(
            {_id: talkID}, 
            {$push: {replies: reply}}, 
            {new: true, useFindAndModify: false}, // 返回更新后的文档
            function(err, res){
                callback(err, res);
                // 将评论信息添加到Notices中
                const noticeDao = require('./noticeDao'); // 避免循环依赖，在方法内导入模块
                noticeDao.addNotice(
                    {ownerID: res.ownerID, userID: ownerID, action: "评论", postID: talkID, where: "杂谈区"}, 
                    function(err){}
                );
            }
        )
    },
    supportTalk(talkID, supporterID, callback){
        TalkModel.findOne({_id: talkID}, "supporters ownerID _id", function(err, res){
            if (res.supporters.includes(supporterID)){
                // 已点赞，则转为不点赞
                callback(err, false);
                TalkModel.updateOne({_id: talkID}, {$pull: {supporters: supporterID}}, function(err, res){});
            }else{
                // 未点赞，则转为点赞
                callback(err, true);
                TalkModel.updateOne({_id: talkID}, {$addToSet: {supporters: supporterID}}, function(err, res){});
                // 将点赞信息添加到Notices中
                const noticeDao = require('./noticeDao'); // 避免循环依赖，在方法内导入模块
                noticeDao.addNotice(
                    {ownerID: res.ownerID, userID: supporterID, action: "点赞", postID: res._id, where: "杂谈区"}, 
                    function(err){}
                );
            }
        })
    },
    getTalk(talkID, callback){
        TalkModel.findOne({_id: talkID}, null, function(err, res){
            callback(err, res);
        })
    },
    getOwnedTalks(ownerID, callback){
        // 按时间
        // TODO 默认按创建顺序从旧到新添加入表中的，待验证，免得排序耗时
        TalkModel.find({ownerID: ownerID}, "-replies -supporters", function(err, res){
            callback(err, res);
        })
    },
    getRecommendTalks(callback){
        // 按发布时间 回复数 点赞数排序
        // TODO 是否要加推荐算法？
        TalkModel.find({}, null, {limit: 10}, function(err, res){
            function sortByRepliesAndSupporters(a, b){
                // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
                // 若 a 等于 b，则返回 0。
                // 若 a 大于 b，则返回一个大于 0 的值。
                var a_replies_len = a.replies.length;
                var a_supporters_len = a.supporters.length;
                var a_date_weight = Date.parse(a.createAt)/300000; // 距离1970年1月1日午夜的毫秒数 除600000将一个赞的权重和信息新鲜5min等价

                var b_replies_len = b.replies.length;
                var b_supporters_len = b.supporters.length;
                var b_date_weight = Date.parse(b.createAt)/300000; // 距离1970年1月1日午夜的毫秒数

                // TODO 权重设计
                var a_weight = a_replies_len*2 + a_supporters_len + a_date_weight; // 用户回复需要的精力更多，赋予更多权重
                var b_weight = b_replies_len*2 + b_supporters_len + b_date_weight;

                return (b_weight-a_weight);
            }

            res.sort(sortByRepliesAndSupporters);
            callback(err, res);
        })
    }
}