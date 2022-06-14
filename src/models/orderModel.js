const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
   
    userId: {
        type: ObjectId,
        ref: "User1",
        required: true
    },
    productId: {
        type: ObjectId,
        ref: "Product1",
        required: true
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: {
            type: Date,
            default: Date.now 
          }
}, { timestamps: true });


module.exports = mongoose.model('Order1', orderSchema)




 // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }