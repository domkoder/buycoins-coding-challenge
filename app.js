const menuBtn = document.getElementById("menu-btn");
const mobilNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", function (event) {
	event.preventDefault();
	if (mobilNav.classList.contains("hide")) {
		mobilNav.classList.remove("hide");
		mobilNav.classList.add("show");
	} else if (mobilNav.classList.contains("show")) {
		mobilNav.classList.remove("show");
		mobilNav.classList.add("hide");
	}
});

// window.
