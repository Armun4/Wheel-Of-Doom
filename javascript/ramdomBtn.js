let btnrandom = document.querySelector('.btn1')
let result = document.querySelector('.slider')



function getrandomcoder() {
   
    let result = Math.floor((Math.random() * coderList.length-1)+1);
    console.log(result)
    
}

btnrandom.addEventListener('click',() => {
    let index = getrandomcoder(0, coderList.lenght);
    result.innerText= coderList[index];
});




