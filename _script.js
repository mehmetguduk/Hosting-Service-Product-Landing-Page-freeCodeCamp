const main_main = document.querySelector("#main");
const footer_footer = document.querySelector("#footer");
const h1_header_title = document.querySelector("#header-title");
const h3_header_subtitle = document.querySelector("#header-subtitle");
const img_header_img = document.querySelector("#header-img");
const button_navbar_toggle = document.querySelector("#navbar-toggle");

function outCLICK() {
    if (button_navbar_toggle.getAttribute("aria-expanded") === "false") {
        return
    }
    else {
        button_navbar_toggle.setAttribute("aria-expanded", "false");
    }
}

button_navbar_toggle.addEventListener("click", function () {
    action = !(button_navbar_toggle.getAttribute("aria-expanded") === "true")
    button_navbar_toggle.setAttribute("aria-expanded", action);
});

h1_header_title.addEventListener("click", function () { window.scrollTo(0, 0); })
h3_header_subtitle.addEventListener("click", function () { window.scrollTo(0, 0); })
img_header_img.addEventListener("click", function () { window.scrollTo(0, 0); })

main_main.addEventListener("click", outCLICK);
footer_footer.addEventListener("click", outCLICK);