const express = require("express")

const InstructorsController = require("../controller/instructors.controller")

// creates a new router instance.
const router = express.Router()

router.post("/", InstructorsController.createNewInstructors)
router.get("/", InstructorsController.getAllInstructors)
router.get("/:id", InstructorsController.getInstructorsByID)
router.patch("/:id", InstructorsController.updateInstructors)
router.delete("/:id", InstructorsController.deleteInstructors)

module.exports = router