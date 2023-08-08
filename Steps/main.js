//Obtenemos los steps
const steps = document.querySelectorAll(".step");
//Obtenemos el bar
const bar = document.getElementById("bar");
//Obtenemos los botones
const prev = document.getElementById("prev"),
      next = document.getElementById("next");
let currentStep = 0;
//Escuchamos los clicks
next.addEventListener("click", ()=>{
    currentStep++;
    prev.disabled = false;
    if (currentStep<steps.length){ 
        steps[currentStep].classList.add("active");
        updateProgress();
        if (currentStep>=steps.length-1)
            next.disabled = true;
    };
})
prev.addEventListener("click", ()=>{
    next.disabled = false;
    if (currentStep>0){ 
        steps[currentStep].classList.remove("active");
        currentStep--;
        updateProgress();
        if (currentStep===0)
            prev.disabled = true;
    }
})

function updateProgress(){
    const progress = (currentStep) / (steps.length-1)*100;
    bar.style.width = progress +"%";
}