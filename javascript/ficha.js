let plusbutton = document.querySelector(".plusButton")

function filemodal() {  
    let newplayer = ""
    newplayer += `
    <div class="container">
    <section class="product-description">
      <button onClick="exit()" class="exit">X</button>
      <h3 class="newplayer">New player</h3>
      <h3 class="name">name</h3>
      <input type="text" class="input" />
      <div class="photo_botton">
        <img src="./Photos/cryptopunks/cp14.png" id="14" class="photo" />
        <div class="voting">
          <!-- Up button -->
          <div
            class="voting__triangle voting__triangle--up"
            id="up"
            onClick="arrowSelect(this)"
          ></div>
          <!-- Number -->
          <div class="voting__number"></div>
          <!-- Down button -->
          <div
            class="voting__triangle voting__triangle--down"
            id="down"
            onClick="arrowSelect(this)"
          ></div>
        </div>
      </div>
  
      <a href="#" onClick="newplayer()" class="myButton">Create</a>
    </section>
  </div>
  `
  

    document.getElementById("root").innerHTML = newplayer
}

plusbutton.addEventListener ("click", filemodal )


function exit() {
    document.querySelector("#root").innerHTML = ""
}

function arrowSelect(select){
    let photoselect = document.querySelector(".photo")
    let index = photoselect.id
    if (select.id === "up" && photoselect.id < coderList.length){
      photoselect.src= coderList[index++].img
      photoselect.id = index ++
    }
    else if (select.id === "down" && photoselect.id > 0){
        photoselect.src=coderList[index --].img
        photoselect.id= index --
    }
    // al darle click al boton de las flechas, funciona la segundo click
    // problema de imagen 
}