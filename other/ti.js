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


//Q1 Create an array named 'animals' and populate it with the following animal names: 'lion', 'elephant', 'zebra', 'lizard'.

//Q2 Declare a function 'startsWithl' that takes in a string as an argument. It should return true if the provided string starts with the letter L, and false otherwise.
//The function should be case-insensitive.
//(sofia's hint, use the previous array as your test case)

//Q3 Develop a function named 'someElementsPass' which takes an array and a callback as arguments. The callback function will return a boolean. 'someElementsPass' should iterate over each item in the array and return true if the callback returns true for at least one item. Otherwise, it should return false.

//Q4 Declare a function 'memoize', which takes a callback function as an argument and returns another function. The returned function takes in a number, and when invoked, will run the callback on this number. The function should store the results of running the callback (and if it is invoked more than once with the same argument, it should not run the callback again on that argument). On each invocation, it should return the *result* for the given argument from the stored results, followed by howmany times that result was called. Once complete, make sure to test your function.

//const multiplyBy4 = memoize((n) => 4 * n);
// console.log(multiplyBy2(2)) // --> 8, 1;
// console.log(multiplyBy2(6)) // --> 24, 1;
// console.log(multiplyBy2(2)) // --> 8, 2;
// console.log(multiplyBy2(10)) // --> 40,1; 	
// console.log(multiplyBy2(2)) // --> 8, 3; 	

//Q5 Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.

//Q6 Make a function that produces an object with numbers that have ordered values and removes duplicates with a length item

// Also create a prototype that adds properties 
// And one that removes object properties

// For example:
// Input 10,20,20,30,40
// Output {1:10,2:20,3:30,4:40 length: 4}

