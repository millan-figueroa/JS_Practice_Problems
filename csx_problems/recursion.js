

// function multiply(num) {
//     // Base case: If n is 1 or 0, return 1
//     if (num <= 1) {
//       return 1;
//     }
  
//     // Recursive case: Multiply n with the result of the function for (n-1)
//     return num * multiply(num - 1);
//   }
  
//   // Example usage:
// //   const result = multiply(3);
//   console.log(multiply(5)); // Output: 120

// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging 
// problem can be solved with and without string manipulation!

// cascade(12345) should print

// 12345
// 1234
// 123
// 12
// 1
// 12
// 123
// 1234
// 12345

function cascade(num, i = num.toString().length) {
  if (!Number.isInteger(num) || num <= 0) return;

  const strNum = num.toString();

  if (i === 0) {
      // Reverse cascade
      i++;
      while (i <= strNum.length) {
          let subNum = strNum.substring(0, i);
          let toNum = Number(subNum);
          console.log(toNum);
          i++;
      }
  } else {

      let subNum = strNum.substring(0, i);
      let toNum = Number(subNum);
      
      console.log(toNum);
      return cascade(num, i - 1);
  }
}

cascade(12345);
