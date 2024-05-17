let btn = document.getElementById('btn');
let Support = document.getElementById('Support');
let nav = document.getElementById('nav');
let dialog =document.getElementById('dialog');
let blurer = document.getElementById('blurer');
let overlay = document.getElementById('overlay');

// Btn Scroll 
function scrollToTop()
{
    window.scrollTo(0 , 0);
}

// Remove Support Div
window.onscroll = function(){
    if(scrollY >= 50)
    {
        Support.style.display = "none";
        overlay.style.opacity = "1.3";
    }
    else
    {
        Support.style.display = "block";
        overlay.style.opacity = "0.8";
    }
}

// Join us btn
function openDialog() {
    dialog.style.display ="flex";
    blurer.style.display ="block";
}
function closeDialog() {
    dialog.style.display="none";
    blurer.style.display="none";
}




















for(const i of pop){
    i.addEventListener("click", function(){
    box.classList.toggle('active');
    overlay.classList.toggle('active');
}
)};


