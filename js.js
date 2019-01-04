// Device width
var dvWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (dvWidth > 320 && dvWidth < 480) {
}

var mainInfo = document.getElementsByClassName("main-info");
var skills = document.getElementsByClassName("skills");
var mLinks = document.getElementsByClassName("m-link");

setTimeout(() => {
  mainInfo[0].style.transform = "translate(0, 0)";
  mainInfo[0].style.opacity = "1";
  mainInfo[0].style.transform = "translate(0)";
}, 1000);

setTimeout(() => {
  skills[0].style.opacity = "1";
  skills[0].style.transform = "translate(0)";
}, 1800);

// Show m-link
var mLink_i = 0;
function showMLink() {
  setTimeout(function() {
    mLinks[mLink_i].style.opacity = "1";
    mLinks[mLink_i].style.transform = "translate(0)";
    mLink_i++;
    if (mLink_i < mLinks.length) {
      showMLink();
    }
  }, 200);
}

setTimeout(() => {
  showMLink();
}, 2400);

setTimeout(() => {
  document.querySelector(".desc").style.opacity = "1";
  document.querySelector(".desc").style.transform = "translateY(0%)";
}, 3400);

function isVisible(elm, dist) {
  if (!elm.classList.contains("_shown")) {
    var rect = elm.getBoundingClientRect();
    var viewHeight =
      Math.max(document.documentElement.clientHeight, window.innerHeight) -
      dist;
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}

// Skills hover effect desktop
var sklSec = document.getElementsByClassName("skl-sec");
var skillsTitle = document.getElementsByClassName("skills-title");

if (dvWidth > 1024) {
  // Hover in skills
  for (let i = 0; i < sklSec.length; i++) {
    sklSec[i].addEventListener("mouseover", function() {
      for (var i2 = 0; i2 < sklSec.length; i2++) {
        sklSec[i2].style.opacity = "0.4";
      }
      skillsTitle[0].style.opacity = "1";
      sklSec[i].style.transform = "scale(1.4)";
      sklSec[i].style.margin = "0 30px";
      sklSec[i].classList.add("skl-hover");

      if (i == 0) {
      } else {
        sklSec[i].previousElementSibling.style.transform = "scale(1.2)";
      }

      if (i == sklSec.length - 1) {
      } else {
        sklSec[i].nextElementSibling.style.transform = "scale(1.2)";
      }
    });
    sklSec[i].addEventListener("mouseout", function() {
      for (let i2 = 0; i2 < sklSec.length; i2++) {
        sklSec[i2].style.opacity = "1";
      }
      skillsTitle[0].style.opacity = "0";
      sklSec[i].style.transform = "scale(1)";
      sklSec[i].style.margin = "0 10px";
      sklSec[i].classList.remove("skl-hover");

      if (i == 0) {
      } else {
        sklSec[i].previousElementSibling.style.transform = "scale(1)";
      }
      if (i == sklSec.length - 1) {
      } else {
        sklSec[i].nextElementSibling.style.transform = "scale(1)";
      }
    });
  }
} else {
  // Skills for mobile
  var showSkl_i = 0;
  function showSkl() {
    setTimeout(function() {
      // Show skills title
      document.getElementsByClassName("skills-title")[0].style.opacity = "1";
      sklSec[showSkl_i].style.opacity = "1";
      showSkl_i++;
      if (showSkl_i < sklSec.length) {
        showSkl();
      }
    }, 200);
  }

  // Trigger showSkl() only once
  var _shownSkl = false;

  function executeShowSkl() {
    if (isVisible(document.getElementsByClassName("skills")[0], 100)) {
      if (_shownSkl == false) {
        showSkl();
      }

      _shownSkl = true;
    }
  }

  window.addEventListener("scroll", executeShowSkl);
}

var projTitleElem = document.getElementsByClassName("proj-title")[0];
var projTitleName = document.getElementsByClassName("proj-titlename")[0];
var projects = document.getElementsByClassName("project");

function showElements() {
  if (isVisible(document.querySelector(".left-image"), 200)) {
    document.querySelector(".left-image").style.opacity = "1";
    document.querySelector(".left-image").style.transform = "translateX(0%)";
  }

  if (isVisible(document.querySelector(".text-section"), 200)) {
    document.querySelector(".text-section").style.opacity = "1";
  }

  if (isVisible(document.querySelector(".right-image"), 200)) {
    document.querySelector(".right-image").style.opacity = "1";
    document.querySelector(".right-image").style.transform = "translateX(0%)";
  }

  if (isVisible(document.querySelector(".detailed-left"), 200)) {
    document.querySelector(".detailed-left").style.opacity = "1";
    setTimeout(() => {
      document.querySelector(".work-button").style.marginLeft = "0";
      document.querySelector(".work-button").style.opacity = "1";
      setTimeout(() => {
        document.querySelector(".work-button").style.transition =
          "0.5s all ease";
      }, 500);
    }, 1000);
  }

  if (isVisible(projTitleElem, 150)) {
    projTitleElem.style.opacity = 1;
    projTitleElem.style.transform = "translate(0)";

    projTitleElem.classList.add("_shown");

    var spi = 0;
    function showProject() {
      setTimeout(function() {
        projects[spi].style.opacity = "1";
        spi++;
        if (spi < projects.length) {
          showProject();
        }
      }, 250);
    }

    setTimeout(function() {
      showProject();
    }, 500);
  }
}

window.addEventListener("scroll", showElements);
