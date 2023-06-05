const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};