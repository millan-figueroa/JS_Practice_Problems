/* 
Declare a variable 'words' and set it to an array containing the words 'apple', 'almond', 'artichoke', and 'avocado'.
*/


/* 
Declare a function 'startsWithA' that takes in a string as an argument. It should return true if 
the provided string starts with the letter A, and false otherwise.
The function should be case-insensitive.*/

// console.log(startsWithA('AERIAL')) //should return true
// console.log(startsWithA('banana')) //shold return false
// console.log(startsWithA('apples')) //should return true


/* 
Declare another function 'allElementsPass', which takes an array and a callback as arguments.
The callback function will be expected to return a boolean. When 'allElementsPass' is called, it 
will run the callback function on each item in the array, and return a boolean depending on 
whether the callback returns true for all items. In other words, if the callback returns true 
when called on ALL array items, 'allElementsPass' should also return true. However, if the 
callback returns false for ANY items, 'allElementsPass' should return false.
'
//iterate through array, applying cb on each item 
//use counter to increment how many items return true or false
//compare counters
let words = ['apple', 'almond','mangos', 'artichoke', 'banana', 'avocado'];
let words2 = ['apple', 'almond', 'artichoke', 'avocado'];

function allElementsPass(arr, cb){
    let trueCounter = 0;
    let falseCounter = 0;
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i]) === true){
            trueCounter++;
        } else {
            falseCounter++;
        }
    }
    if(trueCounter === arr.length){
        return true;
    } else {
        return false;
    }
}
// Check that your 'allElementsPass' function is working correctly by calling it with the 'words' 
//array and 'startsWithA' as the callback.

console.log(allElementsPass(words, startsWithA)) //should return false
console.log(allElementsPass(words, startsWithA)) //should return true
*/

/* 
Declare a function 'record', which takes a callback function as an argument and returns another 
function. The returned function takes in a number, and when invoked, will run the callback on this 
number. The function should keep a record of all previous results of running the callback (and if 
it is invoked more than once with the same argument, it should not run the callback again on 
that argument). On each invocation, it should return the *highest value so far* among all previous 
calls. Once complete, make sure to test your function.

output:highest value of invoking the callback function on the passed in number

//declare a result object save the number and the result as key:value pair 4:8
//use for.. in loop to iterate over object, conditional will check itudy f arg passed in as key on object
will return highest value
*/

function record(cb){

    const cache = {};
    let result = 0; 

    return function(num){

        if(!cache.hasOwnProperty(num)){ // {2 : 4}
            cache[num] = cb(num);
        }

        for(const prop in cache){
            if(cache[prop] > num){
                result = cache[prop];
            }
        }
        
        return result;
    }
}

const timesTwo = record(function(num){return num * 2})
console.log(timesTwo(2)); //4
console.log(timesTwo(4)); //8
console.log(timesTwo(1)); //8
console.log(timesTwo(15)); //30
console.log(timesTwo(5)); //30








