// Getter and Setter: Must use "_" in getters and setters:

class Animal {
    constructor(name) {
        this._name = name;
    }

    fly() {
        console.log('Lets Fly together in the sky of Allah');
    }

    // now you can get and set new name from outside the class
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

}

let a = new Animal('Bruno');
a.fly(); // Lets Fly together in the sky of Allah

console.log(a.name); // Bruno

a.name = 'Browdy';
console.log(a.name); // Browdy

// Instance of: (instance is object)

// It returns true if object belongs to the class or any other class inheriting from it.

console.log(a instanceof Animal); // true

console.log(c instanceof Animal); // false