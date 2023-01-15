'use strict'

//filter

const names=['Ivan','Ann','Ksenia','Voldemort']

const shrotNames=names.filter((name)=>{
    return name.length<5;
})

console.log(names);

//every , some

const some=[4,'qwe','asdasd'];

console.log(some.some(item=>typeof(item)==='number'));  //true
console.log(some.every(item=>typeof(item)==='number'));  //false


const obj={
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
}


const newArr=Object.entries(obj).filter(item=>item[1]==='persone').map(item=>item[0]);

console.log(newArr);


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
const films2=JSON.parse(JSON.stringify(films));

function showGoodFilms(arr) {
    const goodFilms=arr.filter(item=>item.rating>=8);
    return goodFilms;
}

function showListOfFilms(arr) {
    const listFilms=arr.map(item=>`${item.name}`).join(',');
    return listFilms
}
console.log(showListOfFilms(films))

function setFilmsIds(arr) {
    const setFilms=arr.map((item,i)=>{
        item.id=i;
        return item;
    });
    return setFilms;
}

const tranformedArray = setFilmsIds(films2);

function checkFilms(arr) {
    return arr.every(item=>item.id!==undefined);
}
console.log(films);
console.log(checkFilms(tranformedArray));




const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    const result=data.filter(item=>item.amount>0);
    return result.reduce((acc,c)=>acc+c.amount,0);
};

const getTotalIncomeAmount = (data) => {
        if(data.some(item=>item.amount<0)){
            return data.reduce((acc,c)=>acc+c.amount,0);
        }else{
            getPositiveIncomeAmount(funds);
        }
};

console.log(getTotalIncomeAmount(funds))