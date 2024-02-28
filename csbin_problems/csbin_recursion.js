
/* Countdown (2/13 - 4:50 | 2/27 - 1:43 |)
Create a recursive function countdown that accepts a positive integer n as an input 
and logs every number from n (inclusive) to 0 (exclusive) to the console.
*/

// To check if you've completed it, uncomment these console.logs!
// console.log(countdown(5));
// console.log(countdown(10));



/* Sum (2/12 - 5min 30secs | 2/13 - 8:52 | 2/27 - 5:34)
Create a recursive function sum that calculates the sum of an array of integers.

*/


/* Palindrome (2/12 - 1 hour, 2/13 - 9:33  )
Create a recursive function palindrome that accepts a string as an input and returns true if that 
string is a palindrome (the string is the same forward and backwards). The input string may have 
punctuation and symbols, but that should not affect whether the string is a palindrome.
*/
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false



/* isPrime (2/12 - 1 hour, 2/13 - 41:51)
Create a recursive function isPrime that determines if a number is prime and returns true if 
it is.
console.log(isPrime(12)); 
console.log(isPrime(13)); 
console.log(isPrime(11)); 
console.log(isPrime(14)); 
*/

/* pathFinder
Create a recursive function pathFinder that takes an object and array as inputs and returns the 
value with the given path.

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"
*/

/* flattenRecursively
Create a recursive function flattenRecursively that flattens a nested array. Your function should be 
able to handle varying levels of nesting.

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
*/

/* findInOrderedSet
Create a recursive function findInOrderedSet that determines if a number is in an 
ordered array. Assume the array is sorted. BONUS: Create the function in such a 
way that fully iterating through the array to check isn't necessary.

*/

/* countWaysToReachNthStair
There are n stairs. A person standing at the bottom wants to reach the top. The person can climb 
either 1 or 2 stairs at a time. Create a function countWaysToReachNthStair to count the number of 
ways the person can reach the top (order does matter). See test cases for examples.
function countWaysToReachNthStair(n) {

}

*/


// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))



/* getPermutations
Given a collection of distinct integers, Create a function getPermutations to return all possible permutations.
Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
function getPermutations(arr) {

}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

/* getRangeBetween
Create a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
function getRangeBetween(x, y) {

}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]*/