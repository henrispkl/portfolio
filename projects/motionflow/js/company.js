// Elements
var iconTabs = document.getElementById("icon-tabs");
var iconTabsNav = document.getElementsByClassName("icon-tab-nav")[0];
var iconTabButtons = iconTabs.getElementsByClassName("icon-tab-button");
var allIconTabs = iconTabs.getElementsByClassName("icon-tab");

// Icon tabs
for (var i = 0; i < iconTabButtons.length; i++) {
	function a() {
		var button = iconTabButtons[i];
		var n = i;
		button.addEventListener("click", function() {
			var activeTab = document.getElementsByClassName("active-icon-tab")[0];
			var activeButton = document.getElementsByClassName(
				"active-tab-button"
			)[0];
			var tabToShow = allIconTabs[n];

			activeTab.classList.remove("active-icon-tab");
			activeButton.classList.remove("active-tab-button");

			tabToShow.classList.add("active-icon-tab");
			button.classList.add("active-tab-button");

			var _BROWSERWIDTH = getBrowserWidth();

			if (_BROWSERWIDTH < 768) {
				var activePos = offset(button);
				var value = _BROWSERWIDTH / 2 - activePos.left - 41;

				// getting the translateX value
				var curTranslation = iconTabsNav.style.transform;
				curTranslation = curTranslation.match(/\(.*\)/g)[0];
				curTranslation = curTranslation.replace("(", "");
				curTranslation = curTranslation.replace(")", "");
				curTranslation = curTranslation.replace("px", "");
				curTranslation = parseInt(curTranslation);

				iconTabsNav.style.transform =
					"translateX(" + (curTranslation + value) + "px)";
			}
		});
	}

	// it's necessary to envelop it in a function to prevent bugs
	a();
}
