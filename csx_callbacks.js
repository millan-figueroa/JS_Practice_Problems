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