const mongoose = require('../config/conn_mongoDB')

var Schema = mongoose.Schema;
var confessionSchema = new Schema({
    ownerID: String,
    ownerSchool: String,
    school: String,
    createAt: {type: Date, default: Date.now},
    title: {type: String, default: ""},
    content: {type: String, default: ""},
    supporters: {type: [String], default: []}
});

const ConfessionModel = mongoose.model('confession', confessionSchema);

module.exports = ConfessionModel;