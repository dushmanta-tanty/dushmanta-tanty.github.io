
const links = document.querySelectorAll(".alternate-style");
      totalLinks = links.length;

function setActiveStyle(color){
    for(i =0; i<totalLinks; i++){
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// body skin color change
const bodySkins = document.querySelectorAll(".body-skin");
      totalbodySkin = bodySkins.length;
 
for(i=0; i<totalbodySkin; i++){
    bodySkins[i].addEventListener("change", function(){
        if (this.value === "dark") {
            document.body.className = "dark";
        } else {
            document.body.className = "";
        }
    })
}      