// const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req,res){
  
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let Price = await productModel.find({price: productId.price})
    let Balance = await userModel.find({balance: userId.balance})
            let data = req.body
            let purchase = await orderModel.create(data)
            if(header === true){
                await userModel.find({_id : userId}).update({balance:  `${Balance} - ${Price}`},{new:true})
            }
            res.send({success : purchase})
        }
        
module.exports.createOrder = createOrder


// const createOrder= async function (req, res) {
//     let data = req.body
//     let userId = req.body.userId
//     let productId = req.body.productId
//     let header = req.headers["isfreeappuser"]
//     let Price = await productModel.find({price})
    
//     let userValidation  = await UserModel.exists({_id})
//     let productValidation = await productModel.exists({_id})
//     if(userValidation){
//         if(productValidation){
//             let purchase = await orderModel.create(data)
//             if(header == true){
//                 await UserModel.find({_id : userId}).update({balance:  `${balance}-${Price}`},{new:true})
//             }
//             res.send({success : purchase})
//         } else{
//             res.send({err: "the product is not present"})}
//     }else{
//         res.send({alert: "you are not a registered user, please register"})}
// }



// const idValidation = async function(req, res, next) {

//     let pro = req.body

//     let a = await ProductModel.find().select({ _id: 1 })
//     let b = a.map(obj => obj._id.toString())

//     let x = await UserModel.find().select({ _id: 1 })
//     let y = x.map(obj => obj._id.toString())
//         // console.log(y)

//     if (pro.productId != undefined) {
//         if (pro.userId != undefined) {
//             if (b.includes(pro.productId)) {
//                 if (y.includes(pro.userId)) {
//                     next()
//                 }
//                 return res.send({ data: "Invalid User Id" })
//             }
//             return res.send({ data: "Invalid Product Id" })
//         }
//         return res.send({ data: "User Id is missing" })
//     }
//     return res.send({ data: "Product Id is missing" })
// }


// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }

// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




