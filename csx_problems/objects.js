/*Challenge: Inventory
Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.

 */

// const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
// myInventory.addItem('carrot', 1);
// console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
// myInventory.addItem('cucumber', 3); 
// console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
// console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
// console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
// console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'


/* Challenge: Dog Constructor

Declare a function Dog that creates a new instance of a Dog object when invoked with the new keyword. Each Dog object should have a name property and a breed property, both strings 
which are passed in as arguments when calling the Dog function. It should also have a property called tricks, set to an array representing all the tricks that dog knows. When a new 
object is initiated, tricks should be empty.

All of your Dog objects must also have access to two methods that are stored on the constructor's 
prototype:

The first method, learnTrick, should take in a string as an argument and add that string to the 
tricks array of the particular Dog object it was called on.

The second method, performTrick, should also take a string as an argument. It should check to see 
if that string is in the tricks array belonging to the Dog instance it was called on; if so, it 
should log the string 'name performed trick!' If not, log the string 'name doesn't know that trick.*/

function Dog(name, breed) {
	// add code here

}

const fido = new Dog('Fido', 'poodle');

// Uncomment these lines to check your work!
// fido.learnTrick('fetch');
// fido.performTrick('fetch'); // should log 'Fido performed fetch!'
// fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'


/* Challenge: PersonConstructor
Create a function PersonConstructor that uses the this keyword to save a single property onto its 
scope called greet. greet should be a function that logs the string "hello". */

function PersonConstructor() {
	this.greet = function(){console.log('hello')}
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'

/*: personFromConstructor
Create a function personFromConstructor that takes as input a name and an age. When called, the 
function will create person objects using the new keyword instead of the Object.create method.*/


// const mike = personFromConstructor('Mike', 30);
// // Uncomment these lines to check your work!
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); // -> Logs 30
// mike.greet(); // -> Logs 'hello'


/* Challenge: introduce (cont.)
Without editing the code you've already written, add an introduce method to the PersonConstructor 
function that logs "Hi, my name is [name]".*/

// const mike = personFromConstructor('Mike', 30);

// add code here


// Uncomment this line to check your work!
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/*Challenge: Chain Stores
Declare a class Chain that creates a new instance of a Chain object when invoked with the new keyword. Each Chain object should have a name property, a totalStores property, and a 
locations property. The name property will be assigned to a string which is passed in as an argument when calling the Chain function. The totalStores property should be initialized 
to 0 and the locations property set to an array representing all the existing franchises of that chain store. When a new object is initiated, the locations array should be empty.

Declare another class Franchise that creates a new instance of a Franchise object when invoked with the new keyword. Each Franchise object should have an owner property and a city 
property, both of which will be set equal to strings passed in as arguments to the constructor.

All instances of your Chain class must also have access to two methods that are stored on the class's prototype:

The first method, openStore, should take in 2 strings as arguments. Those strings should be passed into a new instance of a Franchise object as the arguments for the owner and city 
properties. The new instance of Franchise should be added to the locations array which belongs to the Chain instance the method was called on. The totalStores property should also 
be updated accordingly.

The second method, closeStore, should take a single string as an argument. It should check to see if there is an instance of a Franchise with a city property that matches the input 
string in the locations array on the instance of Chain the method was called on. If so, it should remove the instance from the locations array, update the totalStores property and 
display the string 'name closed the store in city!' If not, log the string 'name doesn't have a store in city.' */

class Chain {
	// add code here
}

class Franchise {
    //add code here
}


const buenoBell = new Chain('Bueno Bell');

// Uncomment these lines to check your work!
//buenoBell.openStore('Will', 'Phoenix');
//buenoBell.openStore('Kyle', 'Austin');
//buenoBell.openStore('Allison', 'Wichita');

//console.log(buenoBell.totalStores); //should log 3
//console.log(buenoBell.locations[0].owner) //should log 'Will'

//buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
//buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'

console.log('midnight sun')