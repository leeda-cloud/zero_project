// do something!
const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const body = document.querySelector("body");


/* 수정 전 
window.addEventListener('load', (event) => {
	body.classList.remove('preload');
	body.style.visibility = "visible";
});
*/

/* 수정 후 */
document.addEventListener('DOMContentLoaded', (event) => {
	body.style.visibility = "visible";
	//
});

if (localStorage.getItem('isVisible') === 'true') {
	nav.classList.toggle('active');
}

toggle.addEventListener("click", () => {
	body.classList.remove('preload');
	nav.classList.toggle('active');
	localStorage.setItem('isVisible', nav.classList.contains('active'));
})


