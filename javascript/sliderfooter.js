function createPlayers() {
    let coder = ""
    for (let i = 0; i < coderList.length; i++){
        coder += `
        <li class="coder-token">
            <figure class="coder-avatar">
                <img src="${coderList[i].img}" alt="" />
            </figure>
            <figcaption class="coder-name">${coderList[i].name}</figcaption>
        </li>
        `
    }
    document.querySelector(".coders-list").innerHTML = coder
}
createPlayers()

function slider() {
    let player = ""
    for (let i = 0; i < coderList.length; i++){
    player += `
        <div id="${i}">
            <h2>${coderList[i].name}</h2>
            <img src="${coderList[i].img}"/>
        </div>
        `
    }
    document.querySelector(".slider").innerHTML = player
}
slider()

const botonGo = document.querySelector(".btn1")

function go() {
    let slider = document.querySelector(".slider")
    let player = slider.offsetWidth / coderList.length
    let numberRandom = Math.floor((Math.random() * coderList.length - 1)+1)
    console.log(numberRandom)
    let meNewPosition = - player * numberRandom
    slider.style.left = (meNewPosition + player) + "px" 
    newDead(numberRandom)
}
function newDead(numb) {
    let slider = document.querySelector(".slider")
    let player = slider.offsetWidth / coderList.length
    console.log()
    // slider anchura
    // como de ancho 
    // coger el numero random
    // operacion matematica

}
botonGo.addEventListener("click", go)