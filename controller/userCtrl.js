const talkDao = require('../dao/talkDao');
const userDao = require('../dao/userDao');

module.exports = {
    /**
     * @api {post} /userRegister 用户注册
     * @apiName userRegister
     * @apiGroup User
     *
     * @apiParam {String} phone 电话号码
     * @apiParam {String} pwd 密码
     * @apiParam {String} birthDay 生日
     * @apiParam {String} gender 性别
     * @apiParam {String} school 学校
     * 
     * @apiSuccess {String} RegisterSuccess Register"注册成功"
     * @apiError {String} RegisterFailed "用户已存在，注册失败"
     */
    userRegister(req, resp){
        console.log("路由userRegister成功");
        var phone = req.body.phone;
        var pwd = req.body.pwd;
        var birthDay = req.body.birthDay;
        var gender = req.body.gender;
        var school = req.body.school;

        userDao.isUserExist({phone:phone}, function(err, isExist){
            if(isExist){
                // 用户已存在
                resp.send("用户已存在，注册失败");
            }else{
                // 用户不存在
                userDao.addUser(phone, pwd, birthDay, gender, school, function(err, res){
                    if(!err){
                        // 初始化每个新用户username为_id
                        userDao.updateUser({phone: phone}, {username: res._id}, function(err, isSuccess){})
                        console.log("用户插入成功");
                        resp.send("注册成功");
                    }
                });
            }
        })

    },
    /**
     * @api {post} /userLogin 用户登录
     * @apiName userLogin
     * @apiGroup User
     *
     * @apiParam {String} phone 电话号码
     * @apiParam {String} pwd 密码
     * 
     * @apiSuccess {String} LoginSuccess _id
     * @apiError {String} LoginFailed "登录失败"
     */
    userLogin(req, resp){
        console.log("路由userLogin成功");
        var phone = req.body.phone;
        var pwd = req.body.pwd;

        userDao.isUserExist({phone:phone, pwd:pwd}, function(err, isExist){
            if(isExist){
                // 返回用户_id
                userDao.getUser({phone: phone}, "_id", function(err, res){
                    if(!err){
                        resp.send(res);
                    }
                })
            }else{
                resp.send("登录失败");
            }
        })
    },
    /**
     * @api {get} /getUser 获取用户信息
     * @apiName getUser
     * @apiGroup User
     *
     * @apiParam {String} _id 用户ID
     * @apiParam {String} projection 需要的字段投影
     * 
     * @apiSuccess {String} Success projection
     */
    getUser(req, resp){
        console.log("路由getUser成功");
        var _id = req.query._id;
        var projection = req.query.projection;

        userDao.getUser({_id: _id}, projection, function(err, res){
            if(!err){
                console.log("getUser成功");
                resp.send(res);
            }
        })
    },
    /**
     * @api {post} /updateUser 更新用户信息
     * @apiName updateUser
     * @apiGroup User
     *
     * @apiParam {String} _id 用户ID
     * @apiParam {String} username 用户名
     * @apiParam {String} pwd 密码
     * @apiParam {String} birthDay 生日
     * @apiParam {String} gender 性别
     * @apiParam {String} school 学校
     * @apiParam {String} signature 签名
     * @apiParam {String} tags 标签JSON
     * @apiParam {String} portrait 头像地址
     * 
     * @apiSuccess {String} Success "更新用户信息成功"
     * @apiError {String} Failed "用户名已存在，更新失败"
     */
    updateUser(req, resp){
        console.log("路由updateUser成功");
        var _id = req.body._id;
        var username = req.body.username;
        var pwd = req.body.pwd;
        var birthDay = req.body.birthDay;
        var gender = req.body.gender;
        var school = req.body.school;
        var signature = req.body.signature;
        var tags = req.body.tags;
        var portrait = req.body.portrait;

        // 更新任意数值，无需传入全部参数
        var params = {username: username, pwd: pwd, birthDay: birthDay, gender: gender, school: school, signature: signature, tags: tags, portrait: portrait};
        var doc = {};
        for (var key in params){
            if(params[key]){
                if(key == "tags"){
                    doc[key] = JSON.parse(params[key]).tags;
                }else{
                    doc[key] = params[key];
                }
            }
        }

        userDao.updateUser({_id: _id}, doc, function(err, isSuccess){
            if(!err){
                console.log("updateUser成功");
                if(isSuccess){
                    resp.send("更新用户信息成功");
                }else{
                    resp.send("用户名已存在，更新失败");
                }
            }
        })
    },
    // TODO
    searchUser(req, resp){
        console.log("路由searchUser成功");
        // 用elastic research
    },
    /**
     * @api {post} /followUser 关注/取消关注
     * @apiName followUser
     * @apiGroup User
     *
     * @apiParam {String} follower 粉丝用户ID
     * @apiParam {String} following 被关注用户ID
     * 
     * @apiSuccess {String} Success "关注成功"
     * @apiError {String} Failed "取消关注成功"
     */
    followUser(req, resp){
        console.log("路由followUser成功");
        var follower = req.body.follower;
        var following = req.body.following;

        userDao.updateFollowing(follower, following, function(isFollowing){
            if(isFollowing){
                resp.send("关注成功");
            }else{
                resp.send("取消关注成功");
            }
        })
    },
    /**
     * @api {get} /getFollowers 获取粉丝信息列表
     * @apiName getFollowers
     * @apiGroup User
     *
     * @apiParam {String} _id 用户ID
     * 
     * @apiSuccess {String} Success _id portrait username signature
     */
    getFollowers(req, resp){
        console.log("路由getFollowers成功");
        var _id = req.query._id;

        // 获取用户的关注者id列表
        userDao.getUser({_id: _id}, "followers", function(err, res){
            userDao.getUsers(res.followers, "_id portrait username signature", function(err, res){
                if(!err){
                    resp.send(res);
                }
            })
        })
    },
    /**
     * @api {get} /getFollowings 获取关注的人信息列表
     * @apiName getFollowings
     * @apiGroup User
     *
     * @apiParam {String} _id 用户ID
     * 
     * @apiSuccess {String} Success _id portrait username signature
     */
    getFollowings(req, resp){
        console.log("路由getFollowings成功");
        var _id = req.query._id;

        // 获取用户关注的人id列表
        userDao.getUser({_id: _id}, "followings", function(err, res){
            userDao.getUsers(res.followings, "_id portrait username signature", function(err, res){
                if(!err){
                    resp.send(res);
                }
            })
        })
    },
    // TODO
    getOwnedTalksAndConfessions(req, resp){
        // 各自读取再按createAt排序
        console.log("路由getTalkAndConfessions成功");
        var ownerID = req.query.ownerID;
        
        talkDao.getOwnedTalks(ownerID, function(err, res){
            // TODO getOwnedConfessions
        })

    },
    // TODO
    getAppointments(){

    }
}

// 如何获取值
// get请求方式 req.query.username方式获取 因为请求数据在url上呈现了
// post请求方式 用body-parser模块的req.body.username获取
// RESTful风格 req.params.username获取url中的各层值