window.addEventListener("scroll", function(){
    let nav = document.querySelector("fixBar");
    fixBar.classList.toggle("nav-top", window.scrollY > 0);
})
