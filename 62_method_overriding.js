// Method Overriding: same named methods in both parent and child class.

class Employee {

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

let p = new Programmer();
p.requestLeave(3);