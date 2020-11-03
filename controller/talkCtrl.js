const talkDao = require('../dao/talkDao');
const TalkModel = require('../models/Talk');

module.exports = {
    /**
     * @api {get} /getRecommendTalks 获取推荐杂谈贴列表
     * @apiName getRecommendTalks
     * @apiGroup Talk
     * 
     * @apiSuccess {String} Success -content
     */
    getRecommendTalks(req, resp){
        console.log("路由getRecommendTalks成功");
        
        talkDao.getRecommendTalks(function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    /**
     * @api {get} /getTalk 获取杂谈贴内容
     * @apiName getTalk
     * @apiGroup Talk
     * 
     * @apiParam {String} talkID 杂谈贴ID
     * 
     * @apiSuccess {String} Success null
     */
    getTalk(req, resp){
        console.log("路由getTalk成功");
        var talkID = req.query.talkID;

        talkDao.getTalk(talkID, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    /**
     * @api {post} /supportTalk 点赞/取消点赞杂谈贴
     * @apiName supportTalk
     * @apiGroup Talk
     * 
     * @apiParam {String} talkID 杂谈贴ID
     * @apiParam {String} supporterID 点赞者ID
     * 
     * @apiSuccess {String} Success "点赞成功"
     * @apiSuccess {String} Success "取消点赞成功"     
     */
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
    /**
     * @api {post} /addReply 评论杂谈贴
     * @apiName addReply
     * @apiGroup Talk
     * 
     * @apiParam {String} talkID 杂谈贴ID
     * @apiParam {String} ownerID 评论者ID
     * @apiParam {String} content 评论内容
     * 
     * @apiSuccess {String} Success "评论添加成功"    
     */
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
    /**
     * @api {post} /addTalk 创建杂谈贴
     * @apiName addTalk
     * @apiGroup Talk
     * 
     * @apiParam {String} ownerID 拥有者ID
     * @apiParam {String} title 杂谈贴标题
     * @apiParam {String} content 杂谈贴内容
     * 
     * @apiSuccess {String} Success "创建杂谈贴成功"    
     */
    addTalk(req, resp){
        console.log("路由addTalk成功");
        var ownerID = req.body.ownerID;
        var title = req.body.title;
        var content = req.body.content;

        talkDao.addTalk(ownerID, title, content, function(err, res){
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