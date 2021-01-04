const btn = document.querySelector('button');
const text = document.querySelector('#text');

// const red = '#ff0000';
// const blue = '#0000ff';

btn.addEventListener('click', () => {
    if (text.style.color === 'red') { text.style.color = 'blue'; }
    else { text.style.color = 'red'; }
});