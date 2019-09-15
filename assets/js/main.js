window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }


document.getElementById("about-icon").addEventListener("click", function(){
    document.querySelector("#about").style.display = "block";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,.3)";
})

document.getElementById("about-header-close").addEventListener("click", function(){
    document.querySelector("#about").style.display = "none";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0)";
})


document.getElementById("contact-icon").addEventListener("click", function(){
    document.querySelector("#contact").style.display = "block";
    document.querySelector("#about").style.display = "none";
    document.getElementById("overlay").style.backgroundColor = "rgba(255,255,255,.3)";
})

document.getElementById("about-icon").addEventListener("click", function(){
    document.querySelector("#contact").style.display = "none";
})