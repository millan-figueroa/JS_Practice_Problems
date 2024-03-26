/* 
Declare a variable 'words' and set it to an array containing the words 'apple', 'almond', 'artichoke', and 'avocado'.
*/




/* 
Declare a function 'startsWithA' that takes in a string as an argument. It should return true if 
the provided string starts with the letter A, and false otherwise.
The function should be case-insensitive.*/

//Millan note:make sure test it with capital and lower-case*/




/* 
Declare another function 'allElementsPass', which takes an array and a callback as arguments.
The callback function will be expected to return a boolean. When 'allElementsPass' is called, it 
will run the callback function on each item in the array, and return a boolean depending on 
whether the callback returns true for all items. In other words, if the callback returns true 
when called on ALL array items, 'allElementsPass' should also return true. However, if the 
callback returns false for ANY items, 'allElementsPass' should return false.


Millan note: Check that your 'allElementsPass' function is working correctly by calling it with the 'words' 
array and 'startsWithA' as the callback.

console.log(allElementsPass(words, startsWithA)) //should return false
console.log(allElementsPass(words, startsWithA)) //should return true
*/



/* 
Declare a function 'record', which takes a callback function as an argument and returns another 
function. The returned function takes in a number, and when invoked, will run the callback on this 
number. 

The function should keep a record of all previous results of running the callback (and 
    
    if it is invoked more than once with the same argument, it should not run the callback again on 
that argument). 

On each invocation, it should return the *highest value so far* among all previous 
calls. Once complete, make sure to test your function.

*/
//input callback
//output: highest result of callback 
//It checks if the number is already a key in the results object.
//If not, it calls the callback function with the number parameter and stores the result in the results object.
//falsey: save result as key, timesCalled var = true
//truthy: check if saved output is higher than current result, return higher number


//Q1 Create an array named 'animals' and populate it with the following animal names: 'lion', 'elephant', 'zebra', 'lizard'.

//Q2 Declare a function 'startsWithl' that takes in a string as an argument. It should return true if the provided string starts with the letter L, and false otherwise.
//The function should be case-insensitive.
//(sofia's hint, use the previous array as your test case)

//console.log(startsWithL(animals[3]))
//Q3 Develop a function named 'someElementsPass' which takes an array and a callback as arguments. The callback function will return a boolean. 
//'someElementsPass' should iterate over each item in the array and return true if the callback returns true for at least one item. Otherwise, 
//it should return false.


//Q4 Declare a function 'memoize', which takes a callback function as an argument and returns another function. The returned function takes in a 
//number, and when invoked, will run the callback on this number. The function should store the results of running the callback (and if it is 
//invoked more than once with the same argument, it should not run the callback again on that argument). On each invocation, it should return 
//the *result* for the given argument from the stored results, followed by howmany times that result was called. Once complete, make sure to 
//test your function.

//inputs: cb
//outputs: result, timesCalled
//first check if result exists in object, if it doesn't add it, and timesCalled = 1 by default
//if it doest exist, return along with timesCalled

// function memoize(cb){

//     const cache = {};

//     return function(n) {
//         let result = cb(n);
//         let timesCalled = 1
//         if(!(result in cache)) {
//             cache[result] = timesCalled;
//         }

//         if(result in cache) {
//             cache[timesCalled++]
//         }

//         return cache[result] 

                
//     }
// }
function memoize(callback) {
    const cache = {};
    const count = {};

    return function(num) {
        if (cache[num] !== undefined) {
            count[cache[num]] = (count[cache[num]] || 0) + 1;
            return `${cache[num]}, ${count[cache[num]]}`;
        } else {
            const result = callback(num);
            cache[num] = result;
            count[result] = (count[result] || 0) + 1;
            return `${result}, 1`;
        }
    };
}

const multiplyBy2 = memoize((n) => {return n * 2})
console.log(multiplyBy2(2)) // 4, 1
console.log(multiplyBy2(4)) // 8, 1
console.log(multiplyBy2(2)) // 4, 2
console.log(multiplyBy2(8)) // 16, 1
console.log(multiplyBy2(2)) // 4, 3
//Q5 Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the 
//sum of the elements in the array starting at the initial value.

//Q6 Make a function that produces an object with numbers that have ordered values and removes duplicates with a length item

// Also create a prototype that adds properties 
// And one that removes object properties

// For example:
// Input 10,20,20,30,40
// Output {1:10,2:20,3:30,4:40 length: 4}


/* 
Declare a variable 'nums' and set it to an array containing all number from 11 to 19.
*/


/* 
Declare a function 'isEven', which takes a number as an argument. The function should return a boolean depending on whether the passed-in number is even.
*/

// console.log(isEven(2)) // true
// console.log(isEven(5)) // false 
// console.log(isEven(6)) // true 


/* 
Declare a function 'findLastTrueElement'. It should take two arguments: an array, and a callback which returns a boolean.
'findLastTrueElement' should sequentially run the callback on the elements in the passed-in array, and return the index of the LAST element for which the callback evaluates to true.
If the callback is not true for any elements, 'findLastTrueElement' should return undefined. 
*/

// input: array, callback
// output: index

// variable, set to undefined

// iterate through array
// check if results of callback is equal to true

function findLastTrueElement(array, callback){
  let lastTrue = undefined
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i]) === true){
      lastTrue = i
    }
  }
  return lastTrue
}

// console.log(findLastTrueElement([12, 11, 14], isEven)) // 2
// console.log(findLastTrueElement([11, 15], isEven)) // undefined
// console.log(findLastTrueElement(nums, isEven)) // 7

/* 
Declare a function called 'itemTracker', which takes in a string and a number as arguments, and returns a function that tracks and updates an inventory for an item. 
The string passed into 'itemTracker' will represent the item you are keeping track of, and the number is how many you currently have of that item.
The function that is returned from 'itemTracker' should accept a number argument, and will allow you to update the item's quantity. 
When this returned function is invoked, it should add the passed-in number to the inventory and return out the new quantity.

Once complete, right some code to test your 'itemTracker' function. 

Example: 
const breadUpdater = itemTracker('bread', 0);
breadUpdater(10) // 10
breadUpdater(10) // 20
breadUpdater(-5) // 15 
*/

//outerfunction: input- string, initialNum output - return function
//innerfunction: input - num (updated initialNum) output - num (updated num)
//declare obj in outerfunction 
//{ itemName : passed in string } { quantity: passed in num}
//innerfunction : access initialNum in obj, add and assign innerfunc passed in num
//return updated num from obj
//on each invocation we're updating item's quantity

function itemTracker(str, initialNum) {
  
  const cache = { itemName : str, quantity : initialNum};
  
  
  return function(num) { 
    
    cache.quantity += num;

    return cache.quantity;
    }  
}
// const breadUpdater = itemTracker('bread', 0);
// console.log(breadUpdater(10)) // 10
// console.log(breadUpdater(10)) // 20
// console.log(breadUpdater(-5)) // 15 

/*
Declare a recursive function "mapArray" that takes at least two arguments (an array and a callback function).
"mapArray" should return a new array containing the returned values from running the callback function on each element in the array.

Once complete, right some code to test your 'mapArray' function.
*/

// input: array, callback, add an index, set to 0, add an empty array
// output: new array

// check if array at index is equal to undefined, if true, return new array
// invoke callback on each index of array and push into empty array
// return mapArray, pass in all of the same parameters, increment index by 1
function mapArray(array, callback, index = 0, result = []){
  if(array[index] === undefined) return result
  result.push(callback(array[index]))
  return mapArray(array, callback, index + 1, result)
  
}

// console.log(mapArray(nums, isEven)) // [false, true, false, true, false, true, false, true, false]

/* 
Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0. (You will later be creating methods to add values to the List.)
All List objects should contain their own 'length' property, which keeps track of the number of items they contain. When a List is first created, it should have a length of 0.
*/

//input: none
//output: instances of list objects
//add length prop to keep track of added items initialize to 0
//invoke new instance of list

function List() {
  this.length = 0;
}

const list = new List();
console.log(list) // { length = 0}

/* 
Declare a function, 'add', which is accessible to ALL instances of 'List'. 'add' should take in a single argument, and when invoked on a List instance, should add the argument to the end of that particular List (i.e. at the highest index), increment the List's length property, and return the new length.
*/

// input: single arg
// output: updated length

// access object
List.prototype.add = function(arg){
  this[this.length] = arg
  this.length++
  return this.length
}

console.log(list.add('bread'))// 1
console.log(list.add('cheese'))// 2
console.log(list) // {0:bread, 1:cheese, length:2}
console.log(list[0])
console.log(list[1])
























