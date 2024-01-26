console.log(document.getElementsByTagName("span")[0]); // Return Node
console.dir(document.getElementsByTagName("span")[0]); // Return Node object

console.log(document.body.firstChild.nodeName); // Return Tag name
console.log(document.body.firstElementChild.nodeName); // Returns Node name

// Inner HTML: Valid only for Element Node:
let first = document.getElementById("first");
console.log(first.innerHTML); // Hi This is Span

// Outer HTML:
console.log(document.getElementById("first").outerHTML); //<span id="first">Hi This is Span</span>

// Text Content:
console.log(document.body.textContent);

console.log((document.getElementById("first").hidden = false));
