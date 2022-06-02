const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const validator = require('../validator/formatter')
const lodash = require('lodash');

const router = express.Router();


router.get('/test-me', function (req, res) {
   logger.welcome()
   helper.printDate()
   helper.printMonth()
   helper.getBatchInfo()
console.log (validator.trim.trim())
console.log (validator.changetoLowerCase.toLocaleLowerCase())
console.log (validator.changetoUperCase.toLocaleUpperCase())

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
let byChunk = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(lodash.chunk(byChunk,4))

let byTail  = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(byTail))

 let arr1 = [1,2,3,4]
 let arr2 = [3,4,5,6]
 let arr3 = [5,6,7,8]
 let arr4 = [7,8,9,10]
console.log(lodash.union(arr1,arr2,arr3,arr4));

let byfromPairs = [ ['horror' , 'The Shining'] ,  ['drama' , 'Titanic'] , ['thriller' , 'Shutter Island'] , ['fantasy' , 'Pans Labyrinth'] ]

console.log(lodash.fromPairs(byfromPairs))

    res.send('Hello! My name is Saswath :). ') 
});


module.exports = router;
// adding this comment for no reason