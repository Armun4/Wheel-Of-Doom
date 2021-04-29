

function createPlayers() {
    let coder = ""
    for (let i = 0; i < coderList.length; i++){
        if (coderList[i].life === true) {
            coder += `
        <li class="coder-token" id="${i}">
            <figure class="coder-avatar">
            <button class="delete" style="display:none" onclick="eraseRecord(this)">X</button>
                <img src="${coderList[i].img}" alt="" />
            </figure>
            <figcaption class="coder-name">${coderList[i].name}</figcaption>
        </li>
        `
        }
        if (coderList[i].life === false) {
            coder += `
        <li class="coder-token" id="${i}">
            <figure class="coder-avatar">
            <button class="delete" style="display:none" onclick="eraseRecord(this)">X</button>
                <img src="./Photos/calavera.png" alt="" />
            </figure>
            <figcaption class="coder-name">${coderList[i].name}</figcaption>
        </li>
        `
        }
    }
    
    document.querySelector(".coders-list").innerHTML = coder
}

function upDateRoulette() {
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
createPlayers()
upDateRoulette()