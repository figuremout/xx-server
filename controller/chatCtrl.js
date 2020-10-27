const chatDao = require('../dao/chatDao');

module.exports = {
    addMsg(req, resp){
        console.log("路由addMsg成功");
        var sender_id = req.body.sender_id;
        var receiver_id = req.body.receiver_id;
        var msg = req.body.msg;

        chatDao.addMsg(sender_id, receiver_id, msg, function(err){
            if(!err){
                resp.send("消息发送成功");
            }
        })
    },
    openChat(req, resp){
        console.log("路由openChat成功");
        var sender_id = req.query.sender_id;
        var receiver_id = req.query.receiver_id;

        // chat对象存在则返回，不存在则创建并返回
        chatDao.isChatExist(sender_id, receiver_id, function(err, isExist){
            if(isExist){
                chatDao.getChat(sender_id, receiver_id, function(err, res){
                    resp.send(res);
                })
            }else{
                chatDao.initChat(sender_id, receiver_id, function(err, res){
                    resp.send(res);
                })
            }
        })
    },
    getChats(req, resp){
        console.log("路由getChats成功");
        var _id = req.query._id;

        chatDao.getChats(_id, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    }


}

// 如何获取值
// get请求方式 req.query.username方式获取 因为请求数据在url上呈现了
// post请求方式 用body-parser模块的req.body.username获取
// RESTful风格 req.params.username获取url中的各层值