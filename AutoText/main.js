const textHtml = document.getElementById("text");
const ValueSpeed = document.getElementById("speed");
const textContent = "Soy un puto Crack!!";
let idx = 1;
let speed = 300 / ValueSpeed.value;

writeText();

function writeText(){
    textHtml.innerText= textContent.slice(0, idx);
    idx++;
    if (idx>textContent.length){
        idx = 1;
    }
    setTimeout(writeText, speed);
}

ValueSpeed.addEventListener("input", (e) => speed = 300 / e.target.value)