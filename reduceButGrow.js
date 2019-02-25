const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator * currentValue;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce// 1 + 2 + 3 + 4
console.log(array.reduce(reducer)); // nezabudnúť poradie reduce() je JS metóda

/*
let sum =1;
for(let n of array)
sum *= n;

*/
