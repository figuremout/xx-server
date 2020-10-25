// 对数据库进行操作
const ChatModel = require('../models/Chat');

module.exports = {
    // CRUD
    addChat(owner0, owner1, callback){
        ChatModel.create({
            owners: [owner0, owner1],
          }, function(err){
            callback(err);
        });
    }

}