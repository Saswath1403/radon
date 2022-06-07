const bookModel = require("../models/bookModel")

const createBook = async function (req,res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}


const bookList  = async function (req,res) {
    let allBooks = await bookModel.find().select({bookName: 1, authorName: 1, _id: 0})  
    res.send({msg: allBooks})
}


const getBooksInYear = async function (req,res) {
    let data = req.body.year
    let savedData = await bookModel.find({year: {$eq:data}})
    res.send({msg: savedData})
}


const getParticularBooks = async function (req,res) {
    let data = req.body
    let savedData = await bookModel.find(data)
    res.send({msg: savedData})
 }


const getXINRBooks = async function (req,res) {
    let booksINR = await bookModel.find({"price.indianPrice": {$in: ["100INR","200INR","500INR"]}})
    res.send({msg: booksINR})
}



 const getRandomBooks  = async function (req,res) {
    let randomBooks = await bookModel.find({$or:[{stockAvailable: true},{totalPages: {$gt: 500}}]})
    res.send({msg: randomBooks})
 
}


module.exports.createBook = createBook
module.exports.bookList  = bookList 
module.exports.getBooksInYear  = getBooksInYear 
module.exports.getParticularBooks = getParticularBooks 
module.exports.getXINRBooks  = getXINRBooks 
module.exports.getRandomBooks   = getRandomBooks  