function OrderedObject() {
  this.obj = {};
  this.length = 0;
}

OrderedObject.prototype.addProp = function(value) {
  if (!(value in this.obj)) {
    this.length++;
    this.obj[this.length] = value;
  }
}

OrderedObject.prototype.removeProp = function(value) {
  for (let key in this.obj) {
    if (this.obj[key] === value) {
      delete this.obj[key];
      this.length--;
      break;
    }
  }
}

function createOrderedObject(arr) {
  let orderedObj = new OrderedObject();
  for (let i = 0; i < arr.length; i++) {
    orderedObj.addProp(arr[i]);
  }
  return orderedObj;
}

let inputArr = [10, 20, 20, 30, 40];
let orderedObj = createOrderedObject(inputArr);
console.log(orderedObj.obj); // Output: {1: 10, 2: 20, 3: 30, 4: 40}
console.log("length:", orderedObj.length); // Output: length: 4

orderedObj.removeProp(20);
console.log(orderedObj.obj); // Output: {1: 10, 3: 30, 4: 40}
console.log("length:", orderedObj.length); // Output: length: 3



/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
	this.greet = function() {
    console.log(`hello`)
  }
}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
	const person = new PersonConstructor;
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 7 ***/
PersonConstructor.prototype.introduce = function(){console.log(`Hi, my name is ${this.name}`)}


// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
  constructor(name){    
    this.name = name
  }
  greet = function(){console.log(`hello! I'm a PERSON named ${this.name}`)}
}

class DeveloperClass extends PersonClass {
  constructor(name){
    super(name)
  }
  introduce = function(){console.log(`hey! Now I'm a DEV named ${this.name}!`)}
}
const Ronaldo = new PersonClass('Ronaldo');
const Millan = new DeveloperClass('Millan');
// Millan.greet()
// Millan.introduce()
// Ronaldo.greet();
// Ronaldo.introduce()


/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function() {
    console.log("I am a(n) " + this.type);
  }
}


function userFactory(name, score) {   
  let user = Object.create(userFunctionStore); 
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

const adminFunctionStore = Object.create(userFunctionStore);

// function adminFactory(name, score) {
//   let admin = Object.create(adminFunctionStore);
//   admin.type = 'Admin';
//   return admin;
// }
function adminFactory(name, score) {
  let admin = Object.create(userFactory(name, score)); // Inherits properties and methods from userFactory
  Object.assign(admin, adminMixin); // Mixin admin specific functionality
  admin.type = 'Admin'; // Add admin-specific properties
  return admin;
}


adminFunctionStore.sharePublicMessage = function(){console.log(`Welcome admins!`)} 

const userObject = userFactory('Steven', 12);
const adminObject = adminFactory('Eva', 5);

console.log(userObject.name); //Steven
console.log(adminObject.name); //Eva?
console.log(userObject); //{type: 'User', name: 'Steven', score: 12, sayType()}
console.log(adminObject); //{type: 'Admin', name: 'Eva', score: 5, sayType(), sharePublicMessage}
userObject.sayType(); //'I am a(n) User'
adminObject.sayType(); // 'I am an(n) Admin'
// userObject.sharePublicMessage(); //error message
adminObject.sharePublicMessage(); //'Welcome Admins!'


/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

let robotFido = new Dog();

// robotFido = /* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"

