const textHtml = document.getElementById("text");
const ValueSpeed = document.getElementById("speed");
const ContentInput = document.getElementById("textInput");
let textContent = ContentInput.value;
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
ContentInput.addEventListener("input", (e) => textContent = e.target.value)
ValueSpeed.addEventListener("input", (e) => speed = 300 / e.target.value)