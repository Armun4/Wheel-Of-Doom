const botonGo = document.querySelector(".btn1")
const botonReset = document.querySelector(".btn2")

function startRoulette() {
    // timeLimit()
    roulettesound()
    upDateRoulette()
    rouletteSpin()
    setTimeout(() => {
        createPlayers()
    }, 4000)
}
function timeLimit() {
    let period = 10000;       // 5 minutes
    let ahora = new Date();
    let milisegundos = ahora.getMilliseconds();
    for( let tStart = milisegundos;  (milisegundos-tStart) < period;){
    console.log("hi")
    }
}
function roulettesound() {
    let audioR = document.getElementById("roulettesound")
    audioR.currentTime= 0
    audioR.play()
}
function rouletteSpin() {
    let sliders = document.querySelector(".slider")
    let playersLife = document.querySelectorAll(".slider div")
    let player = sliders.offsetWidth / playersLife.length
    let numberRandom = getRandomNumber(playersLife)
    sliders.style.left = ((- player * numberRandom) + player) + "px" 
    coderList[playersLife[numberRandom].id].life = false
}
function getRandomNumber(array) {
    return Math.floor((Math.random() * array.length - 1)+1)
}
module.exports = getRandomNumber
function aliveSound( ){
    let audioA = document.getElementById("aliveSound")
    audioA.currentTime= 0
    audioA.play()
}


function resurection() {  
    for (let i = 0; i < coderList.length; i++) {
        coderList[i].life = true
        document.querySelector(".slider").style.left = -62 + "px"
        upDateRoulette()
        createPlayers()
        aliveSound()
    }
}



botonGo.addEventListener("click", startRoulette)
botonReset.addEventListener("click", resurection)