let container = document.querySelector('#container');
const button = container.querySelector('button');
const span = container.querySelector('span');

button.addEventListener('click',function(){
    let count = parseInt(span.innerText);
    span.textContent = String(++count);
});
