// 对数据库进行操作
const AppointmentModel = require('../models/Appointment');
const UserModel = require('../models/User');

module.exports = {
    addAppointment(ownerID, title, content, startDate, endDate, location, maxParticipantsNum, callback){
        AppointmentModel.create({
            ownerID: ownerID,
            title: title,
            content: content,
            startDate: startDate,
            endDate: endDate,
            location:  location,
            maxParticipantsNum: maxParticipantsNum
          }, function(err, res){
            callback(err, res);
        });
    },
    attendAppointment(appointmentID, userID, callback){
        AppointmentModel.findOne({_id: appointmentID}, "currentParticipants maxParticipantsNum ownerID", function(err, res){
            if(res.currentParticipants.includes(userID)){
                // 已参加改为不参加
                callback(err, -1);
                AppointmentModel.updateOne({_id: appointmentID}, {$pull: {currentParticipants: userID}}, function(err, res){})
            }else{
                // 未参加改为参加
                if(res.currentParticipants.length >= res.maxParticipantsNum){
                    // 人数已满
                    callback(err, 0);
                }else{
                    callback(err, 1);
                    AppointmentModel.updateOne({_id: appointmentID}, {$addToSet: {currentParticipants: userID}}, function(err, res){})
                }
                // 将参加信息添加到Notices中
                const noticeDao = require('./noticeDao'); // 避免循环依赖，在方法内导入模块
                noticeDao.addNotice(
                    {ownerID: res.ownerID, userID: userID, action: "参加", postID: res._id, where: "活动预约区"},
                    function(err){}
                );
            }
        })
    },
    getRecommendAppointments(userID, callback){
        // 推荐未过期 未满人数 地点近 参加人数多的
        UserModel.findOne({_id: userID}, "school", function(err, res){
            var school = res.school.split(",");
            AppointmentModel.find({}, "-content", {limit: 20}, function(err, res){
                function sortByWeight(a, b){
                    // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
                    // 若 a 等于 b，则返回 0。
                    // 若 a 大于 b，则返回一个大于 0 的值。
                    var a_date_weight = Date.parse(a.endDate) > Date.parse(Date()) ? 1:0;
                    var b_date_weight = Date.parse(b.endDate) > Date.parse(Date()) ? 1:0;
    
                    // school字段必须是"江西省,吉安市,白鹭洲中学"格式
                    // 将和用户同省/同市/同校的赋予更高权重
                    var a_school_weight = 0;
                    var b_school_weight = 0;
                    a.location.split(",").forEach(function(value, index){
                        if(value == school[index]){
                            a_school_weight += 1;
                        }
                    });
                    b.location.split(",").forEach(function(value, index){
                        if(value == school[index]){
                            b_school_weight += 1;
                        }
                    });
    
                    // TODO 权重设计
                    var a_weight = a_date_weight + a_school_weight;
                    var b_weight = b_date_weight + b_school_weight;
    
                    return (b_weight-a_weight);
                }
    
                res.sort(sortByWeight);
                callback(err, res);
            })
        
        })
    },
    getAppointment(appointmentID, callback){
        AppointmentModel.findOne({_id: appointmentID}, null, function(err, res){
            callback(err, res);
        })
    },
    // TODO
    getOwnedAppointments(){

    }

}