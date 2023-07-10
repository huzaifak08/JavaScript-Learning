// Static Method: SYNTAX: className.methodName()

// Static method can be use anywhere outside or inside of the class.

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(this.name + " is walking");
    }

    static capatalize(name) {
        // Can't use this.name in static methods.

        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

// let j = new Animal("jack");  you can also use Animal.capatalize in constructor.
let j = new Animal(Animal.capatalize("jack"));

j.walk();