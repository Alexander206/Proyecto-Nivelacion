let btn_inscription1 = document.getElementById('send1');
let btn_inscription2 = document.getElementById('send2');
let btn_inscription3 = document.getElementById('send3');

let cupos1 = document.getElementById('cupos1');
let cuposRestantes1 = 20;
let cupos2 = document.getElementById('cupos2');
let cuposRestantes2 = 20;
let cupos3 = document.getElementById('cupos3');
let cuposRestantes3 = 20;

btn_inscription1.addEventListener('click', () => {
    cuposRestantes1--;
    cupos1.innerHTML = cuposRestantes1;
});

btn_inscription2.addEventListener('click', () => {
    cuposRestantes2--;
    cupos2.innerHTML = cuposRestantes2;
});

btn_inscription3.addEventListener('click', () => {
    cuposRestantes3--;
    cupos3.innerHTML = cuposRestantes3;
});
