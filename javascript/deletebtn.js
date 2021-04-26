let trash = document.querySelector('.trashButton')

function renderCross () {
 let arrayDelete = document.querySelectorAll('.delete') 
    for (let i = 0; i < arrayDelete.length; i++) {
      if (arrayDelete[i].style.display == "none") {
        arrayDelete[i].style.display = "block";
      } 
      else if (arrayDelete[i].style.display == "block"){
      arrayDelete[i].style.display='none';
      }
    }
  }onck

trash.addEventListener('click',renderCross)


function eraseRecord(file) {
  let indexCoder = file.parentElement.parentElement.id
  coderList.splice(indexCoder,1)
  createPlayers() 
  upDateRoulette()
  renderCross()
}