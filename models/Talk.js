const mongoose = require('../config/conn_mongoDB')

var Schema = mongoose.Schema;
var talkSchema = new Schema({
    ownerID: String, 
    createAt: {type: Date, default: Date.now},
    title: {type: String, default: ""},
    content: {type: String, default: ""},
    replies: {
        type: Array, default: []
    },
    supporters: {type: [String], default: []},
});

const TalkModel = mongoose.model('talk', talkSchema);

module.exports = TalkModel;