// Get X position of element
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

// Function to display element
function showElement(elem, transform) {
	elem.style.visibility = "visible";
	elem.style.opacity = 1;

	if (transform) {
		elem.style.transform = transform;
	}
}

// Function to hide element
function hideElement(elem, transform) {
	elem.style.opacity = 0;
	elem.style.transform = transform;
	elem.style.visibility = "hidden";
}

// function to check if element is visible
function scrollShow(element, distance) {
	if (!distance) {
		distance = 0;
	}
	//Getting the position data from the element such as bottom, top, width etc
	var rect = element.getBoundingClientRect();
	var viewHeight =
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
