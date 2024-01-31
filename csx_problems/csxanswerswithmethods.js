function intersection(arrays) {
    //save result to variable to return outside reduce scope
    //call reduce on arrays, set parameters to accumulator (initial value + current array) and initial value as arrays[0] (first array)
    const result = arrays.reduce((accumulator, current) => {
      //return evaluated result of filtering each element of accumulator to see if it includes each element of current array
      return accumulator.filter((el) => current.includes(el)) //filter returns new array with filtered results, which is saved in result 
    },arrays[0]);
    
    return result;
  }
  
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


  
  // function majority(array,callback) {
  //   //using reduce keeps track of the count, adding the empty object as initial value so it returns resultObj
  //     const counter = array.reduce((resultObj, current) => {
  //       //result is the result of the callback being invoked on each current element
  //       const result = callback(current);
  //       //checking if current result exists in resultObj, uses its current value; otherwise, it defaults to 0.
  //       resultObj[result] = (resultObj[result] || 0) + 1; //increments value by 1
  //        return resultObj;//returns resultObj out to main function scope
  //     },{});
  //     //returns value that is present more times
  //     return counter[true] > counter[false];
  //   }
    
  //   // Uncomment these to check your work!
  //   const isOdd = function(num) { return num % 2 === 1; };
  //   console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  //   console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

  //   function filterArray(array, callback) {
  //     const newArray = [];
  //     for (let i = 0; i < array.length; i += 1) {
  //       if (callback(array[i])) newArray.push(array[i]); //if callback returns truthy value, push into newArray
  //     }
  //     return newArray;
  //   }

  //   function union(arrays){
  //     //return the result of calling reduce on arrays, taking in accumulator, current array, and initial value as empty array
  //     return arrays.reduce((accumulator,current) => {
  //       current.forEach((el) => { //use forEach to iterate through each element of current array
  //         //check if element is NOT present in accumulator
  //         if (!accumulator.includes(el)) {
  //           accumulator.push(el); //push element into accumulator
  //         }
  //       });
  //       return accumulator;
  //     },[])
  //   }
    
  //   // Uncomment these to check your work!
  //   const arr1 = [5, 10, 15];
  //   const arr2 = [15, 88, 1, 5, 7];
  //   const arr3 = [100, 15, 10, 1, 5];
  //   console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

  //   function objOfMatches(arr1,arr2,callback) {
  //     // Create an object to store the results
  //       const resultObj = {};
  //     // Compare evaluated result of calling callback on arr1 element to corresponding arr2 element
  //       arr1.forEach((el, index) => {
  //         if (callback(el) === arr2[index]) { //If elements are equal assign the arr1 el
  //            resultObj[arr1[index]] = callback(el); //and evaluated result as keyval pair
  //         }
  //       });
  //       return resultObj;
  //     }
      
  //     // Uncomment these to check your work!
  //     const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
  //     const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
  //     function uppercaser(str) { return str.toUpperCase(); }
  //     console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
      

  //     function arrToObj(array, callback) {
  //       const newObj = {}; //declare empty obj
  //       array.forEach((el, index) => { //iterate thru array, passing in el and index
  //         newObj[el] = el; //keys: elements from passed in array
  //         newObj[array[index]] = callback(el); //values: output from callback on each el
  //       });
  //       return newObj;
  //     }
  //     // Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.
  //     // Uncomment these to check your work!
  //     const arrOfStrings = ['beer', 'glue'];
  //     const capitalize = str => str.toUpperCase();
  //     console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

  //     function joinAndMap(arr1, arr2, cb){
  //       const combinedArray = arr1.concat(arr2);
  //       const result = combinedArray.map((element) => cb(element)); 
  //       return result;
  //     }
      
  //     const arrRed = ['strawberry', 'cherry', 'wine'];
  //     const arrBlue = ['blueberry', 'sky', 'ocean'];
  //     const capitalize = str => str.toUpperCase();
  //     console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']


  //     function multiMap(arr, funcArr) {
  //       const resultObj = {};
        
  //       for (let i = 0; i < arr.length; i++){
  //           resultObj[arr[i]] = []; //assign object to empty array
    
  //           for (let j = 0; j < funcArr.length; j++){
  //               let cb = funcArr[j];
  //               resultObj[arr[i]].push(cb(arr[i]));
  //           }
  //       }
  //       return resultObj;
  //   }
    
  //   // Uncomment these to check your work!
  //   function uppercaser(str) { return str.toUpperCase(); }
  //   function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
  //   function repeater(str) { return str + str; }
  //   const items = ['catfood', 'glue', 'beer'];
  //   const functions = [uppercaser, capitalize, repeater];
  //   console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


  //   function majority(array,callback) {
  //     //using reduce keeps track of the count, adding the empty object as initial value so it returns resultObj
  //       const counter = array.reduce((resultObj, current) => {
  //         //result is the result of the callback being invoked on each current element
  //         const result = callback(current);
  //         //checking if current result exists in resultObj, uses its current value; otherwise, it defaults to 0.
  //         resultObj[result] = (resultObj[result] || 0) + 1; //increments value by 1
  //          return resultObj;//returns resultObj out to main function scope
  //       },{});
  //       //returns value that is present more times
  //       return counter[true] > counter[false];
  //     }
      
  //     /*Challenge: majority
  //     Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.*/
  //     // Uncomment these to check your work!
  //     const isOdd = function(num) { return num % 2 === 1; };
  //     console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  //     console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
      
          
        
  //     // function majority(array,callback){
  //     //     let t = 0;
  //     //     let f = 0;
  //     //     let newArr = array.map(item => callback(item));
  //     //     newArr.forEach(el => {
  //     //       if (el === true) {
  //     //         t++
  //     //       } else if (el === false) {
  //     //         f++
  //     //       }
  //     //     });
  //     //     let result;
  //     //     if (t > f) {result = true}
  //     //     else if (t >= f) {result = false}
  //     //     return result;
  //     // } 
  //     //   const isOdd = function(num) { return num % 2 === 1; };
  //     // console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  //     // console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

  //     function prioritize(arr, callback) {
  //       const trueArr = arr.filter(item => callback(item));//filter items that produce a truthy
  //       const falseArr = arr.filter(item => !callback(item));//filter items that produce a falsy
  //     return [...trueArr ...falseArr];
  //     }
      
  //     function startsWithS(str) { return str[0].toLowerCase() === 's'; }
  //     const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
  //     console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

  //     function countBy(array,callback){
  //       const resultObj = {};
  //       array.map(item => {
  //           const key = callback(item); // use key variable to save callback return (even or odd)
  //           //updater: assigns key as object key, assign as value # of odds or evens
  //           resultObj[key] = (resultObj[key] || 0) + 1; //check to see if prop exists (OR || if it doesnt, assign to 0),then increments by 1.
  //       }, {}); 
  //       return resultObj;
  //   }
  //   // Uncomment these to check your work!
  //   function evenOdd(n) {
  //       if (n % 2 === 0) return 'even';
  //       else return 'odd';
  //     }
  //     const nums = [1, 2, 3, 4, 5];
  //     console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

  //     function groupBy(array, callback){
    
  //       const resultObj = {};
            
  //       array.forEach((element) => {
  //         const key = callback(element); //[2]
  //           if (!resultObj[key]) {//check if resultObj[key](2) is present in the object
  //           resultObj[key] = [element]; //if it doesn't exist, create a new array with the current element
  //           } else {
  //           resultObj[key].push(element);//next run, if its there, append the element 2: [2.1, 2.4]
  //          }
  //       });
  //       return resultObj;
  //     }
  //     // Uncomment these to check your work!
  //     const decimals = [1.3, 2.1, 2.4];
  //     const floored = function(num) { return Math.floor(num); };
  //     console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

  //     function goodKeys(object, callback){
  //       let result = [];
  //         for (let key in object) {
  //           if (callback(object[key])) {
  //             result.push(key);
  //           }
  //         }
  //         return result;
  //       }
        
  //       // Uncomment these to check your work!
  //       const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  //       function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  //       console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

        



