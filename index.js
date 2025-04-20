const select = document.querySelector("#project-select");
const cpp = document.querySelector("#Cpp");
const web_dev = document.querySelectorAll("#web-dev");
const menu_icon = document.querySelector(".menu-div");
const menu_div = document.querySelector(".menu-icons-container");
const menu_cross_btn = document.querySelector(".menu-cross-btn-div");
const form_submit = document.querySelector(".contact-inputs");

//Event listener for select in projects to show user desired projects
select.addEventListener("change",() => {
    let value = select.value;
    if (value === "C++") { 
        web_dev.forEach((web) => {
            web.classList.add("hidden");
        })
    }
    else if (value === "frontend") {
        cpp.classList.add("hidden");
        web_dev.forEach((web) => {
            web.classList.remove("hidden");
        })
    }
    else {
        cpp.classList.remove("hidden");
        web_dev.forEach((web) => {
            web.classList.remove("hidden");
        })
    }
})

//Event listener for menu button in smaller devices
menu_icon.addEventListener("click", () => {
    menu_div.removeAttribute("id");
})

//Event listener for closing button(cross) of menu in smaller devices
menu_cross_btn.addEventListener("click", () => {
    menu_div.setAttribute("id","hide");
})

//Connection with EventJs 
form_submit.addEventListener("submit", (event) => {
    event.preventDefault();
    SendMail();
})

function SendMail() {
    let parms = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        message : document.querySelector("#message").value
    }
    emailjs.send("service_iodbgyw","template_xio7tmw",parms).
    then(alert("Message Sent!"));
}