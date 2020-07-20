function parallaxBg(element, factor = 4) {
	document.addEventListener("scroll", () => {
		let h = document.documentElement,
			b = document.body,
			st = "scrollTop",
			sh = "scrollHeight";
		let percentage = Math.round(
			((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
		);
		element.style.backgroundPositionY = percentage / factor + "%";
	});
}

let bg = document.getElementById("main-image");
parallaxBg(bg, 1);

//////////////////////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
	myFunction();
};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

function scrollShow(element, distance = 0, markShown = true) {
	//Function to check if the element is shown, returning true if it is
	function execute() {
		//Getting the position data from the element such as bottom, top, width etc
		let rect = element.getBoundingClientRect();

		//
		let viewHeight =
			Math.max(document.documentElement.clientHeight, window.innerHeight) -
			distance;

		//If the bottom position of the element is not bigger than 0 OR the top position minus
		//the browser view height is not bigger or equal to 0, then the object will be visible
		if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
			return true;
		} else {
			return false;
		}
	}

	// With markShown on, the element will be marked as "shown" in its classlist
	// with this the execute() function will ever only trigger once for an element
	if (markShown == true) {
		if (!element.classList.contains("_scrollShown")) {
			element.classList.add("_scrollShown");
			return execute();
		}
	}

	//Will be true if the element is visible or false if it is not visible
	return execute();
}

// Elements
let mainText = document.getElementById("main-text");
let phoneImage = document.getElementById("main-phone-image");
let squares = document.getElementsByClassName("square");
let aboutText = document.getElementById("about-text");
let imgSection = document.querySelectorAll(".img-section .col");

function displayElem(element) {
	element.style.opacity = "1";
	element.style.transform = "none";
}

// First check
if (scrollShow(mainText, 100)) {
	displayElem(mainText);
}

if (scrollShow(phoneImage, 100)) {
	displayElem(phoneImage);
}

// squares
for (let i = 0; i < squares.length; i++) {
	const element = squares[i];

	// first check
	if (scrollShow(element, 100)) {
		displayElem(element);
	}

	// check on scroll
	document.addEventListener("scroll", () => {
		if (scrollShow(element, 100)) {
			displayElem(element);
		}
	});
}

// About text
document.addEventListener("scroll", () => {
	if (scrollShow(aboutText, 100)) {
		displayElem(aboutText);
	}
});

// Img sections
for (let i = 0; i < imgSection.length; i++) {
	const element = imgSection[i];
	document.addEventListener("scroll", () => {
		if (scrollShow(element, 100)) {
			displayElem(element);
		}
	});
}
