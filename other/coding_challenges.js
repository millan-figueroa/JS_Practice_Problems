// Declare a function 'deepObject' which takes in an arbitrarily nested object and a 
// number called 'depth' as arguments. Return values of the non-empty object at the 
//'depth' level (if there's more than one valid result, return any of them). If 
//nothing found, return "No non-empty objects at the level *depth*!".
// For example:
function deepObject(obj, depth) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
            deepObject(obj[key], depth - 1);
        } else if (depth === 0) {
            console.log(obj[key]);
        }
    }
  }
  
  
  const obj = {
      a: 'depth 1 - key a',
      b: 'depth 1 - key b',
      c: {},
  
      d: {
          e: 'depth 2 - key e',
          f: 'depth 2 - key f',
  
          g: {
              h: {},
              i: 'depth 3 - key i',
              j: {},
              k: {
                  l: 'depth 4 - key l'
              }
          },
          m: 'depth 2 - key m'
      },
      n: 'depth 1 - key n',
      o: {},
      p: {
          q: 'depth 2 - key q'
      }
  }
  console.log(deepObject(obj, 4)); // { l: 'depth 4 - key l' }
  console.log(deepObject(obj, 2)); // { q: 'depth 2 - key q' } OR { e: 'depth 2 - key e', f: 'depth 2 - key f', g: { h: { }, i: 'depth 3 - key i', j: { }, k: { l: 'depth 4 - key l' } }, m: 'depth 2 - key m' }
  console.log(deepObject(obj, 3)); // { h: { }, i: 'depth 3 - key i', j: { }, k: { l: 'depth 4 - key l' } }
  
  /* 
  *****DO MATH*****
  Declare a function 'doMath', which takes in a number (called 'initialValue') as a single 
  argument and returns another function. The returned function can take in 2 arguments (a string 
    (called 'operator' –it could be any of 4 basic operators: addition, subtraction, multiplication, and division) and a number) or just a single argument. When the returned function is invoked with just an equal sign ('='), return the evaluated result from all previous expressions (starting at the 'initialValue'). Otherwise, return the message "Please enter '=' to see the result!".
  Note: Do not use the 'eval()' method!
  
  const calc = doMath(3);
  console.log(calc('+', 3)); // 'Please enter '=' to see the result!'
  console.log(calc('*', 2)); // 'Please enter '=' to see the result!'
  console.log(calc('*', 2)); // 'Please enter '=' to see the result!'
  console.log(calc('/', 4)); // 'Please enter '=' to see the result!'
  console.log(calc('+', 1)); // 'Please enter '=' to see the result!'
  console.log(calc('=')); // 7 -> (3 + 3 * 2 * 2 / 4 + 1 = 7)
  
  *****FIND PAIRS*****
  Declare a function 'findPair', which takes in an array of distinct numbers and a callback as 
  arguments, and returns another function. The returned function should take in no arguments and 
  when invoked, should find the next pair of numbers with the maximum sum when passing each to the 
  callback and return them as an array of length two. If there's no pair left, all subsequent calls 
  should return "No valid pairs left!".
  
  *****CHECK STRINGS IN ALPHABETICAL ORDER*****
  Declare a function 'checkAlphabeticalOrder' which takes in no arguments and returns another 
  function. The returned function should take in a single argument (it can be a string or -1) 
  and when invoked with -1, it should check if all passed-in strings are in alphabetical order. 
  If so, return "Great! The strings you entered are in alphabetical order", otherwise, return an 
  array of strings containing segments in alphabetical order.
  
  ***TRIGGER ME AT THE Kth TIME***
  Declare a function 'trigger' that takes in a number K and a callback as arguments, and return 
  another function. The returned function should take in a single argument and when invoked at 
  the K-th time, it should run the callback on the passed-in argument and return that value, then 
  reset the timer for that specific argument to be ready for the next time. However, the next 
  invocation at the K-th time on the same value, it should run the callback with the previous 
  returned value as the argument. And if it's not the time to run the callback, return 'Please 
  invoke the function *time* time(s) more with *argument* to see the result'.
  
  ***CREATE A NEW STRING***
  Declare a function 'createNewString', which takes in a string and a callback as arguments, and 
  returns another function. The returned function should take in no arguments. Depending on the 
  number of times the returned function is invoked, it should run the callback on the corresponding 
  character in the string if this is the first time the character has been appeared so far and 
  return the value evaluated by the callback, otherwise, return the character itself. If all the 
  characters have been iterated, return a new string constructed by all the values returned at each 
  function invocation.
  
  ***TIME KEEPER***
  Declare a function 'timeKeeper' that takes in a callback (just print something out, NOT return any
  values) and a positive integer K as arguments, and return another function.
  The returned function can take in one or no arguments. When the returned function was invoked at 
  the K-th time, it should run the callback and set the next time to run the callback again to the 
  passed-in argument, if any, otherwise, return "Please provide the time for the next call!" and 
  set the next time to run the callback to the previous time. Otherwise, if the number of function 
  calls is less than K, return "Please invoke the function *times* time(s) more to see the message!".
  
  ***GET MINUTES***
  Declare a function 'getMin' that accepts a callback as an argument. The 'getMin' returns a 
  function which takes in an array of numbers as an argument. When the return function was called, 
  it should return the value from the original array with the index is the index of minimum value 
  after applying the callback to each element in the original array.
  