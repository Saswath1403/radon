const Date = function() {
    console.log ('01/06/2022')
}
const Month = function() {
    console.log ('May')
}
const getBatchInfo = function() {
    console.log ('Radon, W3D1, the topic for today is Nodejs module system')
}

module.exports.Date = Date
module.exports.Month = Month
module.exports.getBatchInfo = getBatchInfo