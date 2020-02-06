// Line below used for input box in HTML
// const input = document.getElementById('input')

function keycode() {

    var key = document.getElementById('key');
    key.innerHTML = event.key
    var code = document.getElementById('code');
    code.innerHTML = event.code
    var which = document.getElementById('which');
    which.innerHTML = event.which

    // Line below was used to empty input box in HTML
    // input.value = "";
}

document.addEventListener("keypress", function onPress() {
    keycode();
});