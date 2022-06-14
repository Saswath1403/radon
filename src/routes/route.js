const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createOrder", commonMW.userValidation,commonMW.productValidation, orderController.createOrder  )

router.post("/createProduct", productController.createProduct )

router.post("/createUser",commonMW.userValidation, UserController.createUser)

module.exports = router;