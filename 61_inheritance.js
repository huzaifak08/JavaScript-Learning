// Inheritance:

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    };

    run() {
        console.log(this.name + ' is running');
    }

    shout() {
        console.log(this.name + ' is shouting');
    }
}

class Monkey extends Animal {

    eatBnana() {
        console.log(this.name + 'is eating bnana');
    }
}

let champu = new Monkey('champu', 'black');
champu.eatBnana();

champu.run();