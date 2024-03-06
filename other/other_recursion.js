/* from Chris K study group
Create a function "countChar" that takes two arguments (an input 
string and a target string of length 1). "countChar" will 
return the number of times the target string is found in the 
input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

function countChar(str, target, i = 0, counter = 0){

    if(str[i] === undefined) return counter;

    if(str[i] === target){
        counter + 1;
        return countChar(str,target, i + 1, counter)
    }
}

console.log(countChar('hello world', 'o')); //-> 2
console.log(countChar('javascript', 'j')); //-> 1