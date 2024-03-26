/* 
Create a function "countChar" that takes two arguments (an input 
string and a target string of length 1). "countChar" will 
return the number of times the target string is found in the 
input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

function countChar(str, target, i = 0, counter = 0){

    if(str[i] === undefined) return counter;
console.log('value of i: ' + i)
console.log('value of counter: ' + counter)
    if(str[i] === target){
        counter + 1;
        return countChar(str,target, i + 1, counter)
    }
}

console.log(countChar('hello world', 'o')); //-> 2
//console.log(countChar('javascript', 'j')); //-> 1

/*  Declare a recursive function 'findIndex', which takes in at least two arguments (an array and a value).
'findIndex' should search the array for the passed-in value. If found, it should return the first index number at which the value appears. If not, it should return -1.

Example: findIndex([1, 2, 3, 4, 5, 3], 3) --> 2
*/


/* 
Declare a recursive function 'applyToEachElement' that takes in at least two arguments (an array and a callback 
function). When invoked, 'applyToEachElement' should sequentially run the callback on each item in the passed-in 
array. It should not return anything.

Once complete, write some code to test your 'applyToEachElement' function. */

const nums = [2, 6, 8, 9];

const printValue = function(value) {
    console.log(value)
};


/* Write a function 'findMissingChar' that takes a string as an argument and returns the missing character.
If there's no missing character, return -1. Accomplish this without using any loops, or native JS methods.
NOTE: A non-missing string is a string with consecutive characters in the alphabet order
Ex: findMissingChar('cdefgi'); → 'h'
Ex: findMissingChar('abcde'); → -1 */

