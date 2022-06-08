const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")

router.post("/createBook", bookController.createBook)

router.post("/createAuthor", bookController.createAuthor)

router.post("/booksByChetan", bookController.booksByChetan)

router.post("/updatePrice", bookController.updatePrice)

router.post("/findPrice", bookController.findPrice)

module.exports = router;