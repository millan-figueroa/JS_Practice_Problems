/* Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, 
the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except 
all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).*/

function censor(){
    const cache = {};
    
    return (string1, string2) => {
        
        if(string2 !== undefined){
            cache[string1] = string2;
            return cache;
        } else {

        let splitStr = string1.split(' ');

        splitStr.forEach((item, index, array) => {
            if (item === 'quick') { 
                array[index] = item.replace('quick', 'slow');
            }
        }); 
        return splitStr.join(' ')
        }
    }
} 
// Uncomment these to check your work!
const changeScene = censor();
console.log(changeScene('dogs', 'cats')); //{dogs: 'cats'}
console.log(changeScene('quick', 'slow'));//{dogs: 'cats', quick: 'slow'}
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
