// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
const inputs = document.querySelectorAll('#source input');

document.querySelector('#source > button').addEventListener('click', e => {
    let obj = {};
    let animal = {};
    let fruit = {};
    let car = {};
    inputs.forEach((input) => {
        let parent = input.attributes.parent.value;
        let name = input.name;
        if (input.value === '0' || input.value === undefined) {

        }
        else if (input.value) {
            if (parent === 'animal') {
                animal[name] = parseInt(input.value);
                obj[parent] = animal;
            }
            else if (parent === 'car') {
                car[name] = parseInt(input.value);
                obj[parent] = car;
            }
            else if (parent === 'fruit') {
                fruit[name] = parseInt(input.value);
                obj[parent] = fruit;
            }
        }
        else console.log(parent);
    });
    container.innerHTML = JSON.stringify(obj);
});