const ParticipantsModel = require("../model/participants")

class ParticipantsController {
    static async createNewParticipants(req, res) {
        try {
            const body = req.body;
            const name = body.name;
            const dateOfBirth = body.dateOfBirth;
            const email = body.email;
            const phone = body.phone;
            const courses = body.courses;
            const participants = new ParticipantsModel({name: name, dateOfBirth: dateOfBirth, email: email, phone: phone, courses: courses })
            const saved = await participants.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }

    }

    static async getAllParticipants(req, res) {
        try {
            const participantsList = await ParticipantsModel.find().populate({
                path: "courses",
                populate: {path: "instructor"}
            })
            res.status(200).send(participantsList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getParticipantsByID(req, res) {
        try {
            const id = req.params.id;
            const participantsList = await ParticipantsModel.findOne({_id: id}).populate({
                path: "courses",
                populate: {path: "instructor"}
            })
            res.status(200).send(participantsList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateParticipants(req, res) {
        try {
            const id = req.params.id
            let body = req.body
            const dateOfBirth = body.dateOfBirth;
            const name = body.name
            const email = body.email;
            const phone = body.phone;
            const courses = body.courses;
            const filter = {_id: id}
            const update = {name: name, dateOfBirth: dateOfBirth, email: email, phone: phone, courses: courses }
            const saved = await ParticipantsModel.findOneAndUpdate(filter, update)
            res.status(200).send({message: "success"});
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteParticipants(req, res) {
        try {
            const id = req.params.id
            const deleted = await ParticipantsModel.deleteOne({ _id: id });
            res.send({ msg: "data deleted !" });
        } catch (error) {
            res.status(500).send({err: error})  
        }
    }
}


module.exports = ParticipantsController