const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/userCtrl');
const noticeCtrl = require('../controller/noticeCtrl');

// 测试用：重置数据库
const mongoose = require('../config/conn_mongoDB');
router.post('/resetDB', (req, resp)=>{
    mongoose.connection.db.dropDatabase();
    console.log("数据库已删除")
    resp.send("数据库已删除");
});


router.get('/getUser', userCtrl.getUser);
router.post('/login', userCtrl.userLogin);
router.post('/register', userCtrl.userRegister);
router.post('/updateUser', userCtrl.updateUser);
router.post('/followUser', userCtrl.followUser);
router.get('/getFollowers', userCtrl.getFollowers);
router.get('/getFollowings', userCtrl.getFollowings);

router.get('/getNotices', noticeCtrl.getNotices);

module.exports = router;