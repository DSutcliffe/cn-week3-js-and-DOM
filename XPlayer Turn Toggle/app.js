// alert("hello")
// userInput = prompt("Player 1 press")

// const userInput = document.getElementById("userInput");
const userInputButton = document.getElementById("userInputButton");

userInputButton.addEventListener("click", () => {
    console.log(userInputButton.textContent)
    
    if (userInputButton.textContent == "Player 1 Press") {
        userInputButton.textContent = "Player 2 Press"
    } else {
        userInputButton.textContent = "Player 1 Press"
    }
    
});