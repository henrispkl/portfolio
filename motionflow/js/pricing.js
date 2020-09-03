// setting the navbar to white
_WHITENAVBAR = true;

// Elements
var qPopupBtn = document.getElementsByClassName("q-popup");
var h1Title = document.getElementById("h1-title");
var priceTypes = document.getElementById("price-types");
var bg = document.getElementById("pricing-bg");

// fade in elements
showElement(h1Title, "none");
showElement(priceTypes, "none");
showElement(bg);

// help mini popup
function helpPop(element, idName) {
	var pop = document.createElement("div");
	var triangle = document.createElement("div");
	var ptitle = element.getAttribute("ptitle");
	var pdesc = element.getAttribute("pdesc");

	pop.classList = "help-pop";
	pop.id = idName;
	pop.innerHTML = "<h3>" + ptitle + "</h3>" + "<p>" + pdesc + "</p>";

	triangle.classList = "pop-triangle";
	pop.appendChild(triangle);

	document.body.appendChild(pop);
}

// Position all help pops in the page
function positionPops() {
	var _BW = getBrowserWidth();
	var pops = document.getElementsByClassName("help-pop");
	var triangles = document.getElementsByClassName("pop-triangle");

	for (var i = 0; i < qPopupBtn.length; i++) {
		var btn = qPopupBtn[i];
		var pop = pops[i];
		var triangle = triangles[i];
		var pos = offset(btn);

		pop.style.top = pos.top + "px";
		triangle.style.left = "50%";

		if (_BW > 576) {
			pop.style.left = pos.left + 10 + "px";
		} else {
			pop.style.left = "50%";

			var btnX = offset(btn);
			triangle.style.left = btnX.left - 18 + "px";
		}
	}
}

// position pops when resizing
window.onresize = function() {
	positionNavLinks();
	positionPops();
};

// display pop after hovering on icon
for (var i = 0; i < qPopupBtn.length; i++) {
	function a() {
		var btn = qPopupBtn[i];
		btn.classList.add("popb-" + i);

		helpPop(btn, "pop-" + i);
		var popId = "pop-" + i;
		var popE = document.getElementById(popId);

		// fade in
		btn.addEventListener("mouseover", function() {
			showElement(popE, "translateX(-50%) translateY(-130%)");
		});

		// fade out
		btn.addEventListener("mouseout", function() {
			hideElement(popE, "translateX(-50%) translateY(-125%)");
		});
	}

	// it's necessary to envelop it in a function to prevent bugs
	a();
}

// position pops in the page
positionPops();

// background
for (var i = 0; i < 100; i++) {
	var elem = document.createElement("div");

	// generating some random numbers
	var randType = Math.floor(Math.random() * 2 + 1);
	var randOpacity = (Math.random() * (0.9 - 0.2) + 0.1).toFixed(2);
	var randWidth = 24 * (Math.floor(Math.random() * 6) + 1);

	if (randType == 1) {
		elem.classList = "circle";
	} else if (randType == 2) {
		elem.classList = "bar";
	}

	elem.style.opacity = randOpacity;
	elem.style.width = randWidth + "px";

	bg.appendChild(elem);
}
