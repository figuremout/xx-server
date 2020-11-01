// 对数据库进行操作
const UserModel = require('../models/User');

module.exports = {
    // CRUD
    /**
     * 
     * @param {JSON} filter 
     * @param {Function} callback 
     * @description 判断用户是否已存在
     */
    isUserExist(filter, callback){
        UserModel.exists(filter, function(err, res){
            callback(err, res);
        })
    },
    /**
     * 
     * @param {String} phone 
     * @param {String} pwd 
     * @param {String} birthDay 
     * @param {String} gender 
     * @param {String} school 
     * @param {Function} callback 
     * @description 向数据库中添加用户
     */
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
    /**
     * 
     * @param {JSON} filter 
     * @param {String} projection 
     * @param {Function} callback
     * @description 根据projection获取一个用户信息的投影 
     */
    getUser(filter, projection, callback){
        UserModel.findOne(filter, projection, function(err, res){
            callback(err, res);
        })
    },
    /**
     * 
     * @param {[String]}} ids 
     * @param {String} projection 
     * @param {Function} callback
     * @description 查找ids列表中所有的用户信息投影，返回JSONArray
     */
    getUsers(ids, projection, callback){
        UserModel.find({_id: {$in: ids}}, projection, function(err, res){
            callback(err, res);
        })
    },
    /**
     * 
     * @param {JSON}} filter 
     * @param {JSON} doc 
     * @param {Function} callback 
     * @description 更新doc中指定的字段信息，当要更新用户名时确保用户名唯一
     */
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
    /**
     * 
     * @param {String} follower 
     * @param {String} following 
     * @param {Function} callback
     * @description 已关注转为未关注，未关注转为已关注并添加到被关注者的提醒中
     */
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
    // TODO
    getRecommendUsers(callback){
        UserModel.find({}, "username gender birthDay school signature portrait", {limit: 10}, function(err, res){
            callback(err, res);
        })
    },
    searchUsers(username, callback){
        UserModel.find({username: {$regex:username, $options:"$i"}}, "username gender school _id portrait", function(err, res){
            callback(err, res);
        })
    }
}