

/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function 
composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65 // 4 => 8, 64, 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 
Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer 

var compose = function(funcs) {
    
    return function(x) {
     
      for(let i = funcs.length - 1; i >= 0; i--) { 
        let currentFunc = funcs[i]; 
        x = currentFunc(x);
      }
      return x; 
    };
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(50)) 



Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the 
same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

//when called with same input fn will return cached val
//create cache obj in outer fn scope
//save output of each call in object
//if output is present in object, return cached val and callCount++
//if output is not present add it

function memoize(fn) {
  const called = {};
  let output = 0;

  return function(...args) {
    called[args] = args;
    console.log('value of called[args]: ' + called[args])
      for(const prop in called) {
          if(called[args] === args){
              return fn(...args);
              } else {
                called[args] === args;
              }
      
    }   
  }   
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log('value of callCount: ' + callCount) // 1 

function NumberArray(arr) {
  // Remove duplicates and sort the array
  const uniqueSortedArray = arr.filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b);
  
  // Add a length property
  uniqueSortedArray.length = uniqueSortedArray.length;

  return uniqueSortedArray;
}

// Prototype to add properties
NumberArray.prototype.addProperty = function(name, value) {
  this[name] = value;
};

// Prototype to remove properties
NumberArray.prototype.removeProperty = function(name) {
  if (this.hasOwnProperty(name)) {
    delete this[name];
  }
};

// Example usage:
const numbers = new NumberArray([5, 3, 1, 2, 3, 4, 4, 6]);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, length: 6]

numbers.addProperty('sum', numbers.reduce((acc, curr) => acc + curr, 0));
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, length: 6, sum: 21]

numbers.removeProperty('sum');
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, length: 6]