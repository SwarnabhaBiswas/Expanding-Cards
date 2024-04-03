const panels=document.querySelectorAll(".panel");

function panelRemove(){
    panels.forEach(panel => {
            panel.classList.remove("active");
    })
    }

panels.forEach(panel => {
    panel.addEventListener("click", ()=>{
    panelRemove();
    panel.classList.add("active");
})
})