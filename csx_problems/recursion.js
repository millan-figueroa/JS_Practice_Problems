/*Write a function that returns the factorial of a number.
 To check if you've completed the challenge, uncomment these console.logs!

function factorial(num){

    //base case 
    if(num === 1) return 1;

    return num * factorial(num - 1)
}
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720

*/

/* Get the length of an array using recursion without accessing its length property.
function getLength(array, index = 0){
    
    if(array[index] === undefined){
        return index;
    }


    return getLength(array, index + 1)
}
// const randoNums = [3, 5, 6, 2, 6, 3, 5] //7
console.log(getLength([3, 5, 6, 2, 6, 3, 5]))//7
console.log(getLength([3, 5, 6]))//3
console.log(getLength([3, 5, 6, 2, 6]))//5
*/

/*Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, 
if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.*/

// function pow(base, exponent, result = 1, count = 0){
    
//     result *= base;// result * base = 4, result =4
//     count++; //times = 2
    
//     //base case
//         if(count === exponent){
//             return result;
//         }
//         return pow(base, exponent, result, count) //2, 4, 
// }
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

/*Write a function that takes an array of functions and a number that will be piped through all those functions. The input number 
passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the 
third function, and so on. Use recursion to return the final output of the last function in the array.

function flow(input, funcArray, i = 0, output) {

    let cb = funcArray[i];

    output = cb(input);
    input = output;
    i++;
    //base case
    if (funcArray[i] === undefined){
        return output;
    }
    return flow(input, funcArray, i, output)
}

console.log('hi')

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; } //4, 4
function add7(num) { return num + 7; } //9, 11
function modulo4(num) { return num % 4; } //2, 3
function subtract10(num) { return num - 10; } //-8, -7
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];

console.log(flow(2, arrayOfFunctions)); // -> -7
*/

/* Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, 
and shuffles them together. The function will return a single array containing the elements from both input 
arrays interleaved, like so:

the first element should be the first element of the first input array,

the second element should be the first element of the second input array,

the third element should be the second element of the first input array,

the fourth element should be the second element of the second array,

and so on.

The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

1. Push array[0] to new array, slice first card off each array save to variable, do this inside while loop until there's no more cards
*/
  
// function shuffleCards(topHalf, bottomHalf, shuffled = []) {
    

//     console.log('                                         ')
//     console.log('**topHalf: ' + topHalf)
//     console.log('**bottomHalf: ' + bottomHalf)    
//     console.log('**shuffled: ' + shuffled)
//     console.log('**topHalf.length: ' + topHalf.length)
//     console.log('**bottomHalf.length: ' + bottomHalf.length)

// // base case: keep doing it while there's cards in each array
//     if (!topHalf.length && !bottomHalf.length) return shuffled;
    
//     if (topHalf.length !== 0) shuffled.push(topHalf[0]);
    
//     if (bottomHalf.length !== 0) shuffled.push(bottomHalf[0]);
    
// //  recursive case: keep slicing cards off and pushing to shuffled array
//     return shuffleCards(topHalf = topHalf.slice(1), bottomHalf = bottomHalf.slice(1), shuffled)
//     }  

// //UNCOMMENT TO TEST YOUR WORK
// const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
// const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
// console.log(shuffleCards(topHalf, bottomHalf));
//  -> ['Queen of Diamonds', 'Jack of Hearts', 'Five of Hearts', 'Ten of Spades', 'Ace of Spades', 'Eight of Clubs']


/*Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging 
problem can be solved with and without string manipulation!

cascade(12345) should print

12345
1234
123
12
1
12
123
1234
12345

-convert num to string
-split.string into array
-return multiple indexes

*/

function cascade(number) {
	//start at lowest number
    console.log('recursive case: ' + number);
    // console.log('above base case: ' + number)
    if(number.length === 1) {
        console.log('num: ')
        return 'number: ' + number;
    } else {
        
    return cascade(num = number.toString().slice(1));
    
    }
}

console.log(cascade(12345)); 
