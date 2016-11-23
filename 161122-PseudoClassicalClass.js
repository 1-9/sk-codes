// constructor function
let Building = function Building(floors, type) {
  this.type = type;
  this.floors = floors;
}

// common methods are put on prototype to handle delegation time lookup
Building.prototype.countFloors = function countFloors() {
  return this.floors;
}

let myHouse = new Building(2, 'house');
console.log(myHouse.countFloors()); // 2

console.log(myHouse);