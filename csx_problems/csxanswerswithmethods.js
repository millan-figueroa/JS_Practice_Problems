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