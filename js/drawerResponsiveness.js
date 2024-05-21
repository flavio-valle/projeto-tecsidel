function handleNavMenu() {
		document.getElementById('drawer-menu').style.visibility='visible';
}

const drawerMenuTarget = document.getElementById("drawer-menu");
const navMenuTarget = document.getElementById("nav-menu");
let isWindowLarge = window.innerWidth > 1000

function setDrawerMenu(visibleOrHidden) {
	drawerMenuTarget.style.visibility = visibleOrHidden;
}

drawerMenuTarget.addEventListener("mouseleave", (e) => {
	if(!isWindowLarge) setDrawerMenu('hidden');
});

navMenuTarget.addEventListener("mouseenter", (e) => {
	if(!isWindowLarge) setDrawerMenu('visible');
});

addEventListener("resize", (event) => {
	isWindowLarge = window.innerWidth > 1000
	if(isWindowLarge) setDrawerMenu('visible');
});

function handleMainContainer() {
	if(!isWindowLarge) setDrawerMenu('hidden')
}