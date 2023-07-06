// Constructor Overriding:

/*
    when we don't make a constructor for a class, javascript make its own by default constructor.

    constructor(){
        super();
    }

    Now if the class is child class then it will override the constructor of parent class using super.
 */

class Employee {
    constructor() {
        console.log('This is constructor of parent class')
    }

    login() {
        console.log('Employee has logged in');
    }

    logout() {
        console.log('Employee has logged out');
    }

    requestLeave(leave) {
        console.log(`Employee has requested ${leave} leave`);
    }
}

class Programmer extends Employee {
    // here we have javascript by default constructor, which will override the parent constructor.(including args)
    // if you are making constructor in child class then must use super keyword (its compulsory).
    // Super keyword must on 1st line inside the constructor.

    requestCoffee(x) {
        console.log(`Employee has requested ${x} Coffees`);
    }

    // @Override
    requestLeave(leave) {
        // console.log(`Employee has requested ${leave + 1} leave (1 extra)`);  Instead of copying whole method use super

        super.requestLeave(leave + 1); // It contains everything inside requestLeave of parent class.

        // Additional requirements can be fullfilled here.
        console.log('One extra is granted');
    }
}

class HumanResource extends Employee {

    // Must read the instructions in Programmer class:
    constructor(name) {
        super(); // Output: "This is constructor of parent class"
        this.name = name;
    }

    hiring() {
        console.log(this.name + ' Hr is hiring');
    }
}

let p = new Programmer();
p.requestLeave(3);

let hr = new HumanResource("Aqsa");
hr.hiring();