const liArray = document.querySelectorAll('li');
liArray.forEach((li) => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const span = li.querySelector('span');
    checkbox.addEventListener('change', () => {
        span.style.textDecorationLine = checkbox.checked ? 'line-through' : 'none';
    })
});