/*
Declare a function, 'Collection', which takes in an array as an argument and returns an instance of a 'Collection' object when invoked with the 'new' keyword.
'Collection' objects should function similarly to a Set - i.e., they will only store UNIQUE values (no duplicates). A Collections's keys will match its values.
All Collection objects should contain their own 'size' property, which keeps track of the number of items they contain. 
When a Collection is first created, each array element should be added, and the 'size' property updated accordingly. (You don't need to worry about the order of properties in a Collection.)

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