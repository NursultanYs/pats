//first  Какое сообщение будет выведено в консоль при таком коде?
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  const p5 = new Promise((resolve, reject) => {
    reject("reject");
  });
   
  Promise.all([p1, p2, p3, p4, p5]).then(value => {
    console.log(value);
  }, reason => {
    console.log(reason)
  });


  // second   Что выведет в консоль данный код?

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});
  
promise.then((value) => {
    console.log(value);
});


//three   Что будет содержаться в переменной result в результате работы кода?
const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result)

//four  Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
two().then(console.log);
 
//five   Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?

{const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
three().then(console.log);}

//six  Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?

{const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
function one() {
    const promises = [a(), b(), c()];
    Promise.all(promises).then(values => console.log(values))
}
 
one();}




function truncateString(str, num) {
    if(str.length<=num){
        return str;
    }else{
        if(num>3){
            let str2=str.slice(0,num-3)+'...';
            return str2;
        }else if(num===2){
            let str2=str.slice(0,2)+'...';
            return str2;
        }else if(num===1){
            let str2=str.slice(0,1)+'...';
            return str2;
        }
        else{
            let str2=str.slice(0,3)+'...';
            return str2;
        }
    }
}
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 1));