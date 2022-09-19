const primaryNav = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".toggle");
// navToggle.style.backgroundImage = url("../img/icon_close.jpg");

navToggle.addEventListener("click", () => {
	const vis = primaryNav.getAttribute("data-visible");
	if (vis === "false") {
		primaryNav.setAttribute("data-visible", "true");
		navToggle.style.backgroundImage = 'url("../img/icon_close.jpg")';
	} else {
		primaryNav.setAttribute("data-visible", "false");
		navToggle.style.backgroundImage = 'url("../img/icon_menu.png")';
	}
});

const slider = document.querySelector(".project-boxes");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
	slider.style.cursor = "grabbing";
	slider.style.userSelect = "none";
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
	isDown = false;
	slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
	isDown = false;
	slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = x - startX;
	slider.scrollLeft = scrollLeft - walk;
});
