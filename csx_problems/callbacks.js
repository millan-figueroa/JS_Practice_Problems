//COMMON ELEMENTS outside WHILE LOOP


function intersection(arrays) {

    let arr1 = arrays.shift(); //[5, 10, 15, 20]
    console.log(`First value of arr1: ${arr1}`)
    let commonElements = [];

    while (arrays.length) { 
        console.log('***WHILE LOOP RUN***')
        let currentArr = arrays.shift(); 
        console.log(`Value of currentArr: ${currentArr}`)
        
        
        for (let i in currentArr) {   
            let currentEl = currentArr[i]; 
            console.log(`Value of currentEl: ${currentEl}`)
          
            for (let i in arr1) {
                if (arr1[i] === currentEl) {
                    commonElements.push(currentEl);
                    console.log(`Value of arr1[i]: ${arr1[i]}`)
                    console.log(`Value of commonElements: ${commonElements}`)
                }
            }
        }

        // arr1 = commonElements;
    }

    return commonElements;
}

const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3]));

// input: array, callback, initial value
// output: single value
function reduce(array, callback, initialValue) {

  let acc;
  // iterate over array
		acc = initialValue;
  // set acc to be the result of calling the callback with the arg acc and current array elements
  	array.forEach(function(el) {
    	acc = callback(acc, el)
  })
  // return acc value
		return acc;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8

/*Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. Each return 
value from the callback will be saved as a key on the object. The value associated with each key 
will be the number of times that particular return value was returned.

input: array, callback
output: object
object - keys: return value from callback / value: number of times that value was returned / ie:{odd: 3, even: 2}
strategy: declare empty object. use .map to iterate thru original array, apply the callback 
to each item, and save corresponding keys:values to object. save evaluated result of applying 
callback to item in key variable. make sure value defaults to zero
on each pass. 
*/

function countBy(array,callback){
    const resultObj = {};
    array.map(item => {
        const key = callback(item); // use key variable to save callback return (even or odd)
        resultObj[key] = (resultObj[key] || 0) + 1; //assign key as object key, assign as value # of odds or evens
    }, {});
    return resultObj;
}
// Uncomment these to check your work!
function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
  }
  const nums = [1, 2, 3, 4, 5];
  console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }