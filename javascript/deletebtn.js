let trash = document.querySelector('.trashButton')

function deleteCoder () {
 let arrayDelete = document.querySelectorAll('.delete') 
    for (let i = 0; i < arrayDelete.length; i++) {
      if (arrayDelete[i].style.display == "none") {
        arrayDelete[i].style.display = "block";
      } 
      else if (arrayDelete[i].style.display == "block"){
      arrayDelete[i].style.display='none';
      }
    }
  }

trash.addEventListener('click',deleteCoder)