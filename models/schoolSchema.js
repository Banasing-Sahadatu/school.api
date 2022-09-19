const mongoose = require("mongoose")

const schoolSchema = mongoose.Schema({
    schoolname: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
        
    },
    category: {
        type: String,
        required: true
    },
    facilities: {
        type: Array,
        required: true,
    },
    numOfStudents: {
        type: Number,
        required: true
    },
    address: {
        gps: String,
        box: String
    },
    contact: {
        phone: String,
        email:String
    }

}, {
    timestamp:true
})

const School = mongoose.model("school", schoolSchema)
module.exports = School