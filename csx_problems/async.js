/*The forEach function doesn't return anything, so console.log(forEach(delays, delayLog)) will log undefined.
You're invoking console.log immediately inside setTimeout, which means console.log will execute immediately, not after the specified delay time.
You're not returning anything from the delayLog function.*/


function forEach(arr, cb) {
	let result = 0;
    for(let i = 0; i < arr.length; i++) {
      result = cb(arr[i], i);
  }   
  return result;
}

const delayLog = function(delayTime, i) {
    setTimeout(() => {
        console.log(`printing element ${i}`);
      }, delayTime);
  
}
const delays = [200, 500, 0, 350];
// console.log(forEach(delays, delayLog))

/*The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?*/

let dataReceived;

function ajaxSimulate(id, callback) {
  
  const database = ['Aaron', 'Barbara', 'Chris'];
  
 setTimeout(() => {
     callback(database[id]); // Call the callback function after the timeout
  }, 0);
}

function storeData(data) {
  dataReceived = data;
   console.log(dataReceived);
}

// console.log(ajaxSimulate(1, storeData));

/* Write a function called limitedInterval that accepts as arguments in this order -
callback function, wait time in milliseconds, limit time in milliseconds.
limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.*/

function limitedInterval(callback, wait, limit) {
  let elapsedTime = 0;
  const interval = setInterval(() => {
      callback();
      elapsedTime += wait;
      if (elapsedTime >= limit) {
          clearInterval(interval);
      }
  }, wait);

  setTimeout(() => {
      clearInterval(interval);
  }, limit);
}

/* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.

/*Write a function called runInOrder that accepts as arguments in this order -
1. an array of functions 2. rray of numbers representing times in milliseconds. runInOrder should execute the functions in order*/

function runInOrder(funcArray, numArray) {
  function run(index) {
      if (index < funcArray.length) {
          setTimeout(() => {
              funcArray[index]();
              run(index + 1);
          }, numArray[index]);
      }
  }
  run(0);
}

/* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);
