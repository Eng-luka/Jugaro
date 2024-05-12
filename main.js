let btn = document.getElementById('btn');
let Support = document.getElementById('Support');
let nav = document.getElementById('nav');
let dialog =document.getElementById('dialog');
let blurer = document.getElementById('blurer');

// Btn Scroll 
window.onscroll = function(){
    if(scrollY >= 600)
    {
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}
btn.onclick =function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
}

// Remove Support Div
window.onscroll = function(){
    if(scrollY >= 50)
    {
        Support.style.display = "none";
    }
    else{
        Support.style.display = "block";
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


