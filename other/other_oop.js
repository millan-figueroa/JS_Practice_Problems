/* ******* World **** (from HackerHero)

For this challenge, your tasks are to finish designing three classes: World, City, and Citizen.

For this task, finish the code below so that:

the program successfully creates a 'world' object
the program successfully adds 100 cities into the world object using add_city method.
your program should create these cities with random city name that's 5 characters long and composed of alphabets (use lowercase).
when a new city is created, it automatically adds 50 citizens to the city, with each citizen having a random age between 0 to 100.

World class needs to have a method called add_city - where you can pass the city name and it adds to its list an attribute called cities - where this would be an array containing all the city object constructor(num) - that creates num number of cities. for example new World(50) should create 50 new cities and store this.
a method called random_city - where it pulls out a random city object
a method called total_cities() - that returns the total number of cities in this world



******
City needs to have constructor(name) - that creates a new city with the given 'name' or if 'name' is blank, it can automatically create a random city name that's 5 characters long and composed of lowercase alphabets. 
a method called add_citizen - where you can create a new citizen
an attribute called citizens - where this would be an array containing all the citizen objects



********
Citizen needs to have a constructor when a new citizen is created, it needs to automatically assign a random age (between 0 to 100)
Make sure your code meet all the requirements above and not only rely on the test case to make sure your code is complete.As in real life, test cases do not capture all cases and on this particular challenge, we'll intentionally not add all test cases, so that you're still reviewing your code and checking all scenarios.

*/
//************************************************************************
// 
//Citizen constructor assigns random age
//add_citizens method adds citizen objects to city

/*
class Citizen { //this is where citizens are given age
  constructor(name){
    if(name){
      this.name = name;
    } else {
      this.name = this.generate_citizen_name();
    }
    this.age = Math.floor(Math.random() * 100);
    this.gender = this.generate_citizen_gender();
  }
  
	generate_citizen_name() {
    const consonantslc = 'bcdfghjklmnpqrstvwxyz';
    const consonantsup = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vowelslc = 'aeiou';
    const vowelsup = 'AEIOU';
  
    let firstChar = consonantsup[Math.floor(Math.random() * consonantsup.length)];
    let secondChar = vowelslc[Math.floor(Math.random() * vowelslc.length)];
    let thirdChar = consonantslc[Math.floor(Math.random() * consonantslc.length)];
    let fourthChar = vowelslc[Math.floor(Math.random() * vowelslc.length)];
    let fifthChar = consonantslc[Math.floor(Math.random() * consonantslc.length)];
    
    let result = firstChar + secondChar + thirdChar + fourthChar + fifthChar;
    return result;
	}
  
  generate_citizen_gender() {
    const genders = ['male', 'female', 'fish', 'cat', 'trans male', 'bird', 'canine', 'trans female', 'non-binary'];
  
    return genders[Math.floor(Math.random() * genders.length)];
	}
}

class City { //this is where citizens are stored
  constructor(cityName) {
    if(cityName) {
     this.name = cityName;
    } else {
      this.name = this.generate_city_name();
    }
    this.citizens = [];
    this.add_initial_citizens();
  }
  
generate_city_name() {
    const consonantslc = 'bcdfghjklmnpqrstvwxyz';
    const consonantsup = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vowelslc = 'aeiou';
    const vowelsup = 'AEIOU';
  
    let firstChar = consonantsup[Math.floor(Math.random() * consonantsup.length)];
    let secondChar = vowelslc[Math.floor(Math.random() * vowelslc.length)];
    let thirdChar = consonantslc[Math.floor(Math.random() * consonantslc.length)];
    let fourthChar = vowelslc[Math.floor(Math.random() * vowelslc.length)];
    let fifthChar = consonantslc[Math.floor(Math.random() * consonantslc.length)];
    
    let result = firstChar + secondChar + thirdChar + fourthChar + fifthChar;
    return result;
}

  add_citizen(name){
    this.citizens.push(new Citizen(name))
  }
  
  add_initial_citizens() { //creates and pushes new citizen objects to the citizen storage
    for (let i = 0; i < 10; i++) {
    this.citizens.push(new Citizen());
  	}
  }
}

class World {
  constructor(numOfCities){
    
    this.cities = [];
    this.add_city(numOfCities);
  }
  
  add_city(numOfCities) {
    for(let i = 0; i < numOfCities; i++){
    	this.cities.push(new City());
    }
  }
  
  random_city() {
    return this.cities[Math.floor(Math.random() * this.cities.length)]
  }
  
  total_cities() {
    return this.cities.length;
  }
}


const world = new World(7);
const newcity = new City('LA')

// newcity.add_citizen('Riri')
// console.log(newcity);
console.log('Total cities: ' + world.total_cities())
console.log(world)
//console.log(world.cities.hzcay)
 //create a world with 100 cities
		// let world = new World(100);
		// let city1 = new City('Boston');

// world1.add_city('New York');
// world1.add_city('LA');
// world1.add_city('Boston');

// console.log(world1.random_city());
// console.log(world1.total_cities());
// city1.add_citizen('Millan')

// console.log(city1)
// console.log(citizen1)
*/

/* Declare a function 'Queue', which takes in no arguments and returns an instance of a 'Queue' 
object when invoked with the 'new' keyword. 'Queue' objects should function similarly to an 
Array - i.e., they will store values at numbered indexes, starting at 0. All Queue objects 
should contain their own 'length' property, which keeps track of the number of 
items they contain. When a Queue is first created, it should have a length of 0. Declare a function, 'push', which is accessible to ALL instances of 'Queue'. 'push' should take in a single argument, and when 
invoked on a Queue instance, should add the argument to the end of that particular Queue (i.e. at the highest index), 
increment the Queue's length property, and return the new length. */


/* Declare a function, 'push', which is accessible to ALL instances of 'Queue'. 'push' should take in a single argument, and when 
invoked on a Queue instance, should add the argument to the end of that particular Queue (i.e. at the highest index), 
increment the Queue's length property, and return the new length.*/

/*
Declare a function, 'Collection', which takes in an array as an argument and returns an instance of 
a 'Collection' object when invoked with the 'new' keyword. 'Collection' objects should function 
similarly to a Set - i.e., they will only store UNIQUE values (no duplicates). A Collections's keys 
will match its values. All Collection objects should contain their own 'size' property, which keeps 
track of the number of items they contain. When a Collection is first created, each array element 
should be added, and the 'size' property updated accordingly. (You don't need to worry about the order o
of properties in a Collection.)

Example:
Creating a Collection from ['dog', 'bird', 'cat'] --> { size: 3, dog: 'dog', bird: 'bird', cat: 'cat' }
Creating a Collection from ['dog', 'dog', 'dog'] --> { size: 1, dog: 'dog' }
*/

/*
Declare a function, 'add', which is accessible to ALL instances of 'Collection'. 'add' should take in a single argument, and when invoked on a Collection instance, should add the argument to that Collection (still ensuring there are no duplicate values in the Collection), increment the Collection's size property appropriately, and return the size of the collection.
*/

/*
Declare a function, 'clear', which is accessible to ALL instances of 'Collection'. When 'clear' is invoked on a Collection instance, it should remove all properties from the Collection, reset its size, and return the string 'collection cleared'. 
*/

/*OOJS 1
In this task we provide you with the start of a definition for a Shape class. It has three properties: name, sides, and sideLength. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

We'd like you to:

Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK. 
*/
  
/*OOJS 2
Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK.
*/


/*
Declare a function 'Lottery', which takes in a positive number (called 'initialJackpot') as a single argument and returns an instance of 'Lottery' when invoked with the 'new' keyword. Lottery should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. All Lottery objects should contain their own 'ticketSold' and 'currentPrizes' properties. 'ticketSold' property keeps track of the number of tickets sold and 'currentPrizes' is an array of six numbers representing six levels of prizes (starting at the lowest prize (level 6) and increasing up to the grand prize (level 1)). Each level prize is calculated by dividing the 'initialJackpot' by the corresponding level and rounding the result down. When a Lottery is first created, it should initialize the 'ticketSold' property to 0 and initialize the 'currentPrizes' property with the passed-in initialJackpot following the rule above.*/

// constructor function that creates object instances that store values at numbered indexes (like an array)
// input: initialJackpot (a positive number)
// { ticketSold : 0 (num of tix sold) , currentPrizes : [ 6 numbers] (the numbers should be the ascending prize amounts, divide initialJackpot by levels)}
// for calculating prize amounts, assign the operation to the key prize amounts, use math.floor to round down each prize and push to array

function Lottery(initialJackpot) {
  
  this.ticketSold = 0;
  this.currentPrizes = [];
  
  for(let i = 6; i >= 1; i--){
    
    this.currentPrizes.push(Math.floor(initialJackpot/ i));
    
  }
}

const lottery1 = new Lottery(2000);//[33, 40, 50, 66, 100, 200]

/*
- Task 1: Declare a function 'tryLuck', which is accessible to ALL instances of 'Lottery'. 'tryLuck' should take in 
an array of five numbers (called 'whiteBalls') and another number (called 'powerBall') as arguments, and when invoked 
on a Lottery instance, should validate all numbers in the whiteBalls array (only numbers from 1 to 69 are allowed) 
and the powerBall number (only number from 1 to 26 are allowed). 

If any invalid numbers occur, return an error message. 

Otherwise, add them to the instance as an object with two 
properties ('whiteBalls' and 'powerBall') with all numbers represented under 2-digit strings, update the number of 
tickets sold properly and return it.*/

//whiteBalls & powerBall = [5 nums]
Lottery.prototype.tryLuck = function (whiteBalls, powerBall) {
  this.validatedNums = {
    whiteBalls: [],
    powerBall: ''
  };

  whiteBalls.forEach((element) => {
    if(element >= 1 && element <= 69) {
      this.validatedNums.whiteBalls.push(element.toString().padStart(2, '0'));
      this.ticketSold++;
    } else {
      throw new Error('Numbers must be between 1 - 69.');
    }
  });

  powerBall.forEach((element) => {
    if(element >= 1 && element <= 26) {
      this.validatedNums.powerBall = element.toString().padStart(2, '0');
      this.ticketSold++;
    } else {
      throw new Error('Numbers must be between 1 - 26.');
    }
  });
  return this.validatedNums;
}
// console.log(lottery1.tryLuck([3, 25, 7, 12, 52], [2, 22, 7, 4, 5] )) //
// console.log(lottery1)
/*
- Task 2: Declare a function 'quickPlay', which is accessible to ALL instances of 'Lottery'. 'quickPlay' should 
take in no arguments, and when invoked on a Lottery instance, should function similarly to the 'tryLuck' method 
by randomly generating an array of five numbers as a 'whiteBalls' array and another number as a 'powerBall'. Add 
the 'whiteBalls' array and 'powerBall' number to the instance under an object with corresponding keys, update the 
number of tickets sold properly and return it.*/

/*
- Task 3: Declare a function 'luckyDraw', which is accessible to ALL instances of 'Lottery'. 'luckyDraw' should 
take in no arguments, and when invoked on a Lottery instance should randomly generate a 'whiteBalls' array and a 
'powerBall' number, and return an array of strings (2-digit version of each number) with the length of six, in 
which the first five numbers are from the 'whiteBalls' array and the last one is the 'powerBall' number.*/

/*
- Task 4: Declare a function 'match', which is accessible to ALL instances of 'Lottery'. 'match' should take in no 
arguments, and when invoked on a Lottery instance, should check if anyone wins this draw by the following rules:
• powerball + 5 whiteballs                   => Grand Prize
• 5 whiteballs                               => 2nd Prize
• powerball + 4 whiteballs                   => 3rd Prize
• powerball + 3 whiteballs OR 4 whiteballs   => 4th Prize
• powerball + 2 whiteballs OR 3 whiteballs   => 5th Prize
• powerball OR powerball + 1 whiteball       => 6th Prize
Print out the congratulations corresponding to each prize if there is a winner. If no winners are found for the 
Grand Prize, the Grand Prize will be increased by 6 times and other prizes will be incremented by the lowest prize 
in the whiteBall array. If there's a winner of any prize, return "Big congratulations to lucky winners!", otherwise, 
return "No winners found! The grand prize is now $*grandPrize*. Best of luck next time, future millionaires!".
Note: After each 'match', all tickets will be no longer valid for next draws, so the 'Lottery' should be reset 
properly!*/


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


/*
Declare a function, 'enqueue', which is accessible to ALL instances of 'UniqueQueue'. 'enqueue' should take 
in a single argument, and when invoked on a UniqueQueue instance, should add the argument to the end of the queue if it's not already present, increment the UniqueQueue's length property appropriately, and return the length of the queue.
*/




// Declare a function 'OrderedList', which takes in no arguments and returns an instance of an 'OrderedList' object when invoked with the 'new' keyword. OrderedList objects should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. However, all elements are in sorted order.
// All OrderedList objects should contain their own 'length' property, which keeps track of the number of items they contain. An OrderedList should also keep track of whether it is sorted in reverse order with a isReversed property. When an OrderedList is first created, it should have a length of 0 and an isReversed value of false.

//input: none
//output: objects 
//{ 0: value, 1 : value, 2 : value, length : 0, isReversed : false }
//use isReversed will keep track of whether object is reversed 
//check whther object is in reverse order by checking if first index is 0

function OrderedList() {
  
  this.length = 0;
  this.isReversed = false;
  
}
const list1 = new OrderedList;
console.log(list1);  //{ 0: value, 1 : value, 2 : value, length : 0, isReversed : false }


// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'OrderedList'. 'add' should take in a number as a single argument, and when invoked on an OrderedList instance, should add the number to that OrderedList in descending order if the list is not reversed, or ascending order if the list is reversed. Update the OrderedList's length property appropriately, and return the length of the OrderedList.

//add takes single arg (number) and store it as values
//if list isreversed = true, add number in descending order
//if list isreversed = false, add in ascending order
//check the isReversed prop
//add key according to length prop value
//add value and increment index and length
//access object check if number at last index is greater or smaller using Object.values
//return length prop


OrderedList.prototype.add = function(num) {

  
  this[this.length] = num;
  this.length++;
  
  const values = Object.values(this).slice(0, this.length);
  
  if(!this.isReversed) {
    values.sort((a,b) => b-a);
  } else {
    values.sort((a,b) => a-b);
  }
  
  for (let i = 0; i < values.length; i++) {
    this[i] = values[i];
  }
  
  return this.length;
}

console.log(list1.add(3)) // return object length
console.log(list1.add(5)) // return object length
console.log(list1) // { 0: 5, 1: 3, length : 0, isReversed : false }


// - Task 2: Declare a function, 'reverse', which is accessible to ALL instances of 'OrderedList'. 'reverse' should take in no arguments, and when invoked on an OrderedList instance, should reverse the order of all elements in that OrderedList (except the 'length' property), and change the value of isReversed.



/* 
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the `new` keyword.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.
*/


function NumberedList(...arg) {
  this.length = 0;
  console.log('arg: ', arg)

}

const newList = new NumberedList(1, 2, 3);
// console.log()

/* 
A linked list is a collection of sequentially stored objects (called nodes). Each node must contain two properties: an associated value, and a reference to the next node in the list.
Unlike in an array, nodes in a linked list are not accessible directly via index. 

The only way to traverse the list is to iterate over each node, starting from the first (called the 'head'), using its 'next' property to access the one that follows.

The last node in the list (called the 'tail') should have a 'next' property that is set to 'null', indicating that nothing follows it.

***************      ***************      ***************       
** value: 1 ***      ** value: 2 ***      ** value: 3 ***
** next: --------->  ** next: --------->  ** next: --------->  NULL
***************      ***************      ***************      

Following these specifications, declare a constructor function 'ListNode' for a node in a linked list. It should take one argument, which will be assigned to that node's value.

Next, declare a variable called 'linkedList', and assign it to a new ListNode instance with the value of your choosing.

*/

//node { value: arg, next: arg++}
//not accesssible via index
//head: first node, tail: last node
//input: node's value
//constructor func ListNode refers to one node, assigned to that node's value
//linkedList = new ListNode instance

function ListNode(value) {
  this.value = value;
  this.next = null;
}
const linkedList = new ListNode(1);

console.log(linkedList); // { value: 1, next: null }


// ListNode { value: 1, next: ListNode { value: 2, next: ListNode { value: 3, next: null } } }

/* 
Declare a method 'addToEnd', accessible to all instances of the ListNode object, that adds another node to the end of the list.
'addToEnd' should take in one argument, representing the new node's value. It should cycle through however many nodes are currently in the list and add a new ListNode instance to the very end of the list.
*/

//input: value (new nodes value)
//variable to represent currentNode = this
//traverse instances until this.next === null
//if this.next === null, next current instance inside this one
//on each iteration reassign currentNode.next
//create new instances inside method

ListNode.prototype.addToEnd = function(value2) {
  //variable to represent currentNode = this
  let pointer = this
//traverse instances until this.next === null
  while (pointer.next !== null) {
    //on each iteration reassign currentNode.next
    pointer = pointer.next
  }
  //create new instances inside method
  pointer.next = new ListNode(value2)
  
}

linkedList.addToEnd(2);
linkedList.addToEnd(3);

console.log(linkedList)


console.log(linkedList.addToEnd(2)) // ListNode { value: 1, next: ListNode { value: 2, next: null } }

