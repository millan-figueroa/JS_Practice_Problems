class Homo {
  
    talk() {
      return 'Talking'
    }
  }
  
  const Adry = new Homo();
  const Millan = new Homo();
  
  function Dude(name) {
    this.name = name;
  }

  const me = new Dude('Millan');
  Dude.prototype.talk = function talk
  console.log(Millan.talk())
  
  //inside constructor its not regarded as a method
  //inside the prototype its a method
  //properties things i have, methods things i do
  //setprototypeof transfer methods/props from one object to another
  //prototype is a property on the constructor (me.__proto__ === Dude.prototype)
  //__proto__ is a property every variable has that points to parent object
  //prototype property on constructor function that contains all stuff that will be inherited by instances
  //same thing but accessed from different place
  