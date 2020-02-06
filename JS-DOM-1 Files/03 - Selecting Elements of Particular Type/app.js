const list = document.getElementsByTagName("li");
const list2 = document.getElementsByClassName("not-orange");

// Try following commands in console
/*
list.length;
list[0];
list[3];
list[0].style.color="red";
*/

/*
console.log(list);
console.log(list.length);
*/


/*
for (let i = 0; i < list.length; i++) {
    list[i].style.color="orange";
}
*/
/* forOf Loop - same as forLoop above */
for (const newLoop of list) {
    newLoop.style.color = "orange";
}


/*
for (let i = 0; i < list2.length; i++) {
    list2[i].style.color="red";
}
*/
/* forOf Loop - same as forLoop above */
for (const newLoop of list2) {
    newLoop.style.color = "red";
}