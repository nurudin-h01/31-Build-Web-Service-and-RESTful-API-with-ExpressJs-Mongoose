const InstructorsModel = require("../model/instructors")

class InstructorsController {
    // instance methodnya => harus buat instance baru bisa akses methodnya
    // async createNewCourse(req, res) {
    //     res.send({msg: "ini controller untuk create new artis"})
    // }

    // class method => tidak perlu buat instance untuk akses methodnya.
    // {name: "bob"}
    static async createNewInstructors(req, res) {
        // get `name` from req body.
        // create a new artis object.
        // save to db.
        try {
            const body = req.body;

            const name = body.name;
            const dateOfBirth = body.dateOfBirth;
            const location = body.location;
            const instructors = new InstructorsModel({name: name, dateOfBirth: dateOfBirth,location: location })
        
            const saved = await instructors.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }

    }

    static async getAllInstructors(req, res) {
        try {
            const instructorsList = await InstructorsModel.find()
            res.status(200).send(instructorsList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getInstructorsByID(req, res) {
        try {
            const id = req.params.id;

            const instructorsList = await InstructorsModel.findOne({_id: id})
            res.status(200).send(instructorsList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateInstructors(req, res) {
        try {
            const id = req.params.id
            let body = req.body
            const name = body.name;
            const dateOfBirth = body.dateOfBirth;
            const location = body.location;
            const filter = {_id: id}
            const update = {name: name, dateOfBirth: dateOfBirth,location: location}
            const saved = await InstructorsModel.findOneAndUpdate(filter, update)
            res.status(200).send({message: "success"});
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteInstructors(req, res) {
        try {
            const id = req.params.id
            const deleted = await InstructorsModel.deleteOne({ _id: id });
            res.send({ msg: "data deleted !" });
        } catch (error) {
            res.status(500).send({err: error})  
        }
    }
}


module.exports = InstructorsController