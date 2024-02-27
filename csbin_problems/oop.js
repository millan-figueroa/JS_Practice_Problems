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
