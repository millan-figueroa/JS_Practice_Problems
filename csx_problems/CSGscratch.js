
/* *ੈ✩‧₊˚ WELCOME TO CSBIN WALKTHOUGH STUDY GROUP *ੈ✩‧₊˚ */
//http://csbin.io/interview/csbin-walkthrough

/*Challenge: joinAndMap
Construct a function joinAndMap with three parameters: array1, array2, and a callback 
function. The function should combine the two arrays then invoke the callback function 
on each element, returning the resulting array. This function should not mutate the 
passed-in arrays. 

//construct a function joinAndMap with 3 parameters: arr1, arr2, call
function joinAndMap (arr1, arr2, call) {
  //combine two arr 
  let capArr = [];
  let arr3 = arr1.concat(arr2);
  
  //invoke the call function on each element
  for (let i = 0; i < arr3.length; i++){
    
    capArr.push(call(arr3[i]));
  }
  //return the resulting arr
  return capArr;
}

// Uncomment these to check your work!
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
// console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN'*/

/*
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
*/


function specialReverse (string, letter) {
  //create a an array to hold the string 
  let stringArr = string.split(" ") // change argument to something the seperates words
  
  //loop thought current array of the words 
  for (let i = 0; i < stringArr.length; i++) {
  		//check to see if the first element is the letter
  				//if yes, then reverseString 
    if (stringArr[i][0] === letter) {
      // console.log(strin)
    		//let newString 
      		//loop through stringArr[i] 
      let newStr = ""
      let j = stringArr[i].length - 1; 
      while (j >= 0) {
        newStr += stringArr[i][j]; 
        j--;
      }
      // console.log({newStr})
      stringArr[i] = newStr; 
    }
  }
  //return the joined string 
  return stringArr.join(" ");
}


const specialReverse = (string, letter) => string.split(" ").map(word => word.startsWith(letter) ? [...word].reverse().join("") : word).join(" ");


console.log(specialReverse("word searches are super fun", "s"));
//➞ "word sehcraes are repus fun"

console.log(specialReverse("first man to walk on the moon", "m"));
//➞ "first nam to walk on the noom"

console.log(specialReverse("peter piper picked pickled peppers", "p"));
//➞ "retep repip dekcip delkcip sreppep"

// const word = "javascript🐷";

// console.log(word.split(""))

// console.log([...word])
// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
// const arrOfNums = [1, 2, 3, 4, 5];
// // boolean
// function func1(num) {
//   return num % 2 === 0;
// }
// // boolean
// function func2(num) {
//   return num % 2 !== 0;
// }

// // Uncomment these to check your work!
// console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]
// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

// function majority (array, callback) {
//     let ifTrue = 0;
//     let ifFalse = 0;
//     //iterate through the array and perform callback
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i]) === true) {
//           ifTrue++;
//           } else {
//         ifFalse++;
//       }
//     }
//     return ifTrue > ifFalse;
//   }
  
  
//   // // Uncomment these to check your work!
//   const isOdd = function(num) { return num % 2 === 1; };
//   console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
//   console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
  
  
  
  
  
 