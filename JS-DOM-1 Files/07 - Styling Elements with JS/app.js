const image = document.getElementById("cat");
const button = document.getElementById("submit");

// console.log(image.style);
// type 'image.style' in chrome console log, will display all css styles.

button.addEventListener("click", () => {
  /*
  if (image.style.display === 'none') {
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
  */
  
  if (image.style.display == "none") {
    image.style.display = "block";
    button.textContent = "hide";
  } else {
    image.style.display = "none";
    button.textContent = "show";
  }
  
});

