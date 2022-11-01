const baseHolder = document.querySelector('#base');
const heightHolder = document.querySelector('#height');
const button = document.querySelector('#btn');
const result = document.querySelector('#resultText');

button.addEventListener('click', calculateArea);

function calculateArea() {
    let base = baseHolder.value;
    let height = heightHolder.value;
    let area = 0.5*base*height;
    result.textContent = `Area is ${area}`;
}