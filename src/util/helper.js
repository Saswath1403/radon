const printDate = function() {
    let currentDate = new Date()
    console.log (currentDate)
}
const printMonth = function() {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth() + 1
    console.log ('The current month is : ' + currentMonth)
}
const getBatchInfo = function() {
    console.log ('Radon, W2D3, the topic for today is Nodejs module system')
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo