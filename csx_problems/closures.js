/* Write a function after that takes the number of times the callback needs to be 
called before being executed as the first parameter and the callback as the second 
parameter.

inputs: numberOfTimes, callback
output: result
use counter to compare to numberOfTimes
execute callback according to counter

*/
 


function after(numTimes, cb){

    let counter = 0;

    return function(num){
        counter++;
       if (counter === numTimes){
        return cb(num);
       } else {
        return undefined;
       }
    };
}


function addFour(num){ return num + 4 };
const afterCalled = after(3, addFour)


console.log(afterCalled(5)); //undefined
console.log(afterCalled(5)); //undefined
console.log(afterCalled(5)); //9