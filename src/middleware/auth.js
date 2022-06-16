const jwt =  require("jsonwebtoken");

//======================================================1st Middleware===================================================================//

const authenticate = function(req, res, next) {
  try{
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-Auth-token"];
      if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken) {
      return res.status(500).send({ status: false, msg: "token is invalid" });
    }
    next()

}
catch(err){
  console.log("This is the error:",err.message)
  res.status(500).send({msg:"Error",error:err.message})
   }
  }
//======================================================2nd Middleware=====================================================================//

const authorise = function(req, res, next) {
  try{
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-radon");
     let userToBeModified = req.params.userId
     let userLoggedIn = decodedToken.userId
      if(userToBeModified != userLoggedIn) return res.status(500).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
 
    next()
}
catch(err){
  console.log("This is the error:",err.message)
  res.status(500).send({msg:"Error",error:err.message})
}
}

//=========================================================================================================================================//

module.exports = {authenticate,authorise}