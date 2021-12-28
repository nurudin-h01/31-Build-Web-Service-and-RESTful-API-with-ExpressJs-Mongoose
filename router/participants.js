const express = require("express")

const ParticipantsController = require("../controller/participants.controller")

// creates a new router instance.
const router = express.Router()

router.post("/", ParticipantsController.createNewParticipants)
router.get("/", ParticipantsController.getAllParticipants)
router.get("/:id", ParticipantsController.getParticipantsByID)
router.patch("/:id", ParticipantsController.updateParticipants)
router.delete("/:id", ParticipantsController.deleteParticipants)

module.exports = router