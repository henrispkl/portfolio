// Tabs elements
var tabButtons = document.getElementsByClassName("tab-button");
var allTabs = document.getElementsByClassName("tab");
var tabBody = document.getElementById("tab-body");
var tabsContainer = document.getElementById("tabs");
var statBars = document.getElementsByClassName("stat-bar");
var statDescs = document.getElementsByClassName("stat-desc");
var squareCards = document.getElementsByClassName("square-card");
var solutionBanner = document.getElementById("solution-banner");

function positionTabBody() {
	if (getBrowserWidth() >= 768) {
		tabsContainer.appendChild(tabBody);
	} else if (getBrowserWidth() < 768) {
		for (var i = 0; i < tabButtons.length; i++) {
			var button = tabButtons[i];
			if (button.classList.contains("active")) {
				button.appendChild(tabBody);
			}
		}
	}
}

positionTabBody();

// elements to show
var statsShown = false;
var cadsShown = false;

solutionBanner.style.opacity = "1";

window.onscroll = function() {
	whiteNavbar();
	positionTabBody();

	if (scrollShow(statBars[0], 100) && statsShown == false) {
		statsShown = true;
		for (var i = 0; i < statBars.length; i++) {
			function a() {
				var bar = statBars[i];
				setTimeout(function() {
					bar.classList.remove("stat-bar-0");
				}, i * 150);
			}

			a();
		}

		for (var i = 0; i < statDescs.length; i++) {
			function a() {
				var stat = statDescs[i];
				setTimeout(function() {
					showElement(stat);
				}, i * 150);
			}

			a();
		}
	}

	if (scrollShow(squareCards[0], 100) && cadsShown == false) {
		cadsShown = true;
		for (var i = 0; i < squareCards.length; i++) {
			function a() {
				var card = squareCards[i];
				var cardChildren = card.children;

				setTimeout(function() {
					for (var b = 0; b < cardChildren.length; b++) {
						function z() {
							var c = cardChildren[b];
							setTimeout(function() {
								showElement(c, "none");
							}, b * 150);
						}

						z();
					}
				}, i * 150);
			}

			a();
		}
	}
};

for (var i = 0; i < tabButtons.length; i++) {
	function a() {
		var button = tabButtons[i];
		var tab = document.getElementsByClassName("tab")[i];
		var tabContent = tab.getElementsByClassName("tab-text")[0].children;

		if (button.classList.contains("active")) {
			button.style.height =
				tab.getElementsByClassName("tab-text")[0].offsetHeight + 80 + "px";
		}

		button.addEventListener("click", function() {
			// if the button isnt active
			if (!button.classList.contains("active")) {
				// remove active class from all buttons
				for (let b = 0; b < tabButtons.length; b++) {
					tabButtons[b].classList.remove("active");
					tabButtons[b].style.height = "71px";
				}

				// add active class to clicked button
				button.classList.add("active");

				// position tab body in mobile
				if (getBrowserWidth() < 768) {
					button.appendChild(tabBody);
				}

				button.style.height =
					tab.getElementsByClassName("tab-text")[0].offsetHeight + 80 + "px";

				// hide all tabs and content
				for (var b = 0; b < allTabs.length; b++) {
					var t = allTabs[b];
					var cnt = t.getElementsByClassName("tab-text")[0].children;

					// remove the class from tab iteration
					t.classList.remove("active");

					// loop throught all content all remove inline style
					for (var c = 0; c < cnt.length; c++) {
						function z() {
							var cElement = cnt[c];

							setTimeout(function() {
								cElement.classList.remove("active");
							}, c * 150);
						}

						z();
					}
				}

				// show clicked tab
				tab.classList.add("active");

				// show content
				for (var c = 0; c < tabContent.length; c++) {
					function b() {
						var contentElement = tabContent[c];
						setTimeout(function() {
							contentElement.classList.add("active");
						}, c * 150);
					}

					b();
				}
			}
		});
	}

	a();
}
