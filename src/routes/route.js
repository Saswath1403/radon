const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/Controller")
const assignment_1 = require("../controllers/Controller")
const assignment_2 = require("../controllers/Controller")
const assignment_3 = require("../controllers/Controller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getByDistricts", assignment_1.getByDistricts)
router.get("/openweathermap/london", assignment_2.getWeather)
router.get("/openweathermap/multipleCities", assignment_2.getAllWeather)
router.post("/getMeme", assignment_3.getMeme)


module.exports = router;