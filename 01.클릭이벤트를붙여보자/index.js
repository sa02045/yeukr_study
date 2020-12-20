let container = document.querySelector('#container');
const button = container.querySelector('button');
const number = container.querySelector('span');

button.addEventListener('click',function(){
    count = Number(number.textContent);
    count = count + 1;
    number.textContent = count;
});
