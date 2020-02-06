/* Try these in Chrome Console */
/*

/* Selector gets first instance, SelectorAll gets all */
/*
document.querySelectorAll("li");
document.querySelector("li");
document.querySelector("#heading");
document.querySelector(".list-parent");
document.querySelectorAll(".green");
*/

/*
const listItems = document.querySelectorAll("li:nth-child(even)");

console.log(listItems);
console.log(listItems.length);
*/

const list = document.querySelectorAll("li:nth-child(even)");

for (const newLoop of list) {
    newLoop.style.color = "lightgreen";
}