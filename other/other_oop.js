/*
******* World **** (from HackerHero)

For this challenge, your tasks are to finish designing three classes: World, City, and Citizen.

For this task, finish the code below so that:

the program successfully creates a 'world' object
the program successfully adds 100 cities into the world object using add_city method.
your program should create these cities with random city name that's 5 characters long and composed of alphabets (use lowercase).
when a new city is created, it automatically adds 50 citizens to the city, with each citizen having a random age between 0 to 100.
World class needs to have

a method called add_city - where you can pass the city name and it adds to its list
an attribute called cities - where this would be an array containing all the city object
constructor(num) - that creates num number of cities. for example new World(50) should create 50 new cities and store this.
a method called random_city - where it pulls out a random city object
a method called total_cities() - that returns the total number of cities in this world
City needs to have

constructor(name) - that creates a new city with the given 'name' or if 'name' is blank, it can automatically create a random city name that's 5 characters long and composed of lowercase alphabets.
a method called add_citizen - where you can create a new citizen
an attribute called citizens - where this would be an array containing all the citizen objects
Citizen needs to have

a constructor
when a new citizen is created, it needs to automatically assign a random age (between 0 to 100)
Make sure your code meet all the requirements above and not only rely on the test case to make sure your code is complete.As in real life, test cases do not capture all cases and on this particular challenge, we'll intentionally not add all test cases, so that you're still reviewing your code and checking all scenarios.

*/

class World {
    constructor(num){
            this.num; // number of cities to create
            this.cities = []; //array containing all city objects
    }
        
    add_city(cityName){ // pass city name and adds to list
            this.cities.push(cityName)
    };
        
    random_city(){ // pulls out random city object
    }
        
    total_cities(){ // returns total number of cities in this world
    }
}
    

    
class City {
    constructor(name){ // constructs new city w given name, or creates random city name (5 char long, lowercase) if not given
        this.citizens = [] // array containing citizen objects
    }
    
    add_citizen(){ // creates new citizens
    }
    
}
    
class Citizen {
    constructor(){ // creates new citizens and automatically assigns random age (btwn 0 - 100)
    
    }
}
    
    //create a world with 100 cities
    let world = new World(100);
    
    //adds a new city called 'hackerhero'
    world.add_city('hackerhero');
    
    //should pull out a random city object within the world and log its value
    console.log('Random city name: ', world.random_city().name);
    
    //should pull out a random city object within the world and log its value
    console.log('Age of first citizen in another random city: ',  world.random_city().citizens[0].age);
    
    //should log 101 as there are 101  cities now
    console.log('# of Cities: ', world.total_cities());