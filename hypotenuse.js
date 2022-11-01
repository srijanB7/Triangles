const baseHolder = document.querySelector('#base');
const heightHolder = document.querySelector('#height');
const button = document.querySelector('#btn');
const result = document.querySelector('#resultText');

button.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    let base = baseHolder.value;
    let height = heightHolder.value;
    let hypotenuse = Math.sqrt(base*base + height*height);
    result.textContent = `Hypotenuse is ${hypotenuse}`;
}