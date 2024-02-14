/*
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