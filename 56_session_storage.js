// Session Storage: Data survives on page reload but not on closing/opening of tabs.
// Data only exists on current existing tab.

let key = prompt('Enter your key')
let value = prompt('Enter your value')

// Save to session storage:
sessionStorage.setItem(key, value);

// Get from session storage:
console.log(sessionStorage.getItem(key));

// Delete or Remove Item:
sessionStorage.removeItem(key);

// Clear the session storage:
sessionStorage.clear();

/* Storage Event: If we have same link open in two tabs and we add or update some data in
 local or session storage then it is use to update the data on both the tab.    */

window.onStorage = (e) => {
    alert('Changed'); // This will show in the 2nd tab, if you changed data in 1st tab.
    console.log(e);
}