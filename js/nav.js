const primaryNav = document.querySelector('.nav-bar');
const navToggle = document.querySelector('.toggle');

navToggle.addEventListener('click',() => {
    const vis = primaryNav.getAttribute('data-visible')
    if (vis === "false") {
        primaryNav.setAttribute('data-visible','true');
        navToggle.setAttribute('aria-selected','true')
    } else {
        primaryNav.setAttribute('data-visible','false')
        navToggle.setAttribute('aria-selected','false')
    }
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh',`${vh}px`);
document.documentElement.style.setProperty('--vw',`${vw}px`);