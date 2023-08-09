const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

RunAnimation();
function RunAnimation(){
    nums.forEach((num, idx)=>{
        const NumToLast = nums.length-1;

        num.addEventListener('animationend',(e)=>{
            if (e.animationName==="goIn" && NumToLast!==idx){
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName ==="goOut" && NumToLast!==idx){
                num.nextElementSibling.classList.add("in");
            }else{
                counter.classList.add("hide");
                finalMessage.classList.add("show");
            }
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
})