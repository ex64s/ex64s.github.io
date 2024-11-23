// Main Navigation

const main_nav = document.getElementsByClassName("main-nav")
const nav_open = document.getElementsByClassName("nav-open")

main_nav[0].style.display = "none"
nav_open[0].addEventListener("click", () => {
    main_nav[0].style.display = "block"
    // If its already open, close it
    if (main_nav[0].style.display == "block") {
        main_nav[0].style.display = "none"
    }
})