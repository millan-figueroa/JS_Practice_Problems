// function cascade(number) {
// 	// Your code here!
//   if(number.length >= 1) return number;
  
  
//   return cascade(number.toString().slice(1))
  
// }
// Uncomment to test your work!
// console.log(cascade(12345))
// should print
/*
111
11
1
11
111
*/
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