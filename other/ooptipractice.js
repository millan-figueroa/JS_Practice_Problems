/* Declare a function 'OrderedList', which takes in no arguments and returns an instance of an 
'OrderedList' object when invoked with the 'new' keyword. OrderedList objects should function 
similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. However, 
all elements are in sorted order. All OrderedList objects should contain their own 'length' property, 
which keeps track of the number of items they contain. An OrderedList should also keep track of whether 
it is sorted in reverse order with a isReversed property. When an OrderedList is first created, it should 
have a length of 0 and an isReversed value of false.*/

/* - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'OrderedList'. 
'add' should take in a number as a single argument, and when invoked on an OrderedList instance, 
should add the number to that OrderedList in descending order if the list is not reversed, or 
ascending order if the list is reversed. Update the OrderedList's length property appropriately, 
and return the length of the OrderedList.*/

/* - Task 2: Declare a function, 'reverse', which is accessible to ALL instances of 
'OrderedList'. 'reverse' should take in no arguments, and when invoked on an OrderedList 
instance, should reverse the order of all elements in that OrderedList (except the 
'length' property), and change the value of isReversed.*/


/*
Declare a function, 'UniqueQueue', which takes in an array as an argument and returns an instance of a 'UniqueQueue' 
object when invoked with the 'new' keyword.'UniqueQueue' objects should function similarly to a queue, but they will 
only store UNIQUE values (no duplicates). Each value should be stored with an index representing its order in the 
queue. All UniqueQueue objects should contain their own 'length' property, which keeps track of the number of items 
they contain. When a UniqueQueue is first created, each array element should be enqueued, and the 'length' property 
updated accordingly. Duplicates in the initial array should be ignored.

Example:
Creating a UniqueQueue from [1, 2, 3] --> { 0: 1, 1: 2, 2: 3, length: 3 }
Creating a UniqueQueue from [1, 1, 2] --> { 0: 1, 1: 2, length: 2 }
*/

//input: arr
//output: objects that only store unique values ascending index / length prop
//use create a new Set to remove duplicates, use spread operator to turn set into array and assign new array to variable
//use loop to assign array elements to corresponding index 
//update length property

function UniqueQueue(arr) {
  this.length = 0;
  let uniqueArr = [...new Set(arr)];
  for (let i = 0; i < uniqueArr.length; i++) {
    this[i] = uniqueArr[i];
    this.length++;
  }
}
const queueObject = new UniqueQueue([0, 1, 2, 2, 3, 4]) 

/*
Declare a function, 'enqueue', which is accessible to ALL instances of 'UniqueQueue'. 'enqueue' should take 
in a single argument, and when invoked on a UniqueQueue instance, should add the argument to the end of the 
queue if it's not already present, increment the UniqueQueue's length property appropriately, and return the 
length of the queue.
*/
//input: arg
//traverse object, check if arg exists, and if not add it to the end
//increment length
//return length

UniqueQueue.prototype.enqueue = function(arg) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === arg) {
            console.log(`${arg} already in the queue.`);
            return;
        }
    }
    this[this.length] = arg;
    this.length++;
    console.log(`${arg} added. New length: ${this.length}`);
}

queueObject.enqueue(5); //length: 6
queueObject.enqueue(3); //length: 6
queueObject.enqueue(8); //length: 8
queueObject.enqueue(8); //length: 9
queueObject.enqueue(9); //length: 10

console.log(queueObject); //{ 0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5} 

/* 
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the `new` keyword.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.

Example:
Creating a NumberedList from 'dog' --> { 0: 'dog', length: 1 }
Creating a NumberedList from 'dog', 'bird', 'cat' --> { 0: 'dog', 1: 'bird', 2: 'cat', length: 3 }
*/

// input : 1 arg output: new instance of NumberedList 


// declared a NumberedList FN
const NumberedList = function (...args) {
  // add length property to this
  this.length = 0; 
// use length property to add any number passed in args
  	// iterate over args
  for (let i = 0; i < args.length; i++) {
  		// for each element 
    this[i] = args[i]; 
    // increment length
    this.length += 1; 
  }
}; 

const list = new NumberedList("dog", "cat", "horse", "duck"); 

console.log(list); // { 0: 'dog', 1: 'bird', 2: 'cat', length: 3 }

/* 
Declare a function, 'reverse', that is accessible to ALL instances of the NumberedList object.

'reverse' does not take in any arguments, and will return a new NumberedList instance, in which all elements of the original NumberedList it was called upon have been reversed.

For example, calling 'reverse' on the following NumberedList: 
  { 0: 'a', 1: 'b', 2: 'c', length: 3 } 
should return a new NumberedList with the properties:
  { 0: 'c', 1: 'b', 2: 'a', length: 3 }

Note: this method should NOT modify the object it was called upon!
*/