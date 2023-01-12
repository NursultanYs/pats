//const now=new Date();
//const now=new Date(2023,0,12,18);
//const now =new Date(-99999999);
//const now =new Date(0)
// const now=new Date('2023-01-12');
new Date.parse('2023-01-12');
const now =new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());   

// console.log(now.getTime());

console.log(now.setHours(18 , 40));

let start=new Date();

for(let i=0;i<100000;i++){
    let sum=i**3;
}

let end = new Date();

console.log(end-start)