function newplayer() {
    let inputvalue = document.querySelector(".input").value
    let imgsearch = document.querySelector(".photo")
    coderList.push({name:inputvalue,img: imgsearch.src, id: coderList.length,life:true})
    exit()
    createPlayers()
    upDateRoulette()
}


