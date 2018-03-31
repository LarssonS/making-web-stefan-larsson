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

//AIzaSyDm-vQBC_7g_HRGBkLOOk4fkJqSa6UJgpc api key

function initMap() {
	var office = { lat: 59.33066993230202, lng: 18.06765197952768 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: office
	});
	var marker = new google.maps.Marker({
		position: office,
		map: map
	});
}