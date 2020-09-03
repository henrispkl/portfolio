// Navbar functions
var navbar = document.getElementById("navbar");
var logoImg = document.getElementById("logo-img");
var navItems = document.getElementsByClassName("nav-item");
var listBg = document.getElementById("nav-list-bg");
var navMenu = document.getElementById("nav-menu");
var navArrow = document.getElementsByClassName("nav-arrow");
var navItemName = document.getElementsByClassName("nav-item-name");
var navLinks = document.getElementById("nav-links");
var navButton = document.getElementById("nav-button");
var navContainer = document.getElementById("navbar-container");
var navSubmenus = document.getElementsByClassName("nav-submenu");

// Value to define if navbar is white or not
var _WHITENAVBAR = false;

// Get browser width
function getBrowserWidth() {
	return document.documentElement.clientWidth;
}

// function to position the nav links
function positionNavLinks() {
	if (getBrowserWidth() < 992) {
		navMenu.appendChild(navLinks);

		// remove transform from all submenus
		for (var i = 0; i < navSubmenus.length; i++) {
			var submenu = navSubmenus[i];
			submenu.style.transform = "none";
		}
	} else if (getBrowserWidth() >= 992) {
		navContainer.appendChild(navLinks);

		// set default transform for all submenus
		for (var i = 0; i < navSubmenus.length; i++) {
			var submenu = navSubmenus[i];
			submenu.style.transform = "translateX(-50%) translateY(25%)";
		}
	}
}

positionNavLinks();

// Function to display menu always on desktop
function showNavMenuDesktop() {
	if (getBrowserWidth() >= 992) {
		showElement(navMenu, "none");
	} else if (getBrowserWidth() < 992) {
		hideElement(navMenu, "translateX(100%)");
	}
}

// function to change navbar color to default on scroll when it's white
function whiteNavbar() {
	if (window.pageYOffset > navbar.offsetTop) {
		// after scrolling
		if (_WHITENAVBAR == true) {
			navbar.classList.add("default");
			navbar.classList.remove("white");

			logoImg.src = "assets/img/nav_logo.png";
		} else if (_WHITENAVBAR == false) {
			navbar.classList.add("default");
		}
	} else {
		// on top
		if (_WHITENAVBAR == true) {
			navbar.classList.remove("default");
			navbar.classList.add("white");

			logoImg.src = "assets/img/nav_logo-white.png";
		} else if (_WHITENAVBAR == false) {
			navbar.classList.remove("default");
		}
	}
}

whiteNavbar();

// Check logo img
if (navbar.classList.contains("white")) {
	logoImg.src = "assets/img/nav_logo-white.png";
}

window.onresize = function() {
	positionNavLinks();
	showNavMenuDesktop();
};

window.onscroll = function() {
	whiteNavbar();
};

// navbar mobile
for (var i = 0; i < navItemName.length; i++) {
	function a() {
		var navMenuName = navItemName[i];
		var arrow = navMenuName.getElementsByClassName("nav-arrow")[0];
		var submenu = navSubmenus[i];

		navMenuName.addEventListener("click", function() {
			if (getBrowserWidth() < 992) {
				if (submenu.classList.contains("visible")) {
					// if the submenu is open
					navMenuName.classList.remove("active");
					submenu.classList.remove("visible");
					arrow.style.transform = "rotate(0deg)";

					// hide submenu
					hideElement(submenu);
					submenu.style.height = "0px";
				} else {
					// if the submenu is closed
					navMenuName.classList.add("active");
					submenu.classList.add("visible");
					arrow.style.transform = "rotate(180deg)";

					// get real height of submenu and make it visible
					var h = submenu.children[0].offsetHeight;
					showElement(submenu);
					submenu.style.height = h + "px";
				}
			}
		});
	}

	// it's necessary to envelop it in a function to prevent bugs
	a();
}

// button to show the menu in mobile
navButton.addEventListener("click", function() {
	if (navButton.classList.contains("active")) {
		// if the menu is open
		navButton.classList.remove("active");

		hideElement(navMenu, "translateX(100%)");

		// add white navbar if in top of page and if _WHITENAVBAR is true
		if (!(window.pageYOffset > navbar.offsetTop) && _WHITENAVBAR == true) {
			navbar.classList.remove("default");
			navbar.classList.add("white");

			logoImg.src = "assets/img/nav_logo-white.png";
		}
	} else {
		// if the menu is closed
		navButton.classList.add("active");

		showElement(navMenu, "none");

		// remove white navbar
		if (navbar.classList.contains("white")) {
			navbar.classList.add("default");
			navbar.classList.remove("white");

			logoImg.src = "assets/img/nav_logo.png";
		}
	}
});

// Navbar desktop
for (var i = 0; i < navItems.length; i++) {
	function a() {
		var navItem = navItems[i];
		var submenu = navSubmenus[i];

		navItem.addEventListener("mouseenter", function() {
			if (getBrowserWidth() >= 992) {
				showElement(submenu, "translateX(-50%)");
				submenu.style.height = "initial";
				showElement(listBg, "translateY(-25%)");
				listBg.style.pointerEvents = "all";

				positionListBg(submenu);
			}
		});

		navItem.addEventListener("mouseleave", function(e) {
			if (getBrowserWidth() >= 992) {
				hideElement(submenu, "translateX(-50%) translateY(25%)");
				submenu.style.height = "0px";

				if (e.relatedTarget && e.relatedTarget.parentNode != navMenu) {
					hideElement(listBg, "translateY(25%)");
					listBg.style.pointerEvents = "none";
				} else if (!e.relatedTarget) {
					hideElement(listBg, "translateY(25%)");
					listBg.style.pointerEvents = "none";
				}
			}
		});
	}

	// it's necessary to envelop it in a function to prevent bugs
	a();
}

// Function to position the navbar list bg
function positionListBg(elem) {
	var w = elem.offsetWidth;
	var h = elem.offsetHeight;
	var rect = elem.getBoundingClientRect();

	listBg.style.width = w + "px";
	listBg.style.height = h + "px";
	listBg.style.left = rect.left + "px";
	listBg.style.top = rect.top + "px";
}
