const express = require("express")
const authentication = require("./auth/index")
const vehicle = require("./vehicle/index")
const { authenticateUser } = require("../../middlewares/auth.middleware")

const router = express.Router()

router.use("/auth", authentication)
router.use("/vehicles", authenticateUser, vehicle)

module.exports = router
