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












