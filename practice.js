//Modify the original array without creating a new array.
let myArray = ['a', 'b', 'c', 'd'];

myArray.push('end');
myArray.unshift('start');

console.log(myArray);

//Or you can use ES6

let myArray = ['a', 'b', 'c', 'd'];

myArray = ['start', ...myArray]; //spread operator
myArray = [...myArray, 'end'];

//or

//myArray = ['start', ...myArray, 'end'];
console.log(myArray);
