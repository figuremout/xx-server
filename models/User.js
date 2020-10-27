const mongoose = require('../config/conn_mongoDB')

var Schema = mongoose.Schema;
var userSchema = new Schema({
    phone: {type: String},
    username: {type: String, default: ""},
    pwd: String,
    birthDay: String,
    gender: String,
    school: String,
    isSchoolVerified: {type: Boolean, default: false},
    signature: {type: String, default: ""},
    tags: {type: [String], default: []},
    portrait: {type: String, default: ""},
    followings: {type: [String], default: []},
    followers: {type: [String], default: []},
    chaters: {type: [String], default: []},
    hasNewNotice: {type: Boolean, default: false},
    trends: {type: [String], default: []},
    appointments: {type: [String], default: []},
});

const UserModel = mongoose.model('user',// 注意这里集合名会自动变为users
  userSchema
);

module.exports = UserModel;