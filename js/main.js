const inputNumber1 = document.querySelector('#number1');
const inputNumber2 = document.querySelector('#number2');
const resultBox = document.querySelector('#result-box');
const btnPlus = document.querySelector('#btn-plus');
const btnTimes = document.querySelector('#btn-times');
const btnClear = document.querySelector('#btn-clear');

function sum() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;

    resultBox.textContent = Number(n1) + Number(n2);
}

function multiply() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;

    resultBox.textContent = Number(n1) * Number(n2);
}

function clearForm() {
    inputNumber1.value = "";
    inputNumber2.value = "";
    resultBox.textContent = "0";
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');
}

btnPlus.addEventListener('click', sum);
btnTimes.addEventListener('click', multiply);
btnClear.addEventListener('click', clearForm);