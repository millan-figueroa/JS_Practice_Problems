    Inventory.prototype.addItem = function(item, price) {
      if(!this.hasOwnProperty(item)){ //if item does not exist in object, add
          this[item] = { price : price, quantity : 1 }
        } else { this[item].price = price, this[item].quantity++ }; //else, update quantity
    }
  
    Inventory.prototype.deleteItem = function(item, price) {
      if((!this.hasOwnProperty(item)) || (this[item].quantity <= 0)){
        return 'Nothing to delete';
      } else {
        this[item].quantity -= 1;
        return 'Deleted';
      };
    }
  
    Inventory.prototype.checkItem = function(item, price) {
      if(!this.hasOwnProperty(item)){
        return 'Item is not in inventory';
      } else {
        return this[item];
      };
    }

const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 5); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'

/* In the openStore method, you are overwriting the this.owner property each time a new store is 
opened. It would be better to store owners in an array or object to keep track of multiple owners 
for different stores.

In the closeStore method, you are using delete this.city, which is incorrect. Instead, you should 
find the index of the city in the this.locations array and remove it.*/

// class Chain {
// 	constructor(name){
//         this.name = name;
//         this.totalStores = 0;
//         this.locations = [];
//     }
    
//         openStore(owner,city){
//             const newFran = new Franchise(owner,city);
//             // this.owner = owner;
//             this.locations.push(newFran);
//             this.totalStores++;
//         };
//         closeStore(city) {
//             for (let i = 0; i < this.locations.length; i++) {
//                 if (this.locations[i].city === city) {
//                     this.locations.splice(i, 1);
//                     this.totalStores--;
//                     console.log(`${this.name} closed the store in ${city}!`);
//                     // return; // we return so the default statement is not printed
//                 }
//             } 
//       console.log(`${this.name} doesn't have a store in ${city}.`);
//     }
// }
// class Franchise {
//     constructor(owner,city){
//         this.owner = owner;
//         this.city = city;
//     }
// }

// const buenoBell = new Chain('Bueno Bell');

// // Uncomment these lines to check your work!
// buenoBell.openStore('Will', 'Phoenix');
// buenoBell.openStore('Kyle', 'Austin');
// buenoBell.openStore('Allison', 'Wichita');

// console.log(buenoBell.totalStores); //should log 3
// console.log(buenoBell.locations[0].owner) //should log 'Will'

// buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
// buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'
