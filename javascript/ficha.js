let plusbutton = document.querySelector(".plusButton")

function filemodal() {  
    let newplayer = ""
    newplayer += `
    <div class="container">
    <section   class="product-description">
        <button onClick="exit()" class="exit">X</button>
        <h3 class="newplayer">New player</h3> 
        <h3 class="name">name</h3> 
        <input type="text" class="input" >
     <div  class="photo_botton">
        <img src="./Photos/cryptopunks/cp03.png" class="photo"> <div class="voting"> 
            <!-- Up button -->
                  <div class="voting__triangle voting__triangle--up"></div> 
                 <!-- Number --> 
                <div class="voting__number"> </div>
                 <!-- Down button --> 
                     <div class="voting__triangle voting__triangle--down">

                     </div>
</div>
</div>



    <a href="#" onClick="newplayer()" class="myButton">Create</a>

    </section>
    </div>`

    document.getElementById("root").innerHTML = newplayer
}

plusbutton.addEventListener ("click", filemodal )


function exit() {
    document.querySelector("#root").innerHTML = ""
}
