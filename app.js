let introEnd = false;

setTimeout(() => introEnd = true, 2000);

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(introEnd) {
        if(window.scrollY > 0) {
            console.log("BRUH")
            header.classList.add("top");
        } else {
            header.classList.remove("top");
        }
    } else {
        window.scroll({top: 0});
    }
});