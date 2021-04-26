let trash = document.querySelector('.trashButton')

function deleteCoder () {
 let arrayDelete = document.querySelectorAll('.delete') 
 console.log(arrayDelete[0].style.display)
 if (arrayDelete[0].classList.contains('block')) {
    
    for (let i = 0; i < arrayDelete.length; i++) {
        arrayDelete[i].style.display='block';
        arrayDelete[i].classList.add('none')
        arrayDelete[i].classList.remove('block')
      }
 }
 
 if (arrayDelete[0].style.display =='none'  ) {
    for (let i = 0; i < arrayDelete.length; i++) {
        arrayDelete[i].classList.add('block')
        arrayDelete[i].classList.remove('none')
        arrayDelete[i].style.display='none';
      }
 }
    
}


trash.addEventListener('click',deleteCoder)
