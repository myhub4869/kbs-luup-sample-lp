let message: string = "Hello World!"
let header = document.getElementById("main_header")!
let mainVisual: any = document.getElementById("main_visual")!

window.onscroll = () => {
    if (
        mainVisual.offsetHeight <
        window.scrollY + header.offsetTop
    ) {
        header.classList.add("is-scroll")
    } else {
        header.classList.remove("is-scroll")
    }
};
