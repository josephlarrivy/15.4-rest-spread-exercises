//Rest / Spread Operator Exercises
//In this exercise, you’ll refactor some ES5 code into ES2015.

//Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
//Refactor it to use the rest operator & an arrow function:

const filterOutOdds2 = ((...nums) => nums.filter(num => num%2 === 0));


// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...numbers) => Math.min(...numbers);

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1


// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects (obj1, obj2) {
  return {...obj1, ...obj2};
}

//online solution
const mergeObjectsSolution = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

function doubleAndReturnArgs (arr, ...others) {
  return [...arr, ...others.map(n => n*2)];
}

//rewritten:
const doubleAndReturnArgs2 = (arr, ...others) => [...arr, ...others.map(n => n*2)];

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/* remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let rand = math.floor(Math.random()*items.length);
  return [...items.slice(0,rand), ...items.slice(rand +1)];
}

const removeRandom2 = (items) => {
  let rand = math.floor(Math.random()*items.length);
  return [...items.slice(0,rand), ...items.slice(rand +1)];
}




/* Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

const extend2 = (array1, array2) => [...array1, ...array2];




/* Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
}

const addKeyVal2 = (obj, key, val) => {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
}





/* Return a new object with a key removed. */


function removeKey(obj, key) {
  let newObject = {...obj};
  delete newObj[key];
  return newObject;
}

const removeKey2 = (obj, key) => {
  let newObject = {...obj};
  delete newObj[key];
  return newObject;
}





/* Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1, ...obj2};
}

const combine2 = (obj1, obj2) => {
  return {...obj1, ...obj2};
}





/* Return a new object with a modified key and value. */

function update(obj, key, val) {
  return {...obj, [key]: val};
}

const update2 = (obj, key, val) => {
  return {...obj, [key]: val};
}



//still need to refactor everything into arrow functions