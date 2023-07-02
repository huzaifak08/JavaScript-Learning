// Callbacks:

function greet(name, callback) {
    console.log('Hello ' + name + '!');

    callback();
}

function sayGoodBye(error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('Good Bye');
}

greet('Huzaifa', sayGoodBye);

// Second Method:
greet('John', function () {
    console.log('Goodbye!');
});
