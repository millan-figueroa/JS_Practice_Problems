

function multiply(num) {
    // Base case: If n is 1 or 0, return 1
    if (num <= 1) {
      return 1;
    }
  
    // Recursive case: Multiply n with the result of the function for (n-1)
    return num * multiply(num - 1);
  }
  
  // Example usage:
//   const result = multiply(3);
  console.log(multiply(5)); // Output: 120