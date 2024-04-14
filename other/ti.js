
/*
I will paste an endless series of increasingly difficult challenges into the editor. 
Your task is to figure them out as best as you can, and remember that we’re looking 
for qualities beyond how many questions you get through, such as technical communication, 
engineering best practices and problem-solving through blocks.

You will be required to share your screen during the interview. Feel free to use any 
online resources that you normally would, like Google, Stack Overflow, documentation 
pages, etc., just don’t look up the solution directly. When you do look something up, 
let me know what you are looking up so I can understand your thought process.

There are no penalties for errors, so don’t be afraid to run your code with an expected 
outcome and use any error messages to your advantage in refactoring to get the desired 
outcome. Remember the importance of testing your code as some of the problems will build 
on each other, so you want to make sure it works before moving on.

Be sure to communicate your thought process with me as well. This will help me assess how 
you might work in a pair programming session or group environment, so keep that in mind. 
I might also ask you some questions during or after the interview, and welcome you to ask 
clarifying questions yourself.

As a few final reminders, I’m not able to give any feedback today as you 
will receive feedback and the results of your interview directly from a Codesmith 
team member. Keep in mind that interview questions, like most exams, are confidential 
and should not be shared anywhere after the interview concludes. Do you have any 
questions now regarding the format of the interview?
*/


/* 
Declare a variable 'words' and assign it to an array containing the words 'apple', 'almond', 'artichoke', and 'avocado'.
*/

const words = ['apple', 'almond', 'artichoke', 'avocado']
console.log(words)
/* 
Declare a function 'startsWithA' that takes in a string as an argument. It should return true if 
the provided string starts with the letter A, and false otherwise.
The function should be case-insensitive.*/
function startsWithA(str) {
  return str[0] === 'A' || str[0] === 'a';
}
console.log(startsWithA('Almond'))


/* 
Declare another function 'allElementsPass', which takes an array and a callback as arguments.
The callback function will be expected to return a boolean. When 'allElementsPass' is called, it 
will run the callback function on each item in the array, and return a boolean depending on 
whether the callback returns true for all items. In other words, if the callback returns true 
when called on ALL array items, 'allElementsPass' should also return true. However, if the 
callback returns false for ANY items, 'allElementsPass' should return false.
*/
function allElementsPass(arr, cb) {
  let output =true;

  for (let i = 0; i < arr.length; i++) {
    if(!cb(arr[i])) {output = false;}
  }
  return output;
}
console.log(allElementsPass(['apple', 'pear'], startsWithA)) //should return false
console.log(allElementsPass(['apple', 'avocado'], startsWithA)) //should return true
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


/* 
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the `new` keyword.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.

Example:
Creating a NumberedList from 'dog' --> { 0: 'dog', length: 1 }
Creating a NumberedList from 'dog', 'bird', 'cat' --> { 0: 'dog', 1: 'bird', 2: 'cat', length: 3 }
*/


/* 
Declare a function, 'reverse', that is accessible to ALL instances of the NumberedList object.

'reverse' does not take in any arguments, and will return a new NumberedList instance, in which all elements of the original NumberedList it was called upon have been reversed.

For example, calling 'reverse' on the following NumberedList: 
  { 0: 'a', 1: 'b', 2: 'c', length: 3 } 
should return a new NumberedList with the properties:
  { 0: 'c', 1: 'b', 2: 'a', length: 3 }

Note: this method should NOT modify the object it was called upon!
*/



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

//Q5 Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the 
//sum of the elements in the array starting at the initial value.

//Q6 Make a function that produces an object with numbers that have ordered values and removes duplicates with a length item



/* 
Declare a variable 'nums' and set it to an array containing all number from 11 to 19.
*/


/* 
Declare a function 'isEven', which takes a number as an argument. The function should return a boolean depending on whether the passed-in number is even.
*/

/* 
Declare a function 'findLastTrueElement'. It should take two arguments: an array, and a callback which returns a boolean.
'findLastTrueElement' should sequentially run the callback on the elements in the passed-in array, and return the index of the LAST element for which the callback evaluates to true.
If the callback is not true for any elements, 'findLastTrueElement' should return undefined. 
*/



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


/*
Declare a recursive function "mapArray" that takes at least two arguments (an array and a callback function).
"mapArray" should return a new array containing the returned values from running the callback function on each element in the array.

Once complete, right some code to test your 'mapArray' function.
*/


/* 
Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0. (You will later be creating methods to add values to the List.)
All List objects should contain their own 'length' property, which keeps track of the number of items they contain. When a List is first created, it should have a length of 0.
*/


/* 
Declare a function, 'add', which is accessible to ALL instances of 'List'. 'add' should take in a single argument, and when invoked on a List instance, should add the argument to the end of that particular List (i.e. at the highest index), increment the List's length property, and return the new length.
*/





















