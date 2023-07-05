// Question 1: Use Fetch API

let p = fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json&modelyear=2011");

p.then((response) => {
    console.log(response.status);
    return response.json();
}).then((data) => {
    console.log(data);

    // Accessing a specific object by index (e.g., index 7)
    const objectAtIndex7 = data.Results[7];
    console.log(objectAtIndex7);

    // Finding an object with a specific property value (e.g., object with ID "ABC123")
    const findSpecificObject = data.Results.find(obj => obj.Variable === "Seat Belt Type"); // Variable is key in our json
    console.log(findSpecificObject);

}).catch((error) => {
    console.log('Error:', error);
});

// Question 2: Note saving app using local storage.
let title = prompt("Enter your note title");
let body = prompt("Enter your note body");

localStorage.setItem(title, body);
console.log(`Title: ${title}, Body: ${body}`);

// Question 3: Get the saved Note.

let title1 = prompt("Enter your note title which you want to see?");

if (title1) { // title1 cannot be empty now
    alert(localStorage.getItem(title1));
}

// Question 4: Delete the note.
let title2 = prompt('Enter the note title you want to delete.');
localStorage.removeItem(title2);