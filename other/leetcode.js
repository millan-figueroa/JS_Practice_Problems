/*var createCounter = function(n) {
    
    return function() {
        
        console.log(n++);
    };
};

 
 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12*/

 /**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function(compareVal){
            if(val === compareVal){
                return true;
            } 
            throw new Error ('Not Equal')
        },
        notToBe : function(compareVal){
            if(val !== compareVal){
                return true;
            }
            throw new Error ('Equal')
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */