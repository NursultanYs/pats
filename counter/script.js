'use strict'
function createCounter(){
    let counter=0;

    const MyFunction = function(){
        counter=counter+1;
        return counter;
    }

    return MyFunction;
}

const ThisFunc=createCounter();

const c1=ThisFunc();
const c2=ThisFunc();

console.log(c1);
console.log(c2)

 let val = 7
  function createAdder() {
    function addNumbers(a, b) {
      let ret = a + b
      return ret
    }
   return addNumbers
 }
 let adder = createAdder()
 let sum = adder(val, 8)
 console.log('example of function returning a function: ', sum)

 let sayHi = function(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      sayHi("Guest"); // Ошибка: sayHi не является функцией
    }
  };
  
  let welcome = sayHi;
  
  welcome();

