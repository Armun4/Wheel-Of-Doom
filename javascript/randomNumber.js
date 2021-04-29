function getRandomNumber(array) {
    return Math.floor((Math.random() * array.length - 1)+1)
}
module.exports = getRandomNumber