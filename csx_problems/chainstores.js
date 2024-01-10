// Declare a function 'deepObject' which takes in an arbitrarily nested object and a 
// number called 'depth' as arguments. Return values of the non-empty object at the 
//'depth' level (if there's more than one valid result, return any of them). If 
//nothing found, return "No non-empty objects at the level *depth*!".
// For example:
function deepObject(obj, depth) {
  for (const key in obj) {
      if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
          deepObject(obj[key], depth - 1);
      } else if (depth === 0) {
          console.log(obj[key]);
      }
  }
}


const obj = {
    a: 'depth 1 - key a',
    b: 'depth 1 - key b',
    c: {},

    d: {
        e: 'depth 2 - key e',
        f: 'depth 2 - key f',

        g: {
            h: {},
            i: 'depth 3 - key i',
            j: {},
            k: {
                l: 'depth 4 - key l'
            }
        },
        m: 'depth 2 - key m'
    },
    n: 'depth 1 - key n',
    o: {},
    p: {
        q: 'depth 2 - key q'
    }
}
console.log(deepObject(obj, 4)); // { l: 'depth 4 - key l' }
console.log(deepObject(obj, 2)); // { q: 'depth 2 - key q' } OR { e: 'depth 2 - key e', f: 'depth 2 - key f', g: { h: { }, i: 'depth 3 - key i', j: { }, k: { l: 'depth 4 - key l' } }, m: 'depth 2 - key m' }
console.log(deepObject(obj, 3)); // { h: { }, i: 'depth 3 - key i', j: { }, k: { l: 'depth 4 - key l' } }