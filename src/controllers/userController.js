const userModel = require("../models/userModel")

const createUser= async function (req, res) {
let user = req.body
let userCreate = await userModel.create(user)
res.send({data: userCreate})
}


module.exports.createUser= createUser

