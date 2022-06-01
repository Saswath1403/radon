const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const validator = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
   logger.welcome()
   helper.Date()
   helper.Month()
   helper.getBatchInfo()
console.log (validator.trim.trim())
console.log (validator.changetoLowerCase.toLocaleLowerCase())
console.log (validator.changetoUperCase.toLocaleUpperCase())

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason