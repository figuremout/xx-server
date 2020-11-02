// 对数据库进行操作
const { title } = require('process');
const ConfessionModel = require('../models/Confession');
const UserModel = require('../models/User');

module.exports = {
    addConfession(ownerID, title, content, callback){
        UserModel.findOne({_id: ownerID}, "school", function(err, res){
            ConfessionModel.create({
                ownerID: ownerID,
                ownerSchool: res.school,
                title: title,
                content: content
              }, function(err, res){
                callback(err, res);
            });
        })
    },
    supportConfession(confessionID, supporterID, callback){
        ConfessionModel.findOne({_id: confessionID}, "supporters ownerID _id", function(err, res){
            if (res.supporters.includes(supporterID)){
                // 已点赞，则转为不点赞
                callback(err, false);
                ConfessionModel.updateOne({_id: confessionID}, {$pull: {supporters: supporterID}}, function(err, res){});
            }else{
                // 未点赞，则转为点赞
                callback(err, true);
                ConfessionModel.updateOne({_id: confessionID}, {$addToSet: {supporters: supporterID}}, function(err, res){});
                // 将点赞信息添加到Notices中
                const noticeDao = require('./noticeDao'); // 避免循环依赖，在方法内导入模块
                noticeDao.addNotice(
                    {ownerID: res.ownerID, userID: supporterID, action: "点赞", postID: res._id, where: "表白墙"}, 
                    function(err){}
                );
            }
        })
    },
    getOwnedConfessions(ownerID, callback){
        ConfessionModel.find({ownerID: ownerID}, "-supporters -content -ownerID", function(err, res){
            callback(err, res);
        })
    },
    getRecommendConfessions(userID, callback){
        // 按发布时间 回复数 点赞数排序
        // TODO 是否要加推荐算法？
        // 表白墙推荐应该讲究范围在自己的学校或周围地区的学校，远在千里之外的学校表白应该没谁关心
        UserModel.findOne({_id: userID}, "school", function(err, res){
            var school = res.school.split(",");
            ConfessionModel.find({}, "-ownerID", {limit: 20}, function(err, res){
                function sortByWeight(a, b){
                    // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
                    // 若 a 等于 b，则返回 0。
                    // 若 a 大于 b，则返回一个大于 0 的值。
                    var a_supporters_len = a.supporters.length;
                    var a_date_weight = Date.parse(a.createAt)/300000; // 距离1970年1月1日午夜的毫秒数 除300000将一个赞的权重和信息新鲜5min等价
    
                    var b_supporters_len = b.supporters.length;
                    var b_date_weight = Date.parse(b.createAt)/300000; // 距离1970年1月1日午夜的毫秒数
    
                    // school字段必须是"江西省,吉安市,白鹭洲中学"格式
                    // 将和用户同省/同市/同校的赋予更高权重
                    var a_school_weight = 0;
                    var b_school_weight = 0;
                    a.ownerSchool.split(",").forEach(function(value, index){
                        if(value == school[index]){
                            a_school_weight += 12; // 权重：学校字符串中一个字段相同=12赞=1h新鲜度 
                        }
                    });
                    b.ownerSchool.split(",").forEach(function(value, index){
                        if(value == school[index]){
                            b_school_weight += 12; // 权重：学校字符串中一个字段相同=12赞=1h新鲜度 
                        }
                    });
    
                    // TODO 权重设计
                    var a_weight = a_supporters_len + a_date_weight + a_school_weight;
                    var b_weight = b_supporters_len + b_date_weight + b_school_weight;
    
                    return (b_weight-a_weight);
                }
    
                res.sort(sortByWeight);
                callback(err, res);
            })
        })

    }
}