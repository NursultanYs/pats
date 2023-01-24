'use script'

// new RegExp('pattern','flags');

// /pattern/f

const ans='AddddN';
const reg=/n/ig;

// \d-numbers
// \w-words
// \s-spaces

// \D-not numbers
// \W-not words

const numb='200px'
console.log(numb.match(/\d/g));  //[ '2', '0', '0' ]

const str='My name is R2D2';
console.log(str.match(/\w\d\w\d/i));  // [ 'R2D2', index: 11, input: 'My name is R2D2', groups: undefined ]

// i - независимость от регистра
// g - глобальный поиск
// m - игнорирование переноса строки

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// console.log(ans.replace(/\./g,'*'));

console.log(ans.replace(/./g,'*'));

console.log('12-34-56'.replace(/-/g,':')); // 12:34:56

console.log(reg.test(ans));  //true