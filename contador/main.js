const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
const stopBtn = document.querySelector('#stop')
let timer;

RunAnimation();

function RunAnimation(){

    const NumToLast = nums.length-1;
    /* console.time(); */
    nums.forEach((num, idx)=>{   
        num.addEventListener('animationend',(e)=>{
            if (e.animationName==="goIn" && NumToLast!==idx){
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName ==="goOut" && NumToLast!==idx){
                num.nextElementSibling.classList.add("in");
            }else{
                /* counter.classList.add("hide");
                finalMessage.classList.add("show");
                console.timeEnd(); */ 
                /* Console.timeEnd, me ayudan a ver cuanto tarda en ejecutarse la funcion*/
            };
        })
    });
}                                        

function ResetDoom(){
    counter.classList.remove("hide");
    finalMessage.classList.remove("show");
    nums.forEach((num)=>num.classList.value = "");
    nums[0].classList.add("in");
}

replay.addEventListener("click", ()=>{
        ResetDoom();
        RunAnimation();
        timer = setInterval(()=>{
        ResetDoom();
        RunAnimation();
    }, 3525.629150390625)
})
stopBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    counter.classList.add("hide");
    finalMessage.classList.add("show")
})