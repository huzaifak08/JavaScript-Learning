let b = document.body;

console.log("First Child of b: ", b.firstChild); //#text
console.log("First Element of b: ", b.firstElementChild); // <nav>

const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};
