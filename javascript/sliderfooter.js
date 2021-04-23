function createPlayers() {
    let coder = ""
    for (let i = 0; i < coderList.length; i++){
        if (coderList[i].life === true) {
            coder += `
        <li class="coder-token">
            <figure class="coder-avatar">
                <img src="${coderList[i].img}" alt="" />
            </figure>
            <figcaption class="coder-name">${coderList[i].name}</figcaption>
        </li>
        `
        }
        if (coderList[i].life === false) {
            coder += `
        <li class="coder-token">
            <figure class="coder-avatar">
                <img src="./Photos/calavera.png" alt="" />
            </figure>
            <figcaption class="coder-name">${coderList[i].name}</figcaption>
        </li>
        `
        }
    }
    document.querySelector(".coders-list").innerHTML = coder
}
createPlayers()

function slider() {
    let player = ""
    for (let i = 0; i < coderList.length; i++){
        if (coderList[i].life === true){
            player += `
        <div id="${i}">
            <h2>${coderList[i].name}</h2>
            <img src="${coderList[i].img}"/>
        </div>
        `
    }
        }
    
    document.querySelector(".slider").innerHTML = player
}
slider()

const botonGo = document.querySelector(".btn1")

function go() {
    slider()
    let sliders = document.querySelector(".slider")
    let playersLife = document.querySelectorAll(".slider div")
    let player = sliders.offsetWidth / playersLife.length
    let numberRandom = Math.floor((Math.random() * playersLife.length - 1)+1)
    let dead = playersLife[numberRandom].id
    console.log(dead)
    let meNewPosition = - player * numberRandom
    sliders.style.left = (meNewPosition + player) + "px" 
    coderList[dead].life = false
    createPlayers()
}

botonGo.addEventListener("click", go)

const botonReset = document.querySelector(".btn2")

function reset() {  
    for (let i = 0; i < coderList.length; i++) {
        coderList[i].life = true
        document.querySelector(".slider").style.left = -62 + "px"
        slider()
        createPlayers()
    }
}

botonReset.addEventListener("click", reset)