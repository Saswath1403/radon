const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function (req, res){
    let arr = ['Avengers', 'Harry Potter', 'The Shawshank Redemption' , 'Pursuit of Happiness' , 'Inception' , 'Intersteller']

    console.log(arr)
    res.send(arr)

})
router.get('/movies/:indexNumbers', function (req, res){
    let printMovies = ['Avengers', 'Harry Potter', 'The Shawshank Redemption' , 'Pursuit of Happiness' , 'Inception' , 'Intersteller']

    res.send(printMovies[req.params.indexNumbers] || "Invalid Index")
})

router.get('/films', function (req, res){
    let arr1 =[ {
        "id": 1,
        "name": "Avengers"
       }, {
        "id": 2,
        "name": "Harry Potter"
       }, {
        "id": 3,
        "name": "Inception"
       }, {
        "id": 4,
        "name": "Intersteller"
       }]
       
    res.send(arr1)
   
})

router.get('/films/filmId', function (req, res){
    let printFilms =[ {
        "id": 1,
        "name": "Avengers"
       }, {
        "id": 2,
        "name": "Harry Potter"
       }, {
        "id": 3,
        "name": "Inception"
       }, {
        "id": 4,
        "name": "Intersteller"
       }]

       let x = req.params.filmId
       x = x - 1
       let flag = 0
       for (let i=0; i<4; i++){
           if(i==x){
               flag = 1
               break
           }}
           if(flag==1){
               return res.send(printFilms[x])
           }
           else{
               return res.send("no movie exists with this id")
           }
        })

          // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
  
  
    // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 
   
module.exports = router;
// adding this comment for no reason