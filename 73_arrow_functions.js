// Arrow Functions:

const sayHello = name => {
    console.log("greeting", name);
    console.log("Hi");
}

// Example 2:
const x = {
    name: 'Hunny',
    role: 'JS Developer',
    exp: 30,
    show: function () { // If you are using normal function then 'this' has scope till this function only.
        let that = this; // so pass the data in 'this' to 'that' variable. (setTimeout)
        console.log(this);
        setTimeout(function () {
            console.log(`This is Name: ${that.name} and this is Role: ${that.role}`);
        }, 2000);
    }
}
x.show();

// Using arrow function:
const y = {
    name: 'Hunny',
    role: 'JS Developer',
    exp: 30,
    show: function () {
        // arrow function has scope till function inside function.so no need to pass the data in variable.
        setTimeout(() => {
            console.log(`This is Name: ${this.name} and this is Role: ${this.role}`);
        }, 2000);
    }
}
y.show();