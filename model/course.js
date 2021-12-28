const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true,
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 500,
        required: true,
    },
    instructor: {
        type: mongoose.Types.ObjectId,
        ref: "Instructors",
        required: true
    },
    scheduleDateTime: {
        type: Date,
        required: true
    }
})
// title	string	required, min 1 character, max 50 characters
// description	string	required, min 1 character, max 500 characters
// instructor	objectId of instructor	required
// scheduleDateTime	date	required
const CourseModel = mongoose.model('Course', courseSchema)
module.exports = CourseModel