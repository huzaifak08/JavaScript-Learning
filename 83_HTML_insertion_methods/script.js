let a = document.getElementsByTagName("div")[0];

// Simple Insertion for less elements:
a.innerHTML = a.innerHTML + "<h1>Hello World</h1>";

// Insertion for alot of elements:
let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";

// Append:
a.append(div);
a.appendChild(div);

// Prepend: add as first element inside the container.
a.prepend(div);

// Before: add before(and outside) the container.
a.before(div);

// After: add after(and outside) the container.
a.after(div);

// Replace:
a.replaceWith(div);
