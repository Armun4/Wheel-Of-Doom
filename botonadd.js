let addbtn = document.getElementById("mybutton")
addbtn.onclick = newplayer

function newplayer() {
    let inputvalue = document.getElementById("coderslist").value
    colors.push ({name:inputvalue})
    addList()
    
}

function  addplayer () {
    let getcolors = document.getElementById("coderslist")
    getcolors.innerHTML=``
    for (let i=0; i<colors.length;i++) {
    getcolors.innerHTML += `<li>${coderList[i].name}</li>`
      }
    
}
