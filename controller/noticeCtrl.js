const noticeDao = require('../dao/noticeDao');
const NoticeModel = require('../models/Notice');

module.exports = {
    /**
     * @api {get} /getNotices 获取消息列表
     * @apiName getNotices
     * @apiGroup Notice
     *
     * @apiParam {String} _id 用户ID
     * 
     * @apiSuccess {String} Success null
     */
    getNotices(req, resp){
        console.log("路由getNotices成功");
        var _id = req.query._id;

        noticeDao.getNotices({ownerID: _id}, function(err, res){
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