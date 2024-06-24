let next = document.querySelector('.next');
let prev = document.querySelector('.prev');


next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
items[1].style.color = 'red';

});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
    // items[1].style.color = 'blue'
});

const name = document.querySelector('.name');
name.style.color = 'rgba(69, 184, 113, 1)';

const button = document.querySelector('button');
button.style.background = 'transparent';
button.style.border = '1px solid #fff';
button.style.color = '#fff';
button.style.fontFamily = 'sans serif';
button.style.background = 'rgba(69, 184, 113, 1)';
button.style.borderRadius = '8px';


