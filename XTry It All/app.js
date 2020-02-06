const heading = document.getElementById("heading");

const changeHeaderInput = document.getElementById("changeHeaderInput");
const changeHeaderButton = document.getElementById("changeHeaderButton");

const userPictureInput = document.getElementById("userPictureInput");
const userPictureButton = document.getElementById("userPictureButton");

const userImageChoice = document.getElementById("userImageChoice");

const userPictureClearButton = document.getElementById("userPictureClearButton");

const userPictureSizeInput = document.getElementById("userPictureSizeInput");
const userPictureSizeButton = document.getElementById("userPictureSizeButton");

const colors = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
let colorCount = 0;

heading.addEventListener("click", () => {
    if (colorCount == 6) {
        colorCount = 0;
        heading.style.color = colors[colorCount];
    } else {
        heading.style.color = colors[colorCount];
        colorCount++;
    }
});

changeHeaderButton.addEventListener("click", () => {
    heading.textContent = changeHeaderInput.value;
});

userPictureButton.addEventListener("click", () => {
    userImageChoice.src = userPictureInput.value;
    /* Example images */
    /*
    https://cdn.wearecodenation.com/app/uploads/20190220150002/new-class-32.jpg
    https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-bright-414612.jpg&fm=jpg
    */
});

userPictureClearButton.addEventListener("click", () => {
    userPictureInput.value = "";
});

userPictureSizeButton.addEventListener("click", () => {
    userImageChoice.style.width = (`${userPictureSizeInput.value}%`);
});