var mainInfo = document.getElementsByClassName("main-info");
var skills = document.getElementsByClassName("skills");

setTimeout(() => {
  mainInfo[0].style.transform = "translate(0, 0)";
  mainInfo[0].style.opacity = "1";
  mainInfo[0].style.filter = "blur(0px)";
}, 1000);

setTimeout(() => {
  skills[0].style.opacity = "1";
  skills[0].style.filter = "blur(0px)";
}, 1800);

function isVisible(elm, dist) {
  if (!elm.classList.contains("_shown")) {
    var rect = elm.getBoundingClientRect();
    var viewHeight =
      Math.max(document.documentElement.clientHeight, window.innerHeight) -
      dist;
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}

var projTitleElem = document.getElementsByClassName("proj-title")[0];
var projTitleName = document.getElementsByClassName("proj-titlename")[0];
var textSectionElem = document.getElementsByClassName("text-section");

window.onscroll = function() {
  if (isVisible(textSectionElem[0], 150)) {
    textSectionElem[0].style.opacity = 1;
    textSectionElem[0].classList.add("_shown");
  }

  setTimeout(() => {
    if (isVisible(textSectionElem[1], 150)) {
      textSectionElem[1].style.opacity = 1;
      textSectionElem[1].classList.add("_shown");
    }
  }, 1000);

  if (isVisible(projTitleElem, 150)) {
    projTitleElem.style.opacity = 1;
    projTitleElem.style.filter = "blur(0px)";

    projTitleElem.classList.add("_shown");
  }
};

var sklSec = document.getElementsByClassName("skl-sec");
var skillsTitle = document.getElementsByClassName("skills-title");

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
