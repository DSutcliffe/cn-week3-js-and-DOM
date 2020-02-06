const image = document.getElementById("image");

const input = document.getElementById("input");
const button = document.getElementById("submit");

console.log(image)

button.addEventListener("click", () =>{
  image.src = input.value;
  /*
  https://cdn.wearecodenation.com/app/uploads/20190220150002/new-class-32.jpg
  */
})