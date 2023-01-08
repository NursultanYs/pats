const div=document.querySelector('.div'),
      blocks=document.querySelector('.blocks'),
      circles=div.querySelectorAll('.circles'),
      rectangles=blocks.querySelectorAll('.rectangles'),
      link=document.querySelector('a')


div.style.cssText='background-color:blue; width:250px; height:250px; '
circles.forEach(e=>e.style.cssText='background-color:blue; width:50px; height:50px')
// div.onclick=function(){
//     div.style.backgroundColor='red';
// }


// let i=0;
const changeBcg=(e)=>{
    console.log(e.currentTarget);
    e.target.style.backgroundColor='red';
    // i++
    // if(i===2){
    // div.removeEventListener('mouseenter',changeBcg);
    // }
}

div.addEventListener('click',changeBcg);
circles.forEach(e=>e.addEventListener('click',changeBcg))


link.addEventListener('click',(e)=>{
    console.log(e.target)
    e.preventDefault();
},{once:true})

console.log(document.querySelector('[data-any="3"]').nextElementSibling);