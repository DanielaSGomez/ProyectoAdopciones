const nav = document.querySelector("#navheader");
const openMenu = document.querySelector("#navbarToggle");
const closeMenu = document.querySelector("#closenav");

openMenu.addEventListener("click", () => {
    nav.classList.add("visible");
});

closeMenu.addEventListener("click", () =>{
    nav.classList.remove("visible");
});
