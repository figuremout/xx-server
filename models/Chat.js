const mongoose = require('../config/conn_mongoDB')

var Schema = mongoose.Schema;
var chatSchema = new Schema({
    newMsgCount0: {type: Number, default: 0},
    newMsgCount1: {type: Number, default: 0},
    owners: [String],
    msgs: {type: Array, default: []}
});

const ChatModel = mongoose.model('chat', chatSchema
);

module.exports = ChatModel;