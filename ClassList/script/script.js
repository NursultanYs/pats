const btns=document.querySelectorAll('button'),
      btnParrents=document.querySelector('#first')

// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue','rferferf'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')){
//     console.log('red')
// }

btns[1].addEventListener('click',()=>{
    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red')
    // }else{
    //     btns[1].classList.remove('red')
    // }



    // (btns[1].classList.toggle('red'))
});


btnParrents.addEventListener('click',(event)=>{
    if(event.target && event.target.matches('button')){
        console.log(event.target.classList.toggle('red'))
    }
})

const newButton=document.createElement('button');
newButton.classList.add('red');
btnParrents.append(newButton)