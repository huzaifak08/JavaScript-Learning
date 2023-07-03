// Error Objects: for all the build in errors, the error object has two main properties name message.

// Example 1:
try {

    // return (hunny);
    throw new ReferenceError('Harry is not felling good'); // This will be error.message


} catch (error) {

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); // Stack is thrown by default if we not mention any property.

}

// Example 2:
try {

    let age = prompt('Enter your age');
    age = Number.parseInt(age);

    if (age > 150) {
        throw new ReferenceError('This is probably not true')
    }

} catch (error) {
    console.log(`Error name: ${error.name}, Error message: ${error.message}`);
}