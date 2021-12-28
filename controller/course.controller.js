const CourseModel = require("../model/course")

class CourseController {
    static async createNewCourse(req, res) {
        try {
            const body = req.body;
            const title = body.title;
            const description = body.description;
            const instructor = body.instructor;
            const scheduleDateTime = body.scheduleDateTime;
            const course = new CourseModel({title: title, description: description,instructor: instructor,scheduleDateTime: scheduleDateTime})
            const saved = await course.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
    static async getAllCourse(req, res) {
        try {
            const courseList = await CourseModel.find().populate("instructor")
            res.status(200).send(courseList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
    static async getCourseByID(req, res) {
        try {
            const id = req.params.id;
            const artisList = await CourseModel.findOne({_id: id}).populate("instructor")
            res.status(200).send(artisList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateCourse(req, res) {
        try {
            const id = req.params.id
            let body = req.body
            const title = body.title;
            const description = body.description;
            const instructor = body.instructor;
            const scheduleDateTime = body.scheduleDateTime;
            const filter = {_id: id}
            const update = {title: title, description: description,instructor: instructor,scheduleDateTime: scheduleDateTime}
            const saved = await CourseModel.findOneAndUpdate(filter, update)
            res.status(200).send({message: "success"});
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteCourse(req, res) {
        try {
            const id = req.params.id;
            const deleted = await CourseModel.deleteOne({ _id: id });
            res.send({ msg: "data deleted !" });
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}


module.exports = CourseController