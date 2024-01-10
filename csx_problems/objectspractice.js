 // Inventory constructor should have (via prototype) the following functions: 
  // addItem - adds additional items to object, accepts item and price args, checks to see if inventory object has item (increment quantity), and update price
  // deleteItem - checks passed in string, if matching property, decrement by 1 and return string 'Deleted', or (if zero) return 'Nothing to delete.'
  // checkItem - check if passed in string exists as property on inventory object. It not, return 'item is not in inventory'

  function Inventory(item, price) {
    //Inventory object cucumber: {price: 2 (passed in number), quantity: 1}
    this[item] = { price: price, quantity: 1 };   
}

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

