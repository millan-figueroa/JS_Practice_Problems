/* 
Declare a variable 'words' and set it to an array containing the words 'apple', 'almond', 'artichoke', and 'avocado'.
*/




/* 
Declare a function 'startsWithA' that takes in a string as an argument. It should return true if 
the provided string starts with the letter A, and false otherwise.
The function should be case-insensitive.

Millan note:make sure test it with capital and lower-case*/




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
number. The function should keep a record of all previous results of running the callback (and if 
it is invoked more than once with the same argument, it should not run the callback again on 
that argument). On each invocation, it should return the *highest value so far* among all previous 
calls. Once complete, make sure to test your function.

*/







