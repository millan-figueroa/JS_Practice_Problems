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