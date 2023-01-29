const btn=document.querySelector('.btn'),
      elem=document.querySelector('.box'); 
    let pos = 0;
// btn.addEventListener('click',()=>{
//          timerId= setInterval(logger,1000);
  
// })

// function logger(){
//     if(i===3){
//         clearInterval(timerId); 
//     }
//     console.log("Hi")
//     i++;
// }
// setTimeout(logger,2000)

// let id=setTimeout(function log(){
//     console.log("Hello");
//     id=setTimeout(log,500);
// },500)

// function myAnimation(){
//     const elem=document.querySelector('.box');
//     let pos = 0;

//     setInterval(frame,10);
//     function frame(){
//         if(pos===300){
//             clearInterval();
//         }else{
//             pos++;
//             elem.style.top=pos+'px';
//             elem.style.left=pos+'px';
//         }
//     }
// }
// btn.addEventListener('click',myAnimation)

function myAnimation(){
    pos++;
    elem.style.top=pos+'px';
    elem.style.left=pos+'px';

    if(pos<300){
        requestAnimationFrame(myAnimation);
    }else if(pos>=300){
        pos=0;
    }

}
btn.addEventListener('click',()=>{
    requestAnimationFrame(myAnimation)
})

let id=requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);