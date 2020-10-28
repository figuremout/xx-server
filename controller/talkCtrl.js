const talkDao = require('../dao/talkDao');
const TalkModel = require('../models/Talk');

module.exports = {
    getRecommendTalks(req, resp){
        console.log("路由getRecommendTalks成功");
        
        talkDao.getRecommendTalks(function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    getTalk(req, resp){
        console.log("路由getTalk成功");
        var talkID = req.query.talkID;

        talkDao.getTalk(talkID, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    supportTalk(req, resp){
        console.log("路由supportTalk成功");
        var talkID = req.body.talkID;
        var supporterID = req.body.supporterID;

        talkDao.supportTalk(talkID, supporterID, function(err, isSuccess){
            if(!err){
                if(isSuccess){
                    resp.send("点赞成功");
                }else{
                    resp.send("取消点赞成功");
                }
            }
        })
    },
    addReply(req, resp){
        console.log("路由addReply成功");
        var talkID = req.body.talkID;
        var ownerID = req.body.ownerID;
        var content = req.body.content;

        talkDao.addReply(talkID, ownerID, content, function(err, res){
            if(!err){
                resp.send("评论添加成功");
            }
        })
    },
    addTalk(req, resp){
        console.log("路由addTalk成功");
        var ownerID = req.body.ownerID;
        var content = req.body.content;

        talkDao.addTalk(ownerID, content, function(err, res){
            if(!err){
                resp.send("创建杂谈贴成功");
            }
        })
    }

}

// 如何获取值
// get请求方式 req.query.username方式获取 因为请求数据在url上呈现了
// post请求方式 用body-parser模块的req.body.username获取
// RESTful风格 req.params.username获取url中的各层值