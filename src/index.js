const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Saswath1403:S%40swath9476@cluster0.fjep0.mongodb.net/Saswath1403-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log (" Hi, now you are going to see the current time, IP and route of the user below every time I hit the API!");
        let userRoute = req.originalUrl;
        let userIP = req.socket.remoteAddress;
        let time = moment().format();
        console.log(time)
        console.log(userIP)
        console.log(userRoute)
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
