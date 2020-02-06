const input = document.getElementById("input");
const button = document.getElementById("submit");

const list = document.getElementById('list');
// Does same as above.... selecting first [0] ul in code
// const list = document.getElementsByTagName('ul')[0];

const showhidebtn = document.getElementById('showhide-btn');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    listItem.textContent = input.value;

    if (input.value == '') {
        alert('Cannot be empty')
    } else {
        console.log('button click works')
        // Add to list 'ul' or id='list'. Same but depends how getElement specified! 
        list.appendChild(listItem);
        console.log(listItem);
    }

    input.value = "";
})

showhidebtn.addEventListener('click', () => {
    console.log('Hide button clicked');
    if (list.style.display == 'none') {
        list.style.display = 'block';
        showhidebtn.textContent = 'Hide';
    } else {
        list.style.display = 'none';
        showhidebtn.textContent = 'Show';
    }
})