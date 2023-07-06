// Prototypes: toString(), toInt() etc 

// We also can have custom prototypes.

// If you want some properties or methods in a object, put it in prototype.

let a = {
    fname: 'Huzaifa',
    lname: 'Khan',
}

console.log(a.toString());

let p = {
    run: () => { // run function
        alert('run');
    }
}

a.__proto__ = p;  //p is prototype of a.
a.run();

// if the mehod is not available in main object then it will be search the prototype

// We also can have a prototype of prototype: prototype Inheritance
p.__proto__ = {
    age: 22,
}

console.log(a.age);