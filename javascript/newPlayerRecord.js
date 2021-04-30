let plusbutton = document.querySelector(".plusButton")

function recordCreator() {  
    let newplayer = ""
    newplayer += `
    <div class="container">
    <section class="new-player-pop-up">
      <button onClick="exit()" class="exit">✖️</button>
      <h3 class="newplayer">New player</h3>
      <input type="text" class="input" placeholder="type a name..."/>
      <div class="selection-photo">
        <img src="./Photos/cryptopunks/cp14.png" id="14" class="photo" />
        <div class="selection">
          <!-- Up button -->
          <div class="arrow-up"
            id="up"
            onClick="photoChoiceUp(this)">.
          </div>
          <!-- Down button -->
          <div class="arrow-down"
            id="down"
            onClick="photoChoiceDown(this)">.
          </div>
        </div>
      </div>
      <a href="#" onClick="newplayer()" class="myButton">CREATE</a>
    </section>
  </div>
  `
    document.getElementById("root").innerHTML = newplayer
}

plusbutton.addEventListener ("click", recordCreator)

function exit() {
    document.querySelector("#root").innerHTML = ""
}

function photoChoiceUp (select){
  let photoselect = document.querySelector(".photo")
  let index = photoselect.id
    if (select.id === "up" && photoselect.id < photoList.length -1){
      photoselect.src= photoList[index++].img
      photoselect.id = index++
    }
  }
    
function photoChoiceDown (select){ 
  let photoselect = document.querySelector(".photo")
  let index = photoselect.id 
  index = index - 1
  if (select.id === "down" && photoselect.id > 0){
      photoselect.src=photoList[index].img
      photoselect.id= index
  }
}
