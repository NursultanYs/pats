//Nulish

const rectanle=document.querySelector('.rectangle');
rectanle.style.cssText='background-color:red'


let newHeight=100;
let newWidth=100;
function changeRectangle(elem,height,width){
    elem.style.height=`${height ?? 400}px`;
    elem.style.width=`${width || 400}px`;
    elem.innerHTML=`${(height ?? 200) * (width ?? 200)}`
}

(changeRectangle(rectanle,newHeight,newWidth))

let someUser;
let secondUser=0;
console.log(someUser ?? secondUser ?? "User");

//Оператор опциональной цепочки

const box=document.querySelector('.box');
const block=document.querySelector('.block');

// if(block){
//     console.log(block.textContent)
// }

console.log(block?.textContent)

console.log(1+2);

const userData={
    name:"Ivan",
    age:null,
    skills:{
        js:12
    },
    say: function(){
        console.log("hello");
    },
    create: function(){
        userData.surname="Ysmailov"
    }
}

console.log(userData)
userData.create()
console.log(userData)


userData.say();
userData.hey?.();
// if(userData && userData.skills && userData.skills.js){
//     console.log(userData.skills.js)
// }

console.log(userData?.skills?.js);


// Живые коллекции и полезные методы

const thirdquery=document.querySelectorAll('.third');
const thirdget=document.getElementsByClassName('third');

thirdquery.forEach(e=>{
    if(e.matches('.this')) console.log(e)
})

console.log(thirdquery[0].closest('.wrapper'))

thirdquery[0].remove()
thirdget[0].remove()

console.log(thirdquery);
console.log(thirdget)

Array.from(thirdget);

// Symbol 

const obj = {
    'name':'Test',
    [Symbol('id')]:1,
    getId:function(){
        return this[id];
    }
}

// console.log(obj[Object.getOwnPropertySymbols[obj][0]]);

const myAwesomeDB={
    movies:[],
    actors:[],
    [Symbol.for("id")]:123
}

myAwesomeDB.id='32232332';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);

//Дескрипторы свойств и полезные методы объектов 

const user={
    name: "",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData : function(){
        console.log(`${this.name} ${this.surname}`);
    }
}
// writable
// enumerable
// configurable

console.log(Object.getOwnPropertyDescriptor(user,'name'));

Object.defineProperty(user,'name',{value:Date(),writable:false});
Object.defineProperty(user,'new',{value:'12'});

Object.defineProperty(user,"showMyPublicData",{enumerable:false});
for (let key in user) console.log(key)

Object.defineProperties(user,{
    name:{writable:false},
    surname:{writable:false}
})

//Итерируемые конструкции

// for(key in obj){
//     console.log(obj[key]);
// }
// for(key of obj){
//     console.log(key);
// }



const salaries = {
    john : 500,
    ivan : 1000,
    ann: 5000,
    sayHello: function(){
        console.log("Hello");
    }
}


salaries[Symbol.iterator] = function(){
    return {
        current: this.john,
        last: this.ann,
        next(){
            if(this.current<this.last ){
                this.current = this.current +500;
                return {done:false,value:this.current}
            }else{        
               return  {done : true, value:123}
            }
            
        }
    }
}

const iterator=salaries[Symbol.iterator]();
console.log(iterator.next());

for(values of salaries){
    console.log(values)
}

// Map


const shops = [
    {rice:500},
    {oil:200},
    {bread:50}
];

const userobj={
    name:'Max',
    age:26,
    lvl:100
}

const userMap=new Map(Object.entries(userobj));
const newUserObj=Object.fromEntries(userMap);
console.log(newUserObj)

const budget=[5000,15000,25000];

const map =new Map([
    [{paper:400},8000]
]);

shops.forEach((shop,i)=>{
    map.set(shop,budget[i])
    i++
})

// map.set(shops[0],budget[0])
//     .set(shops[1],budget[1])
//     .set(shops[2],budget[2])


console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
// map.delete(key);
// map.clear();
// map.size;
// map.keys();

const goods=[];
// for(let shop of map.keys()){

//     goods.push(Object.keys(shop)[0])

// }

const prices=[];
// for(let shop of map.values()){

//     prices.push(shop)

// }

for(let [shop,price] of map.entries()){
    console.log(shop,price);
}

console.log(map)

map.forEach((values,keys)=>{
    prices.push(values);
    goods.push(keys);
})
console.log(goods)
console.log(prices)

//set 

const arr=[1,1,2,2,4,4];

const set=new Set(arr);

console.log(set)

const arr2=['Alex','Anna','Alex']

const set2=new Set(arr2);

set.add('Ivan')
    .add('Oleg');

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;
// set.values();
// set.keys();
// set.entries();

for(let value of set) console.log(value);

set.forEach((value,valueAgain,set)=>{

})

function unique(arr){
    return Array.from(new Set(arr));
}

// BigInt

console.log(Number.MAX_SAFE_INTEGER)

const bigint=12312312312312312312312312312322n;

const sameBigint=BigInt(12312312312312312312312312312322);

// 5n+1 //Error
// 2n>1 //true
// console.log(1n+3n); //4n
// 5n/2n //2n

let bign=1n;
let number=2;

console.log(bign+BigInt(number)); //3n
console.log(Number(bign)+number); //3

console.log(String(10).length)


function amountOfPages(summary){

let pages=0 
let i=1
for(i;pages<summary;i++){
    pages+=(String(i).length)
    }
    return i-1
}

console.log(amountOfPages(1095));


function isPangram(string) {

    const set=new Set(string.toLowerCase())
    if((set.size)-1===26){
        return true
    }else{
        return false
}}

console.log(isPangram("Hello World"))


function deepCount(a){

}


function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]))

// WeakMap 

let user3={name:'Ivan'};

let weakmap=new WeakMap();
weakmap.set(user3,'data');
user3=null;
console.log(weakmap.has(user3)) //false

let cache=new WeakMap();
function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user,Date.now());
    }
    return cache.get(user);
}

let lena={name:"Elena"};
let alex={name:"Alex"};

cacheUser(lena);
cacheUser(alex);

lena=null;

console.log(cache.has(lena)); 
console.log(cache.has(alex));

//WeakSet
// add,has,delete

let messages=[
    {text:'Hello',from:'John'},
    {text:'World',from:'Alex'},
    {text:'.....',from:'M'}
]

let readMessages=new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);
readMessages.add(messages[0]);


messages.shift();
console.log(readMessages.has(messages[0]));

