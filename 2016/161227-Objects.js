// setters and getters

// maximum call stack exceeded when trying to set value on 'a' using 'this.a'
// internally javascript creates private variables to set/get properties
// bad code

let obj1 = {
  get a() {
    return this.a;
  },
  set a(val) {
    this.a = val;
  }
};

obj1.a = 9;
console.log(10, '161227-Objects.js', obj1.a); // maximum call stack exceeded

// use a private variable
let obj2 = {
  get a() {
    console.log(21, '161227-Objects.js', 'calling get value');
    return this._a_;
  },
  set a(val) {
    console.log(24, '161227-Objects.js', 'calling set with', val);
    this._a_ = val;
  }
};

obj2.a = 9;
obj2.a;
