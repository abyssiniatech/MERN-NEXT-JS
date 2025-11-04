const bodyEl= document.querySelector("body");
const img=document.querySelector("img");
img.addEventListener("click", ()=>{
    img.style.display="none";
    console.log("surafel image is click here");
})
console.log(bodyEl)
bodyEl.addEventListener("mousemove", ()=>{
    console.log("mouse move here")
})
