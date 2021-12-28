const mongoose = require("mongoose")

const participantsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        maxlength: 50,
        required: false
    },
    phone: {
        type: String,
        maxlength: 13,
        required: false
    },
    courses: {
        type: mongoose.Types.ObjectId,
        ref: "Course",
        maxlength: 13,
        required: false
    }
})
// name	string	required, min 1 character, max 50 characters
// dateOfBirth	date	required
// email	string	not required, max 50 characters
// phone	phone	not required max 13 characters
// courses	array of courses objectId	
const ParticipantsModel = mongoose.model('Participants', participantsSchema)
module.exports = ParticipantsModel