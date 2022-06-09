const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const authorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorID= book.author
    let publisherID = book.publisher
    if(authorID) {

        let isValid1 = await authorModel.findById(authorID)
        if(isValid1) {
            if(publisherID){
                let isValid2 = await publisherModel.findById(publisherID)
                if(isValid2){
                    let bookNew = await bookModel.create(book)
                    res.send({data: bookNew})
                } else res.send(" Publisher ID is not correct")
            } else res.send(" Please enter Publisher ID")

        }else res.send(" Author ID is not correct")
    }else   res.send(" Please enter Author ID ")
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['author','publisher']) 
    res.send({data: books})
}


const bookUpdate = async function(req,res){
    let books = await bookModel.find().populate(['author','publisher'])
     let finalBooks=[]
    for(let i=0; i < books.length; i++){
         if(books[i].publisher.name =="Penguin"|| books[i].publisher.name =="HarperCollins")
        {
             let updatedBook=await bookModel.updateOne({name:books[i].name},{$set:{isHardcover:true}})
             finalBooks.push(updatedBook)
        }
        if(books[i].author.rating>3.5){
             let updatedBook=await bookModel.updateOne({name:books[i].name},{$set:{price:books[i].price + 10}})
             finalBooks.push(updatedBook)
             }
        }

             res.send({msg: finalBooks})
     }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookUpdate= bookUpdate

