// 여기에 코드를 작성해주세요
const container = document.getElementById('container');
const observer = new MutationObserver(fire);
const config = {childList:true};

observer.observe(container, config);