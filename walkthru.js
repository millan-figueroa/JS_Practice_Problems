
/****************** FUNCTIONS & EXE CONTEXT ****************/

/* BUILD SENTENCE
----------------------------------------------------
Create a functon "buildSentence" that takes three words (strings)and returns the full sentence 
complete with capitalization at the beginning of the sentence and punctuation (add an exclamation 
point to each sentence).



--------------------------------------------------------*/
/* COMBINE NUMBERS
--------------------------------------------------------

Create a function combineNum that takes an array and a value that will act as the length of the 
number. combineNum is going to return a number that is the highest combination of the numbers in the 
passed in array with the length of value. If the array cannot be combined to make the number reach 
the value of length, return "combine not possible".

SOLUTION
console.log(combineNum([4,6,1,8,2],4)) //=> 8642
console.log(combineNum([4,9,1,8,2],6)) // => combine not possible
console.log(combineNum([7,9,1,8,2],3)) //=> 987

--------------------------------------------------------*/



/**************** CLOSURE ****************/
 

/* TRIGGER
--------------------------------------------------------
Declare a function 'trigger' that takes in a number K and a callback as arguments, and return another 
function. The returned function should take in a single argument and when invoked at the K-th time, 
it should run the callback on the passed-in argument and return that value, then reset the timer for 
that specific argument to be ready for the next time. However, the next invocation at the K-th time on 
the same value, it should run the callback with the previous returned value as the argument. And if 
it's not the time to run the callback, return 'Please invoke the function *time* time(s) more with 
*argument* to see the result'.


function trigger(K, callback){
    //initiliaze a counter varible to 0 
    let counter = 0; 
    let results = {}; 
    co
    //return an anon. function(arg){
    return function(arg){
      //increment the counter
      counter ++; 
    //if the counter is equal to K, then return callback(arg)
      if (counter === K) {
        counter = 0; 
        results[arg] = callback(arg);
        return callback(results[arg]);
      }
    else return please invoke function K-counter with arg to see ...
      return `Please invoke the function ${K-counter} time(s) more with ${arg} to see the result` 
    } 
  }
  const multiplyBy2 = (num) => num*2; 
  const myTrigger = trigger(3, multiplyBy2); 
  
  console.log(myTrigger(5)) //=> 'Please invoke the function 2 time(s) more with 5 to see the result'.
  console.log(myTrigger(5)) //=> 'Please invoke the function 1 time(s) more with 5 to see the result'.
  console.log(myTrigger(5)) //=> 10
  
  // myTrigger(3) //=> 'Please invoke the function 2 time(s) more with 3 to see the result'. [[unsure about this one though lol-nick]]
  
  console.log(myTrigger(5)) //=> 'Please invoke the function 2 time(s) more with 5 to see the result'.
  console.log(myTrigger(5)) //=> 'Please invoke the function 1 time(s) more with 5 to see the result'.
  console.log(myTrigger(5)) //=> 20
  
  
  K multiplyBy2(arg)
  2K multiplyBy2(multiplyBy2(arg))
  --------------------------------------------------------*/

  
  /* RECORD
  --------------------------------------------------------

  Declare a function 'record', which takes a callback function as an argument and returns another 
  function. The returned function takes in a number, and when invoked, will run the callback on this 
  number. The function should keep a record of all previous results of running the callback (and if 
  it is invoked more than once with the same argument, it should not run the callback again on 
  that argument). On each invocation, it should return the *highest value so far* among all previous 
  calls. Once complete, make sure to test your function.
   --------------------------------------------------------*/

  //output: highest value of invoking callback on passed in number
  //store results in an object, format arg:result
  //iterate through object and compare result values to output the higher one
  
  function record(callback){

    const obj = {};
    let result = 0;
    
    return function(num){

      /********************************/
      console.log('****NEXT RUN****')
      /*******************************/ 


      if(!obj.hasOwnProperty(num)){ //checks if property (2) exists in obj
        obj[num] = callback(num); // since it doesn't, assign arg as key and cb result as value {2:4}
      }
      
      for(const key in obj){
        
        if(obj[num] > num){ //checks if 4 > 2  {2:4, 4:6}
          result = obj[key]; //if yes, return 4 (higher value)
        }
      }

      //*****Check Values! (Ignore me)*****//

      console.log(`Value of 'obj[num]': ${obj[num]}`)
      console.log(`Value of 'num': ${num}`)
      
      //************************************
      
      return `FINAL OUTPUT: ${result}`;
      
    }
  }

  const addTwo = record(function (num){return num + 2});
  console.log(addTwo(2)) //4
  console.log(addTwo(4)) //6
  console.log(addTwo(1)) //6
  console.log(addTwo(8)) //6
  

 
  




 /***************** RECURSION ****************/
 


  /* ARRAY OF FUNCTIONS
  --------------------------------------------------------
  
  Write a function that takes an array of functions and a number that will be piped through all those 
  functions. The input number passes through the first function, whose output is passed as input to 
  the second function, whose output is passed as input to the third function, and so on. Use recursion 
  to return the final output of the last function in the array.
  

  --------------------------------------------------------------------------*/
  



  /***************** OOP ****************/
   
  
  /* MY ARRAY
  --------------------------------------------------------------------------
  
  PART 1
  Declare a function 'MyArray' which returns an instance of a 'MyArray' object when invoked with the 
  'new' keyword. MyArray should mirror a Javascript array - i.e. store values at numbered indices 
  starting at 0. All MyArray objects should contain their own 'length' property to keep track of the 
  number of elements in the array. When a MyArray is first created, it should initialize the length 
  property to 0.
  
  PART 2
  Recreate the push method. It should be available to all instances of MyArray.
  
  PART 3
  Recreate the includes method. It should be available to all instances of MyArray.
  
  */




  /***************** KEY CONCEPTS ****************
   
 
  EXAMPLES OF VERBAL QUESTIONS YOU MAY NEED TO KNOW: 
  What is the difference between var, let, const?
  
  •
  
  What is recursion?
  
  •
  
  What is closure?
  
  •
  
  What is scope?
  
  •
  
  What is a callback?
  
  •
  
  What is the difference between the &&
  operator and the || operator?
  
  •
  
  What is pass by value vs pass by reference?
  
  •
  
  What is the difference between a parameter and an argument?
  
  •
  
  What is hoisting?
  
  •
  
  What is the difference between map & forEach?
  
  
  LINKS TO DOCUMENTS I MADE THAT GAVE ME AN IDEA ABOUT THE INTERVIEW PROCESS. LITTLE OUTDATED BUT STILL HELPFUL, AS CS PROBABLY STILL HAS JUST ABOUT THE SAME PROCESS
  
  https://docs.google.com/document/d/1fg9pzCJH0cT3LJfGatpAbjwBlhnuyKgFbi-UxLksLUE/edit
  
  https://docs.google.com/document/d/1Tl6Tj2fmzQ8p0aQEsrdW0u1wDPq0RESgR9vwDxg9cnw/edit
  
  https://docs.google.com/document/d/1ufuwWZ7W1RAsrbZaTdzNBYDlZiJV8QQbW1IiMGkWXTQ/edit
  
  */