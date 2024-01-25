let id1 = document.getElementById("id1");

console.log(id1);

// Matches:
console.log(id1.matches(".class")); // false
console.log(id1.matches(".box")); // true

// Closests:
/* Search from the given CSS Selector to its Parent, if not found then will search
    in the grand parents and so one. Just like a circle getting bigger and bigger,
    started from a point.
 */
let sp1 = document.getElementById("sp1");

console.log(sp1.closest(".box"));

// Contains:
/* retuns true if an element A contains element B or elementA == elemetB */
console.log(id1.contains(sp1));
console.log(id1.contains(id1));
