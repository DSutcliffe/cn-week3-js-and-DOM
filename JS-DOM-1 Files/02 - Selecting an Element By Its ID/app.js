// document.getElementById("heading").style.backgroundColor = "yellow"

/* Set as Variable instead of referenceing each time */
/* example not part of this slide */
/*
let heading = document.getElementById("heading")
console.log(heading)

heading.style.backgroundColor = "yellow"
*/

const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {

    heading.style.color = input.value;
});