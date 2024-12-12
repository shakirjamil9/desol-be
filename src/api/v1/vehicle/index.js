const express = require("express")
const router = express.Router()
const { createVehicle } = require("./vehicle.controller")
const upload = require("../../../middlewares/multer")

router.post("/", upload.array("pictures", 10), createVehicle)

module.exports = router
