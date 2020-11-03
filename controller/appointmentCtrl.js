const appointmentDao = require('../dao/appointmentDao');

module.exports = {
    /**
     * @api {post} /addAppointment 创建活动预约
     * @apiName addAppointment
     * @apiGroup Appointment
     *
     * @apiParam {String} ownerID 用户ID
     * @apiParam {String} title 标题
     * @apiParam {String} content 内容
     * @apiParam {String} startDate 起始时间
     * @apiParam {String} endDate 终止时间
     * @apiParam {String} location 地点
     * @apiParam {String} maxParticipantsNum 最大参与人数
     * 
     * @apiSuccess {String} Success "活动添加成功"
     */
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
    /**
     * @api {post} /attendAppointment 参加活动
     * @apiName attendAppointment
     * @apiGroup Appointment
     *
     * @apiParam {String} appointmentID 活动ID
     * @apiParam {String} userID 用户ID
     * 
     * @apiSuccess {String} Success "成功参加"
     * @apiSuccess {String} Success "成功取消参加"
     * @apiSuccess {String} Success "参加失败，人数已满"
     */
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
    /**
     * @api {get} /getRecommendAppointments 获取推荐活动列表
     * @apiName getRecommendAppointments
     * @apiGroup Appointment
     *
     * @apiParam {String} userID 用户ID
     * 
     * @apiSuccess {String} Success -content
     */
    getRecommendAppointments(req, resp){
        console.log("路由getRecommendAppointments成功");
        var userID = req.query.userID;
        appointmentDao.getRecommendAppointments(userID, function(err, res){
            if(!err){
                resp.send(res);
            }
        })
    },
    /**
     * @api {get} /getAppointment 获取活动
     * @apiName getAppointment
     * @apiGroup Appointment
     *
     * @apiParam {String} appointmentID 活动ID
     * 
     * @apiSuccess {String} Success null
     */
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