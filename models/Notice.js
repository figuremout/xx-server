const mongoose = require('../config/conn_mongoDB')

var Schema = mongoose.Schema;
var noticeSchema = new Schema({
    ownerID: String,
    postID: {type: String, default: ""},
    userID: String,
    where: {type: String, default: ""},
    action: String
});

const NoticeModel = mongoose.model('notice', noticeSchema);

module.exports = NoticeModel;