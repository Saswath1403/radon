const { count } = require("console")
const productModel= require("../models/productModel")

const createProduct= async function (req, res) {

    let product = req.body
    let productCreate = await productModel.create(product)
    res.send({data: productCreate})
    }
    
    module.exports.createProduct= createProduct
    