/* Write a function after that takes the number of times the callback needs to be 
called before being executed as the first parameter and the callback as the second 
parameter.

inputs: numberOfTimes, callback
output: result
use counter to compare to numberOfTimes
execute callback according to counter

*/
 


// function after(numTimes, cb){

//     let counter = 0;

//     return function(num){
//         counter++;
//        if (counter === numTimes){
//         return cb(num);
//        } else {
//         return undefined;
//        }
//     };
// }


// function addFour(num){ return num + 4 };
// const afterCalled = after(3, addFour)


// console.log(afterCalled(5)); //undefined
// console.log(afterCalled(5)); //undefined
// console.log(afterCalled(5)); //9

// /* Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values*/

// // Uncomment these to check your work!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }


/*
Challenge: cycleIterator
Create a function cycleIterator that accepts an array, and returns a function. The returned function 
will accept zero arguments. When first invoked, the returned function will return the first element 
of the array. When invoked a second time, the returned function will return the second element of 
the array, and so forth. After returning the last element of the array, the next invocation will 
return the first element of the array again, and continue on with the second after that, and so 
forth.*/

// Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);

/*Challenge: dateStamp
Create a function dateStamp that accepts a function and returns a function. The returned function 
will accept whatever arguments the passed-in function accepts and return an object with a date key 
whose value is today's date (not including the time) represented as a human-readable string (see 
the Date object for conversion methods), and an output key that contains the result from invoking 
the passed-in function. */

// Uncomment these to check your work!
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }


/* Create a function censor that accepts no arguments. censor will return a function that will accept 
either two strings, or one string. When two strings are given, the returned function will hold onto 
the two strings as a pair, for future use. When one string is given, the returned function will 
return the same string, except all instances of a first string (of a saved pair) will be replaced 
with the second string (of a saved pair).*/

// Uncomment these to check your work!
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
// should log: 'The slow, brown fox jumps over the lazy cats.'

// function makeHistory(limit) {
//     // create cache
//     // limit > limit of properties cache can hold  
//     const cache = {};
//     cache.length = 0; // set property length equal to 0 in cache

//     return (str) => {
//         if (cache.length < limit && str !== `undo`) { // cannot accept 'undo' here
//             // set property and str to cache
//             cache[cache.length] = str;
//             // increment length property
//             cache.length++;
//             // return action done
//             return `${cache[cache.length-1]} done`;
//       }
//         if (str === `undo`) {
//                 // if 'undo' passed when cache is empty, return `nothing to undo`
//             if (!cache.length) return `Nothing to undo`	
//           // when 'undo' is passed, delete the last el of cache
//           // save last el of cache before deleting to return later..
//           let undoAction = cache[cache.length - 1];
//             delete cache[cache.length - 1];
//             // decrement length property
//             cache.length -= 1;
//             // return undone action
//             return `${undoAction} undone`;
//       }
//         // what if limit exceeded?
//         if (cache.length >= limit) {
//             // loop thru el of cache and replace the first value with the next and so on..
//             for (let i = 0; i < limit; i++) {
//                 // replace first value with second value in cache
//                 cache[i] = cache[i + 1];
//                 // set the last value in cache with passed-in str
//                 cache[limit - 1] = str;
//                 // return action done
//                 return `${cache[limit - 1]} done`
//           }
//       }
//   }
// }

// // /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

console.log('hello')