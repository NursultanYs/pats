'use strict';

const box=document.querySelector('.box'),
      btn=document.querySelector('button');
const width=box.clientWidth;
const height=box.clientHeight;
console.log(width,height)


btn.addEventListener('click',()=>{
    console.log(box.scrollTop)
})

console.log(box.getBoundingClientRect().top);

const style=window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);
