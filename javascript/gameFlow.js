const botonGo = document.querySelector(".btn1")
const botonReset = document.querySelector(".btn2")

function startRoulette() {
    roulettesound()
    upDateRoulette()
    rouletteSpin()
    setTimeout(() => {
        createPlayers()
    }, 4000)
    
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
    bordermove(numberRandom)
    coderList[playersLife[numberRandom].id].life = false
}
async function bordermove(number) {
    for(let i = 0; i  <= number; i++){
        let mydiv = document.querySelectorAll(".coder-token")
        let numberdiv = mydiv[i].id
        if (coderList[numberdiv].life == false && i != number) {
            number ++
        }   
         if (coderList[numberdiv].life == true){
            mydiv[numberdiv].classList.add("selector") 
            setTimeout(() => {
                mydiv[numberdiv].classList.remove("selector")
            }, 300)
            await sleep(3000 / number);
        }
        if (coderList[numberdiv].life == false && i === number ){
            mydiv[number].classList.add("selector") 
            setTimeout(() => {
                mydiv[number].classList.remove("selector")
            }, 600)
        }
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function getRandomNumber(array) {
    return Math.floor((Math.random() * array.length - 1)+1)
}
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