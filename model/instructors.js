const mongoose = require("mongoose")

const instructorsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: false
    }
})
// name	string	required, min 1 character , max 100 characters
// dateOfBirth	date	required
// Location	string	not required
const InsturctorsModel = mongoose.model('Instructors', instructorsSchema)
module.exports = InsturctorsModel