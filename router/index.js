const express = require("express")
const courseRoutes = require("./course")
const instructorsRoutes = require("./instructors")
const participantsRoutes = require("./participants")
// creates a new router instance.
const router = express.Router()

router.use("/course", courseRoutes)
router.use("/instructors", instructorsRoutes)
router.use("/participants", participantsRoutes)

module.exports = router