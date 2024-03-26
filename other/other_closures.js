/* //from LeetCode
var createCounter = function(n) {
    
    return function() {
        
        console.log(n++);
    };
};

 
 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12


var expect = function(val) {
    return {
        toBe : function(compareVal){
            if(val === compareVal){
                return true;
            } 
            throw new Error ('Not Equal')
        },
        notToBe : function(compareVal){
            if(val !== compareVal){
                return true;
            }
            throw new Error ('Equal')
        }
    }
};

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.*/

var filter = function(arr, fn) {
    let newArr = [];
    
};

/*From Chris K: 
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/
const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }

/* Declare a function called 'fundraiser', which will help keep track of donations towards a cause.
When invoked, 'fundraiser' should return another function that's specific to a single cause's fundraising. The returned function should take one argument, representing a donation to that cause, and should keep track of the total donations received.
The fundraising goal is reached once the total donations exceed a specified amount. On reaching the goal, return a message stating how much was raised. Any subsequent donation attempts after the goal has been reached should return a message stating that the fundraising goal has already been achieved.

Example:
const schoolFund = fundraiser(500); // Goal is 500
schoolFund(100);
schoolFund(150);
schoolFund(200);
schoolFund(60); // --> 'Goal reached with 510!'
schoolFund(20); // --> 'Goal already achieved!'*/

/* Declare a function 'record', which takes a callback function as an argument and returns another function. The returned function 
takes in a number, and when invoked, will run the callback on this number. The function should keep a record of all previous results 
of running the callback (if it is invoked more than once with the same argument, it should retrieve the correct result from the 
record rather than running the callback again). On each invocation, it should return the *highest value so far* among all previous 
calls. Once complete, make sure to test your function.*/