// String Methods: Strings are immutable(UnChangeable)

let fname = "Huzaifa\'s";
let lname = "Khan";

console.log(fname.length);

console.log(lname.toUpperCase());
console.log(lname.toLowerCase());

console.log(lname.slice(1));  // 1 index to end.
console.log(lname.slice(0, 2));  // 2 index is not included.

console.log(lname.replace('ha', 'er'));

console.log(fname.concat(lname));

let friend = "        Kamran    ";
console.log(friend.trim());

for (let i = 0; i < lname.length; i++) {
    console.log(lname[i]);
}