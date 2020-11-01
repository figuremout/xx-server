const appointmentDao = require('../dao/appointmentDao');

module.exports = {
    addAppointment(req, resp){
        console.log("路由addAppointment成功");
        var ownerID = req.body.ownerID;
        var title = req.body.title;
        var content = req.body.content;
        var startDate = req.body.startDate;
        var endDate = req.body.endDate;
        var location = req.body.location;
        var maxParticipantsNum = req.body.maxParticipantsNum;

        appointmentDao.addAppointment(ownerID, title, content, startDate, endDate, location, maxParticipantsNum, function(err, res){
            if(!err){
                resp.send("活动添加成功");
            }
        })
    },
    attendAppointment(req, resp){
        console.log("路由attendAppointment成功");
        var appointmentID = req.body.appointmentID;
        var userID = req.body.userID;

        appointmentDao.attendAppointment(appointmentID, userID, function(err, res){
            if(!err){
                if(res == -1){
                    resp.send("成功取消参加");
                }else if(res == 0){
                    resp.send("参加失败，人数已满");
                }else if(res == 1){
                    resp.send("成功参加");
                }
            }
        })
    },
    getRecommendAppointments(req, resp){
        console.log("路由getRecommendAppointments成功");
        var userID = req.query.userID;
        appointmentDao.getRecommendAppointments(userID, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    getAppointment(req, resp){
        console.log("路由getAppointment成功");
        var appointmentID = req.query.appointmentID;
        appointmentDao.getAppointment(appointmentID, function(err, res){
            resp.send(res);
        })
    }
}

// 如何获取值
// get请求方式 req.query.username方式获取 因为请求数据在url上呈现了
// post请求方式 用body-parser模块的req.body.username获取
// RESTful风格 req.params.username获取url中的各层值