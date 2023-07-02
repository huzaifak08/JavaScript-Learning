// Pyramid Of Doom/Callback hell: Callbacks inside callbacks

function greet(name, callback) {
    console.log('Hello ' + name + '!');

    callback();
}

greet('Huzaifa', function sayGoodBye(error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('Good Bye');

    greet('Huzaifa', function sayGoodBye(error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log('Good Bye');

        greet('Kamran', function sayGoodBye(error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log('Good Bye');

            greet('Hanzla', function sayGoodBye(error) {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log('Good Bye');
            })
        })
    })
});

// We have to avoid these and these can be avoid using promises.