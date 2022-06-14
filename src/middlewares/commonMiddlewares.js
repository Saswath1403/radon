const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


const userValidation= function ( req, res, next) {
   if(req.headers.isfreeappuser){
    next()
   }
   else {
    console.log("the request is missing a mandatory header")
    res.send({errorMsg:"the request is missing a mandatory header"})
   }
}

const productValidation= function ( req, res, next) {
   let userId = req.body.userId
   let productId = req.body.productId
   let userValidation  = await userModel.exists({userId})
   let productValidation = await productModel.exists({productId})
   if(userValidation){
       if(productValidation){
         next()
      }     
else{
   res.send({err: "the product is not present"})}
}else{
res.send({alert: "you are not a registered user, please register"})}
}

  
module.exports.userValidation= userValidation
module.exports.productValidation= productValidation
     


