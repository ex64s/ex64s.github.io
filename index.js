var github_Button = document.getElementsByClassName("github_link")
var footer = document.getElementsByClassName("footer")

github_Button.addEventListener("click", () => {
    window.open("https://github.com/", "_blank")
})

footer.addEventListener("click", () => {
    window.open("https://luau.org/", "_blank")
})