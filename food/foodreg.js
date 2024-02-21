const text=document.querySelector(".sec-text");
const textLoad=()=>{
    setTimeout(() => {
        text.textContent="Food"
        
    }, 0);
    setTimeout(() => {
        text.textContent="Provisions"
        
    }, 4000);
    setTimeout(() => {
        text.textContent="Edibles"
        
    }, 8000);
}
textLoad();
setInterval(textLoad,12000);