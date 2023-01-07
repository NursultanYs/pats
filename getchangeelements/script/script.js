const circles=document.getElementById('circle')
const circles2=document.querySelectorAll('.circles')
const div=document.createElement('div')
const p=document.createElement('p')
// const text=document.createTextNode('Here i am');


num=30;

circles.style.width="123px"
circles.style.height="123px"
circles.style.backgroundColor="black"
circles.style.borderRadius="50%"

circles2[0].style.cssText='background-color:blue; width:50px; height:50px; border-radius:50%'

div.classList.add('red');

document.body.append(div);
document.body.prepend(div);

// circles[0].before(div)
circles2[0].after(div)
div.append(p)
p.remove()

circles2[1].replaceWith(circles)

// circles.innerHTML="<p>Hello,World!</p>"

circles.textContent="Hello"

circles.insertAdjacentHTML("beforebegin",'<h2>Hehe</h2>')



// circles.insertAdjacentHTML("afterbegin",'<h2>Hehe</h2>') ставит в начало
// circles.insertAdjacentHTML("beforeend",'<h2>Hehe</h2>') ставит в конец
// circles.insertAdjacentHTML("afterend",'<h2>Hehe</h2>') ставит после элемента

