let container = document.querySelector('#container');
let button = document.querySelector('#source button');
let text = document.querySelector('#source textarea');

function IsJson(str) {
    try {
        let json = JSON.parse(str);
        return (typeof json === 'object');
    }
    catch (error) {
        return false;
    }
}

button.addEventListener('click', () => {
    let testValue = text.value;
    if (IsJson(testValue)) {
        container.innerHTML = "옳음";
    }
    else {
        container.innerHTML = "옳지않음";
    }
});