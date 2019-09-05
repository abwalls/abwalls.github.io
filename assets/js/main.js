window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }


document.getElementById("about-icon").addEventListener("click", function(){
    document.querySelector("#about").style.display = "block"
})

document.getElementById("about-header-close").addEventListener("click", function(){
    document.querySelector("#about").style.display = "none"
})


document.getElementById("contact-icon").addEventListener("click", function(){
    document.querySelector("#contact").style.display = "block"
    document.querySelector("#about").style.display = "none"
})

document.getElementById("about-icon").addEventListener("click", function(){
    document.querySelector("#contact").style.display = "none"
})