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

