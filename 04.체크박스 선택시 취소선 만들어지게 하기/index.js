// 여기에 코드를 작성해주세요
let mission = document.querySelector('#mission');
const spanArray = document.querySelectorAll('span');
const checkboxArray = document.querySelectorAll('input');
for (let i = 0; i < 3; i++) {
    checkboxArray[i].addEventListener('click', () => {
        if (checkboxArray[i].checked === true) {
            spanArray[i].style.textDecorationLine = 'line-through';
        }
        else {
            spanArray[i].style.textDecorationLine = '';
        }
    });
}
