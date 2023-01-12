'use strict'

function User(name,id){
    this.name=name;
    this.id=id;
    this.human=true;
    this.hello=function(){
        console.log(`Hello,${this.name}`);
    }
}

User.prototype.exit=function(name){
    console.log(`Пользователь ${this.name} ушёл`)
}

const ivan=new User('Ivan',28);
const alex=new User('Alex',20);

ivan.exit();

ivan.hello();
alex.hello();



function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this)
        return a+b;
    }
    console.log(sum());
}

showThis(3,4)

const obj={
    a:20,
    b:15,
    sum:function(){
        function shout(){
            console.log(this);
        }
        shout();
    }
}
obj.sum();


function sayName(surname){
    console.log(this);
    console.log(this.name+surname);
}

const user={
    name:'John'
};
sayName.call(user,'Smith');
sayName.apply(user, ['Smith']);


function count(num){
    return this*num;
}
const double=count.bind(2);
console.log(double(2));
// 1) Обычная функция : this = window , но если стоит "use strict" - undefined 
// 2) Конекст у методов объекта - сам объект 
// 3) this в конструкторах и классах - это новый экземпляр объекта 
// 4) Ручная привязка this: call, apply , bind

const btn=document.querySelector('button');
btn.addEventListener('click',function(){
    console.log(this);  
})


const obj12={
    num:5,
    sayNumber:function(){
        const say=()=>{
             console.log(this);
        }
        say();
    }
}

obj12.sayNumber();

const doublee=(a)=>{
    return this*a;  
}


function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function() {
      console.log(this === myCat); // => false
      console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    };
  }
  var myCat = new Animal('Cat', 4);
  // logs "The undefined has undefined legs"
  // or throws a TypeError, in strict mode
  // setTimeout(myCat.logInfo,1000) 
setTimeout(myCat.logInfo.bind(myCat),1000)