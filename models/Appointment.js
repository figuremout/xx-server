const mongoose = require('../config/conn_mongoDB')

var Schema = mongoose.Schema;
var AppointmentSchema = new Schema({
    ownerID: String,
    ownerSchool: String,
    school: String,
    title: {type: String, default: ""},
    content: {type: String, default: ""},
    startDate: {type: String, default: ""},
    endDate: {type: String, default: ""},
    location: {type: String, default: ""},
    currentParticipants: {type: [String], default: []},
    maxParticipantsNum: {type: Number, default: 0},
    createAt: {type: Date, default: Date.now}
});

const AppointmentModel = mongoose.model('appointment', AppointmentSchema);

module.exports = AppointmentModel;