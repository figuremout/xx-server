const express = require('express');
const path = require('path');
const router = express.Router();
const userCtrl = require('../controller/userCtrl');
const noticeCtrl = require('../controller/noticeCtrl');
const chatCtrl = require('../controller/chatCtrl');

// 测试用：重置数据库
const mongoose = require('../config/conn_mongoDB');
const talkCtrl = require('../controller/talkCtrl');
const { toUnicode } = require('punycode');

router.post('/resetDB', (req, resp)=>{
    mongoose.connection.db.dropDatabase();
    console.log("数据库已删除")
    resp.send("数据库已删除");
});

// 发送文档网页
router.get('/readme', (req, resp)=>{
    resp.sendFile(path.resolve(__dirname+'/../doc/README.html'));
});
router.get('/testAPI.html', (req, resp)=>{
    resp.sendFile(path.resolve(__dirname+'/../doc/testAPI.html'));
});
router.get('/apidoc/*', (req, resp)=>{
    resp.sendFile(path.resolve(__dirname+'/../doc'+req.path));
});

// 数据接口
router.get('/getUser', userCtrl.getUser);
router.post('/login', userCtrl.userLogin);
router.post('/register', userCtrl.userRegister);
router.post('/updateUser', userCtrl.updateUser);
router.post('/followUser', userCtrl.followUser);
router.get('/getFollowers', userCtrl.getFollowers);
router.get('/getFollowings', userCtrl.getFollowings);

router.get('/getNotices', noticeCtrl.getNotices);

router.get('/openChat', chatCtrl.openChat);
router.get('/getChats', chatCtrl.getChats);
router.post('/addMsg', chatCtrl.addMsg);

router.get('/getRecommendTalks', talkCtrl.getRecommendTalks);
router.get('/getTalk', talkCtrl.getTalk);
router.post('/addTalk', talkCtrl.addTalk);
router.post('/supportTalk', talkCtrl.supportTalk);
router.post('/addReply', talkCtrl.addReply);


module.exports = router;