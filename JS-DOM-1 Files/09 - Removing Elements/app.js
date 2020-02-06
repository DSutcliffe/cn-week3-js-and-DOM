const input = document.getElementById('input');
const button = document.getElementById('submit');
const remove = document.getElementById('remove');
/*add new const below*/

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

remove.addEventListener('click', () => {
    console.log('Remove works')
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(lastItem);
})
