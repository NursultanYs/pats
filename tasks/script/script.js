function calculateVolumeAndArea(n) {
    if(typeof(n)!=='number' || n<=0 || Number.isInteger(n)+''==='false'){
        return 'При вычислении произошла ошибка'
    }
    return `Объем куба: ${n*n*n},площадь всей поверхности: ${6*(n*n)}`
}

console.log(calculateVolumeAndArea(5.1))

function getCoupeNumber(n) {
if(typeof(n)!=='number' || n<0 || Number.isInteger(n)+''==='false'){
    return "Ошибка. Проверьте правильность введенного номера места"
}
if(n===0 || n>36){
    return "Таких мест в вагоне не существует"
}
else{
    return Math.ceil(n/4)
}
}

console.log(getCoupeNumber(5))


function getTimeFromMinutes(n) {
let hour;
let mat=Math.floor(n/60)
if(typeof(n)!=='number' || n<0 || Number.isInteger(n)+''==='false'){
    return "Ошибка, проверьте данные"
}
else{
    if(mat===1){
        hour='час'
    }
    else if(mat===0 || mat>=5){
        hour='часов'
    }
    else if(mat<5){
        hour='часа'
    }
    return `Это ${mat} ${hour} и ${n%60} минут`
}
}

console.log(getTimeFromMinutes(-300))

function findMaxNumber(a,b,c,d) {
const arr=[]
arr.push(a,b,c,d)
let result=arr.reduce((previous,current)=>{
    if(previous<=current){
       return  previous=current
    }else{
        return previous
    }
})
console.log(arr)
arr.forEach(e=>{
    if(typeof(e)!=='number'){
        result=0;
    }
})
return result
}
console.log(findMaxNumber(2,2,2,4))

let res;
if(1<5){
res=0
}
else if(2<5){
res=1
}
console.log(res)

function fib(n) {
let result=''
let first=0;
let second=1;
if(typeof(n)!=='number' || n<=0 || Number.isInteger(n)+''==='false'){
    return result
}
for(let i=0;i<n;i++){
    if(i+1===n){
        result+= `${first}`
    }
    else{
        result+= `${first} `
    }
    let third=first+second;
    first=second;
    second=third;
}
return result
}

console.log(fib(7))

const arr=[0,1]

let ress=arr.reduce((previous,current)=>{
arr.push(current)
console.log(arr)
return previous+current;
})

console.log()

//Объекты

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        console.log(languages)
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {skills:{exp}}=plan;
    return exp
}

console.log(showExperience(personalPlanPeter))

function showProgrammingLangs(plan) {
    let result='';
    const {skills:{programmingLangs}}=plan
    const {js,php,...rest}=programmingLangs;
    if(Object.keys(programmingLangs).length===0){
            result+=''
        }
    for(let key in programmingLangs){
        result+=`Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return result
}

console.log(showProgrammingLangs(personalPlanPeter))

const obj={
    first:1,
    second:2,
    third:[1,2,3]
}
const {first,second}=obj

const [third,fourth,fifth]=obj.third
console.log(fourth)
console.log(third)

function showFamily(arr) {
    if(arr.length===0 || typeof(arr.length)!=="number"){
        return 'Семья пуста'
    }else{eturn `Семья состоит из: ${arr.join(' ')}`}
}
console.log(showFamily(['Peter', 'Ann', 'Alex', 'Linda']));

function standardizeStrings(arr) {
    return arr.join('\n').toLowerCase();
}
console.log(standardizeStrings(['liSBon', 'ROME', 'miLan', 'Dublin']))

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str)!=='string'){
        return "Ошибка"
    }else{
        const arr2=str.split('').reverse().join('');
        return arr2
    }
}
console.log(reverse(someString))



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr3=[...baseCurrencies,...additionalCurrencies]

function availableCurr(arr, missingCurr) {
    if(arr.length===0){
       return 'Нет доступных валют:'
    }else{
        let result='Доступные валюты\n';
        arr.forEach(e=>{
        if(e!==missingCurr){
            result+=`${e}\n`
        }
    })
    return result
    }
}

console.log(availableCurr(arr3,'USD'))


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let {shops}=data;
    shops=shops.map(e=>{
        return e.width*e.length;
    })
    let arrea=shops.reduce((el,acc)=>acc+el);
    arrea=arrea*data.height;
    arrea=arrea*data.moneyPer1m3;
    console.log(arrea)
    if(arrea<=data.budget){
        return 'Бюджета достаточно'
    }else{
        return 'Бюджета недостаточно'
    }
}   

console.log(isBudgetEnough(shoppingMallData))


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a=[],b=[],c=[],rest=[];
    for(let i=0;i<arr.length;i++){
        if(i<3){
            a.push(arr[i]);
        }else if(i<6){
            b.push(arr[i]);
        }
        else if(i<9){
            c.push(arr[i]);
        }else{
            rest.push[arr[i]]
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students))

const obj1={
    first:1,
    second:2,
    third:3
}
obj1['first']=123

console.log(obj1)

function createCounter(){
    let counter=0;
    function inner (){
        counter=counter+1;
        return counter
    }
    return inner;
}

const increment=createCounter();
const c1=increment();
const c2=increment();
const c3=increment();

console.log(c1,c2,c3)



const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop.openNow ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0,-1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[3], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data))

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

