// 对数据库进行操作
const UserModel = require('../models/User');

module.exports = {
    // CRUD
    isUserExist(filter, callback){
        UserModel.exists(filter, function(err, res){
            callback(err, res);
        })
    },
    addUser(phone, pwd, birthDay, gender, school, callback){
        UserModel.create({
            phone: phone,
            pwd: pwd,
            birthDay: birthDay,
            gender: gender,
            school, school
          }, function(err, res){
            callback(err, res);
        });
    },
    getUser(filter, projection, callback){
        UserModel.findOne(filter, projection, function(err, res){
            callback(err, res);
        })
    },
    getUsers(ids, projection, callback){
        UserModel.find({_id: {$in: ids}}, projection, function(err, res){
            callback(err, res);
        })
    },
    updateUser(filter, doc, callback){
        if(doc["username"]){// 若要更新用户名
            this.isUserExist({username: doc["username"]}, function(err, isExist){
                if(isExist){
                    callback(err, false);
                }else{
                    UserModel.updateOne(filter, {$set: doc}, function(err){
                        callback(err, true);
                    })
                }
            })
        }else{
            UserModel.updateOne(filter, {$set: doc}, function(err){
                callback(err, true);
            })
        }

    },
    updateFollowing(follower, following, callback){
        // follower关注following
        UserModel.findOne({_id: follower}, "followings", function(err, res){
            if(!err){
                if (res.followings.includes(following)){
                    // 已关注，则转为不关注
                    callback(false);
                    UserModel.updateOne({_id: follower}, {$pull: {followings: following}}, function(err, res){});
                    UserModel.updateOne({_id: following}, {$pull: {followers: follower}}, function(err, res){});
                }else{
                    // 未关注，则转为关注
                    callback(true);
                    UserModel.updateOne({_id: follower}, {$addToSet: {followings: following}}, function(err, res){});
                    UserModel.updateOne({_id: following}, {$addToSet: {followers: follower}}, function(err, res){});
                    // 将关注信息添加到Notices中
                    const noticeDao = require('./noticeDao'); // 避免循环依赖，在方法内导入模块
                    noticeDao.addNotice({ownerID: following, userID: follower, action: "关注"}, function(err){});
                }
            }
        })
    },
}