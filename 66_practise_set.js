// Question 1: Complex Number:

class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }

    get real() {
        return this._real;
    }

    get imaginary() {
        return this._imaginary;
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }

    set real(newReal) {
        this._real = newReal;
    }
}

let a = new Complex(2, 3);
a.real = 10;
a.imaginary = 20;
console.log(`${a.real}+${a.imaginary}ι`)

let b = new Complex(3, 4);
a.add(b);

console.log(a.real, a.imaginary);

// Question 2:

class Human {
    humanBeing() {
        console.log('This is humanBeing from Human Class');
    }
}

class Student extends Human {
    humanBeing() {
        super.humanBeing();

        console.log('This is humanBeing from Student Class');
    }
}

let stu = new Student();
stu.humanBeing();

// Question 3:
console.log(stu instanceof Human); // true

