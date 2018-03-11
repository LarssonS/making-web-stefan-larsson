var navBar = document.getElementById("navBar");
var toggleNav = document.getElementById("toggleNav");

toggleNav.addEventListener("click", function(){
	if (navBar.classList.contains("nav-bar-open") == false) {
		navBar.classList.add("nav-bar-open");
	}
	else {
		navBar.classList.remove("nav-bar-open");
	}
})