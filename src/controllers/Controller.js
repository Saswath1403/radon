let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let district = req.query.district
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//********************************************************ASSIGNMENTS***********************************************************************//


//  ASSIGNMENT - 1

let getByDistricts = async function (req, res) {
    try {
        let district_id = req.params.districtId
        let date = req.query.date
        console.log(`query param is: ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//  ASSIGNMENT - 2

let getWeather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=cc5fd574fe325e7627a886f8ffff4fc3'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        let tempData = data.main.temp
        res.status(200).send({ msg: tempData, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getAllWeather = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cities2 = []
        for (i = 0; i < cities.length; i++) {
            let x = { city: cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=cc5fd574fe325e7627a886f8ffff4fc3`)
            x.temp = result.data.main.temp;
            cities2.push(x)
        }
        let y = cities2.sort(function (a, b) { return b.temp - a.temp })
        res.status(200).send({ msg: y, status: true })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// ASSIGNMENT - 3

let getMeme = async function (req, res) {
    try {
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=112126428&text0=10 LPA Package&text1=5 LPA Package&username=saswath1403&password=saswath@2000`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistricts = getByDistricts
module.exports.getWeather = getWeather
module.exports.getAllWeather = getAllWeather
module.exports.getMeme = getMeme