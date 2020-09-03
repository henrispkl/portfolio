// setting the navbar to white
_WHITENAVBAR = true;

// Elements
var actionContainer = document.getElementsByClassName("action-container")[0];
var features = document.getElementsByClassName("feature");
var rowInfo = document.getElementsByClassName("info")[0];
var aspects = document.getElementsByClassName("aspect");
var userfulCards = document.getElementsByClassName("useful-card");

setTimeout(() => {
	showElement(actionContainer, "none");
}, 150);

window.onscroll = function() {
	whiteNavbar();

	if (scrollShow(features[0], 250)) {
		for (var i = 0; i < features.length; i++) {
			function a() {
				var feature = features[i];
				var featureIcon = feature.getElementsByClassName("feature-icon")[0];
				var featureTitle = feature.getElementsByClassName("feature-title")[0];
				var featureText = feature.getElementsByClassName("feature-text")[0];
				setTimeout(function() {
					showElement(featureIcon, "none");
					showElement(featureTitle, "none");
					showElement(featureText, "none");
				}, i * 150);
			}

			a();
		}
	}

	if (scrollShow(rowInfo, 250)) {
		showElement(rowInfo, "none");
	}

	for (var i = 0; i < aspects.length; i++) {
		var aspect = aspects[i];
		var text = aspect.getElementsByClassName("aspect-text")[0];
		var listItems = aspect.getElementsByTagName("li");

		if (scrollShow(aspect, 250)) {
			showElement(text, "none");

			for (var z = 0; z < listItems.length; z++) {
				function b() {
					var item = listItems[z];
					setTimeout(function() {
						showElement(item, "none");
					}, 150 + z * 150);
				}

				b();
			}
		}
	}

	if (scrollShow(userfulCards[0], 100)) {
		userfulCards[0].classList.remove("card-translate");
		setTimeout(function() {
			userfulCards[1].classList.remove("card-translate");
		}, 150);
	}
};
