let open = document.querySelector("#open-menu");
let close = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");

open.addEventListener("click", ()=> {
    menu.classList.remove("disabled");
})

close.addEventListener("click", ()=> {
    menu.classList.add("disabled");
})