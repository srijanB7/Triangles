const angle1Holder = document.querySelector('#angle1');
const angle2Holder = document.querySelector('#angle2');
const angle3Holder = document.querySelector('#angle3');
const button = document.querySelector('#checkBtn');
const result = document.querySelector('#answer');

button.addEventListener('click', checkTriangle);

function checkTriangle() {
    let angle1 = angle1Holder.value;
    let angle2 = angle2Holder.value;
    let angle3 = angle3Holder.value;
    let msg = ""
    if(angle1 + angle2 + angle3 === 180) {
        msg = "yes it's a triangle";
    } else {
        msg = "not it's not a triangle";
    }
    result.textContent = msg;
}
