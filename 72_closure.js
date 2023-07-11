// Closure: Function along with its Lexical environment

message = 'Good Morning';

function hello1() {
    let message = "Hello world";

    console.log("This is my " + message);

    let c = function hello2() {
        console.log("I am c " + message);
    }
    return c;
}

// hello1();    OUTPUT: This is my Hello world

c = hello1();
c();

/* OutPut: This is my Hello world
            I am c Hello world      (This is Called closure)*/

// Example 2:
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
