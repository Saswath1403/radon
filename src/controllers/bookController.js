const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const { STATES } = require("mongoose")

const createBook = async function (req,res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}

    const createAuthor = async function (req,res) {
        let data = req.body
        let savedData = await authorModel.create(data)
        res.send({msg: savedData})
 }

    const booksByChetan = async function (req,res) {
        let data = await authorModel.findOne({"author_name": "Chetan Bhagat"})
        let savedData = await bookModel.find({"author_id": data.author_id })
        // console.log(savedData)
        res.send({msg: savedData })
      }

      const updatePrice = async function (req,res)  {
          let getPrice = await bookModel.findOneAndUpdate({"name":"Two states"},{$set:{"price":"100"}},{new:true})
        //  console.log(getPrice)
          let savedPrice = await authorModel.findOne({"author_id": getPrice.author_id })
          res.send({msg:[savedPrice.author_name, getPrice.price]})
        }

        const findPrice = async function (req,res) {
            let fetchPrice = (await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1},{author_id :2}))
            console.log(fetchPrice)
        res.send({msg : fetchPrice})
        }


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.booksByChetan = booksByChetan
module.exports.updatePrice = updatePrice
module.exports.findPrice = findPrice
