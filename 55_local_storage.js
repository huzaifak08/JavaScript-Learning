// Local Storage: gets string key value pair.

localStorage.setItem("name", "Huzaifa");

// Example:
let key = prompt('Enter your key')
let value = prompt('Enter your value')

// Save to local storage:
localStorage.setItem(key, value);

// Get from local storage:
console.log(localStorage.getItem(key));

// Delete or Remove Item:
localStorage.removeItem(key);

// Clear the local storage:
localStorage.clear();