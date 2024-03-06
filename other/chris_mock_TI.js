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

class Shape {

    name;
    sides;
    sideLength;
  
  }
    
/*OOJS 2
Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK.
*/

