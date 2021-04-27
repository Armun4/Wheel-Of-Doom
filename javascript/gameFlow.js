const botonGo = document.querySelector(".btn1")
const botonReset = document.querySelector(".btn2")

function startRoulette() {
    roulettesound()
    upDateRoulette()
    rouletteSpin()
    createPlayers()
}
function roulettesound() {
    let audio = document.getElementById("roulettesound")
    audio.play()
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
function resurection() {  
    for (let i = 0; i < coderList.length; i++) {
        coderList[i].life = true
        document.querySelector(".slider").style.left = -62 + "px"
        upDateRoulette()
        createPlayers()
    }
}

botonGo.addEventListener("click", startRoulette)
botonReset.addEventListener("click", resurection)