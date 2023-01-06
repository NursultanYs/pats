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