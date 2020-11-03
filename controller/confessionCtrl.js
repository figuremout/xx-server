const confessionDao = require('../dao/confessionDao');

module.exports = {
    /**
     * @api {get} /getRecommendConfessions 获取推荐表白列表
     * @apiName getRecommendConfessions
     * @apiGroup Confession
     *
     * @apiParam {String} userID 用户ID
     * 
     * @apiSuccess {String} Success -ownerID
     */
    getRecommendConfessions(req, resp){
        console.log("路由getRecommendConfessions成功");
        var userID = req.query.userID;
        
        confessionDao.getRecommendConfessions(userID, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    /**
     * @api {post} /supportConfession 点赞/取消点赞表白
     * @apiName supportConfession
     * @apiGroup Confession
     *
     * @apiParam {String} confessionID 表白帖ID
     * @apiParam {String} supporterID 点赞者ID
     * 
     * @apiSuccess {String} Success "点赞成功"
     * @apiSuccess {String} Success "取消点赞成功"
     */
    supportConfession(req, resp){
        console.log("路由supportConfession成功");
        var confessionID = req.body.confessionID;
        var supporterID = req.body.supporterID;

        confessionDao.supportConfession(confessionID, supporterID, function(err, isSupport){
            if(!err){
                if(isSupport){
                    resp.send("点赞成功");
                }else{
                    resp.send("取消点赞成功");
                }
            }
        })
    },
    /**
     * @api {post} /addConfession 创建表白
     * @apiName addConfession
     * @apiGroup Confession
     *
     * @apiParam {String} ownerID 用户ID
     * @apiParam {String} title 标题
     * @apiParam {String} content 内容
     * 
     * @apiSuccess {String} Success "创建表白成功"
     */
    addConfession(req, resp){
        console.log("路由addConfession成功");
        var ownerID = req.body.ownerID;
        var title =req.body.title;
        var content = req.body.content;

        confessionDao.addConfession(ownerID, title, content, function(err, res){
            if(!err){
                resp.send("创建表白成功");
            }
        })
    }

}

// 如何获取值
// get请求方式 req.query.username方式获取 因为请求数据在url上呈现了
// post请求方式 用body-parser模块的req.body.username获取
// RESTful风格 req.params.username获取url中的各层值