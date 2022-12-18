let btn_like1 = document.getElementById('btn_like1');
let btn_dislike1 = document.getElementById('btn_dislike1');

let puntaje1 = document.getElementById('numer1');
let result1 = 0;

let btn_like2 = document.getElementById('btn_like2');
let btn_dislike2 = document.getElementById('btn_dislike2');

let puntaje2 = document.getElementById('numer2');
let result2 = 0;

let btn_like3 = document.getElementById('btn_like3');
let btn_dislike3 = document.getElementById('btn_dislike3');

let puntaje3 = document.getElementById('numer3');
let result3 = 0;

btn_like1.addEventListener('click', () => {
    result1++;
    puntaje1.innerText = result1;
});

btn_dislike1.addEventListener('click', () => {
    result1--;
    puntaje1.innerText = result1;
});

btn_like2.addEventListener('click', () => {
    result2++;
    puntaje2.innerText = result2;
});

btn_dislike2.addEventListener('click', () => {
    result2--;
    puntaje2.innerText = result2;
});

btn_like3.addEventListener('click', () => {
    result3++;
    puntaje3.innerText = result3;
});

btn_dislike3.addEventListener('click', () => {
    result3--;
    puntaje3.innerText = result3;
});