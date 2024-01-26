// Attributes: class, id , style , hidden, href, onClicked etc

let element = document.getElementById("first");
console.log(element); // div#first.hey

// getAttribute(): Method used to get the value of an attribute.
console.log(element.getAttribute("class")); // hey

// hasAttribute(): Method to check the existence of an attribute.
console.log(element.hasAttribute("class")); // true
console.log(element.hasAttribute("style")); // false

// setAttribute(): Method used to set the value of an attribute.
first.setAttribute("hidden", "true");

// removeAttribute(): Self explanatory
element.removeAttribute("class");

// Method to get the collection of all attributes.
console.log(element.attributes); // NamedNodeMap {0: id, id: id, length: 1}

// Custom Atributes: start with "data-" keyword in a Tag and "dataset" in JS
console.log(element.dataset); // DOMStringMap {game: 'mario', player: 'harry'}
console.log(element.dataset.game); // mario
console.log(element.dataset.player); // harry
