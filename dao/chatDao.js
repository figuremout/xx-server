// 对数据库进行操作
const ChatModel = require('../models/Chat');
const UserModel = require('../models/User');

module.exports = {
    // CRUD
    addChat(owner0, owner1, callback){
        ChatModel.create({
            owners: [owner0, owner1],
          }, function(err, res){
            callback(err);
            // 添加chatID到User的chats中
            UserModel.updateOne({_id: owner0}, {$addToSet: {chats: res._id}}, function(err, res){});
            UserModel.updateOne({_id: owner1}, {$addToSet: {chats: res._id}}, function(err, res){});
        });
    },
    updateChat(chatID, _id, msg, callback){
        ChatModel.updateOne({_id: chatID}, {$push: {msgs: {owner: _id, msg: msg}}}, function(err){
            callback(err, true);
        })
    },
    

}