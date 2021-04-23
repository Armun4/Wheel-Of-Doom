let plusbutton = document.querySelector(".plusButton")


function filemodal() {  
çconsole.log("hola");
    let newplayer = ""
    newplayer += `
    <section   class="product-description">
        <h3 class="newplayer">New player</h3> 
        <h3 class="name">name</h3> 
        <input type="text" class="input" >
     <div  class="photo.botton">
        <img src="./Photos/cryptopunks/3cp.png" class="photo"> <div class="voting"> 
            <!-- Up button -->
             <button class="voting__button">
                  <div class="voting__triangle voting__triangle--up"></div> 
                </button>
                 <!-- Number --> 
                <div class="voting__number"> 1 </div>
                 <!-- Down button --> <button class="voting__button"> 
                     <div class="voting__triangle voting__triangle--down">

                     </div> </button>
</div>
</div>



    <a href="#" class="myButton">Create</a>

    </section>`

    document.getElementById("root").innerHTML = newplayer
}
plusButton.addEventListener ("click", filemodal )

function newfile() {
    let listfile = ""
    let number = coderList.length
    for (let i = 0; i < number; i++) {
        listfile += `
    <div class="coders_display" onclick="filemodal" id="${coderList[i].index}">
        <img src="${coderList[i].img}" alt="${coderList[i].alt}">
    </div>
    `
    }
document.querySelector(".coders_display").innerHTML = listItems
}
newfile()


