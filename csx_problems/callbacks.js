//COMMON ELEMENTS outside WHILE LOOP


// function intersection(arrays) {

//     let arr1 = arrays.shift(); //[5, 10, 15, 20]
//     console.log(`First value of arr1: ${arr1}`)
//     let commonElements = [];

//     while (arrays.length) { 
//         console.log('***WHILE LOOP RUN***')
//         let currentArr = arrays.shift(); 
//         console.log(`Value of currentArr: ${currentArr}`)
        
        
//         for (let i in currentArr) {   
//             let currentEl = currentArr[i]; 
//             console.log(`Value of currentEl: ${currentEl}`)
          
//             for (let i in arr1) {
//                 if (arr1[i] === currentEl) {
//                     commonElements.push(currentEl);
//                     console.log(`Value of arr1[i]: ${arr1[i]}`)
//                     console.log(`Value of commonElements: ${commonElements}`)
//                 }
//             }
//         }

//         // arr1 = commonElements;
//     }

//     return commonElements;
// }

// const arr1 = [5, 10, 15, 20];
//   const arr2 = [15, 88, 1, 5, 7];
//   const arr3 = [1, 10, 15, 5, 20];
//   console.log(intersection([arr1, arr2, arr3]));

// // input: array, callback, initial value
// // output: single value
// function reduce(array, callback, initialValue) {

//   let acc;
//   // iterate over array
// 		acc = initialValue;
//   // set acc to be the result of calling the callback with the arg acc and current array elements
//   	array.forEach(function(el) {
//     	acc = callback(acc, el)
//   })
//   // return acc value
// 		return acc;
// }
// // Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8

// /*Create a function countBy that accepts an array and a callback, and returns an object. 
// countBy will iterate through the array and perform the callback on each element. Each return 
// value from the callback will be saved as a key on the object. The value associated with each key 
// will be the number of times that particular return value was returned.

// input: array, callback
// output: object
// object - keys: return value from callback / value: number of times that value was returned / ie:{odd: 3, even: 2}
// strategy: declare empty object. use .map to iterate thru original array, apply the callback 
// to each item, and save corresponding keys:values to object. save evaluated result of applying 
// callback to item in key variable. make sure value defaults to zero
// on each pass. 
// */

// function countBy(array,callback){
//     const resultObj = {};
//     array.map(item => {
//         const key = callback(item); // use key variable to save callback return (even or odd)
//         resultObj[key] = (resultObj[key] || 0) + 1; //assign key as object key, assign as value # of odds or evens
//     }, {});
//     return resultObj;
// }
// // Uncomment these to check your work!
// function evenOdd(n) {
//     if (n % 2 === 0) return 'even';
//     else return 'odd';
//   }
//   const nums = [1, 2, 3, 4, 5];
//   console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }



/*Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return 
an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be 
arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
-Loop thru arr save elements as resultObj keys
-Loops again and apply cb to each element, saving result output as values in resultObj
-Output: catfood: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
*/
function multiMap(arr, funcArr) {
    const resultObj = {};
    
    for (let i = 0; i < arr.length; i++){
        resultObj[arr[i]] = []; //assign object to empty array

        for (let j = 0; j < funcArr.length; j++){
            let cb = funcArr[j];
            resultObj[arr[i]].push(cb(arr[i])); //push output of calling cb on each arr item
        }
    }
    return resultObj;
}
// ADD CODE HERE

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }

const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];

console.log(multiMap(items, functions)); 
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
//glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Create a function subtractTwo that accepts a number and returns that number minus 2.

// Then create a function map that takes two inputs -

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

/*Challenge: reduce
The function reduce takes an array and reduces the elements to a single value.

The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.*/

// Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8

/*Challenge: objOfMatches
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. */

// Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

/*Challenge: arrToObj
Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values. */

// Uncomment these to check your work!
// const arrOfStrings = ['beer', 'glue'];
// const capitalize = str => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

/*Challenge: joinAndMap
Construct a function joinAndMap with three parameters: array1, array2, and a callback function. The function should combine the two arrays then invoke the callback function on each element, returning the resulting array. This function should not mutate the passed-in arrays. */

// Uncomment these to check your work!
// const arrRed = ['strawberry', 'cherry', 'wine'];
// const arrBlue = ['blueberry', 'sky', 'ocean'];
// const capitalize = str => str.toUpperCase();
// console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']

/*Challenge: multiMap
Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. */

// Uncomment these to check your work!
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/*Challenge: majority
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false. */

// Uncomment these to check your work!
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/*Challenge: prioritize
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second. */

// Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/*Challenge: countBy
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned. */

// Uncomment these to check your work!
// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

/* Challenge: groupBy
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.*/

// Uncomment these to check your work!
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/*Challenge: goodKeys
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value */

// Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



