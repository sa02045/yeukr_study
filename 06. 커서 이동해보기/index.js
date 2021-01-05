// 여기에 코드를 작성해주세요
const btns = document.querySelectorAll('button');
const liArray = document.querySelectorAll('li');
let curFocus = 0;
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < 7; i++) {
            if (liArray[i].className === "focus") {
                curFocus = i;
            }
        }

        if (btn.id == "prev") {
            if (curFocus - 1 == -1) {
                liArray[6].className = "focus";
            }
            else {
                liArray[curFocus - 1].className = "focus";
            }
        }
        else {
            liArray[(curFocus + 1) % 7].className = "focus";
        }
        liArray[curFocus].classList.remove('focus');
    });
});