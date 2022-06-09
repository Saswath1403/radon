const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const { STATES } = require("mongoose")
const { query } = require("express")

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
            let fetchPrice = (await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,name:1,price:1, _id:0}))
            let id = fetchPrice.map(input => input.author_id)
            let arr=[]
            for (let i=0; i<id.length; i++)
            {
                const x = id[i]
                const author = await authorModel.find({author_id: x}).select({author_name:1,author_id:1,_id:0})
                arr.push(...author)
            }
            const authorName = arr
            res.send({fetchPrice,authorName})

        }

        const getBooks = async function (req,res) {
        let storeBooks = req.params.author_id
        let books = await bookModel.find({author_id : storeBooks}).select({name: 1})
        console.log(books)
        res.send({books})
        }

        const findAuthors = async function (req,res) {
            let storeBooks = req.params.author_id
            let books = await bookModel.find({author_id : storeBooks},{rating :{ $gte: 4}}).select({name: 1})
            let authors = await authorModel.find({author_id : storeBooks},{age :{ $gte: 50}}).select({name: 1})
            res.send({books},{authors})
            }



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.booksByChetan = booksByChetan
module.exports.findAuthors = findAuthors
module.exports.updatePrice = updatePrice
module.exports.findPrice = findPrice
module.exports.getBooks = getBooks

