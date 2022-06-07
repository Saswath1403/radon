const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")

router.post("/createBook", bookController.createBook)

router.get("/bookList", bookController.bookList)

router.post("/getBooksInYear", bookController.getBooksInYear)

router.post("/getParticularBooks", bookController.getParticularBooks)

router.post("/getXINRBooks", bookController.getXINRBooks)

router.post("/getRandomBooks", bookController.getRandomBooks)

module.exports = router;