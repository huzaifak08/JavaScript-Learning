// Finally Clause:

try {

    console.log(program);
    console.log('Program Ran Successfully');

} catch (error) {

    console.log('This is an error');
    console.log(p);

} finally {

    console.log('Kamran is a good boy');
    // Close the file
    // Exit the loop
    // Write to the loop file
}

// finally will execute even if the whole try/catch is wrap in a function(with returning some value).

const myFunction = () => {

    try {

        console.log(program);
        console.log('Program Ran Successfully');
        return;

    } catch (error) {

        console.log('This is an error');
        console.log(p);

    } finally {

        console.log('Kamran is a good boy');
    }

}

myFunction();
