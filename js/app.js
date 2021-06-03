const github = new Github();
const ui = new UI();

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

const navbar = document.getElementById("navbar");
const hide = document.getElementById("hide");
const stickyNav = document.getElementById("sticky-nav");
const sticky = navbar ? navbar.offsetTop : "";

window.onscroll = function () {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		hide.classList.add("hide");
		stickyNav.classList.add("center");
	}

	if (window.pageYOffset <= sticky) {
		navbar.classList.remove("sticky");
		hide.classList.remove("hide");
		stickyNav.classList.remove("center");
	}
};

const searchUserDesktop = document.getElementById("searchUserDesktop");
const searchUserMobile = document.getElementById("searchUserMobile");
const main = document.getElementById("main");

searchUserMobile.addEventListener("keyup", (e) => {
	const username = e.target.value;

	if (username !== "") {
		github.getUser(username).then((data) => {
			if (data === null) {
				// show alert
				console.log("null");
			} else {
				const { repositories } = data;
				ui.showProfile(data);
				ui.showRepositories(repositories);
				main.classList.remove("hide");
				// console.log("don");
			}
		});
	} else {
		// clear profile
	}
});

searchUserDesktop.addEventListener("keyup", (e) => {
	const username = e.target.value;

	if (username !== "") {
		github.getUser(username).then((data) => {
			if (data === null) {
				// show alert
				console.log("null");
			} else {
				const { repositories } = data;
				ui.showProfile(data);
				ui.showRepositories(repositories);
				main.classList.remove("hide");
			}
		});
	} else {
		// clear profile
	}
});

searchUserMobile.addEventListener("keyup", (e) => {
	const username = e.target.value;

	if (username !== "") {
		github.getUser(username).then((data) => {
			if (data === null) {
				// show alert
				console.log("null");
			} else {
				const { repositories } = data;
				ui.showProfile(data);
				ui.showRepositories(repositories);
			}
		});
	} else {
		// clear profile
	}
});
