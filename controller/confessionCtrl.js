const confessionDao = require('../dao/confessionDao');

module.exports = {
    getRecommendConfessions(req, resp){
        console.log("路由getRecommendConfessions成功");
        var userID = req.query.userID;
        
        confessionDao.getRecommendConfessions(userID, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
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