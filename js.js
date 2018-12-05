var mainInfo = document.getElementsByClassName("main-info");
var skills = document.getElementsByClassName("skills");

setTimeout(() => {
  mainInfo[0].style.marginTop = "50px";
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
var textSectionElem = document.getElementsByClassName("text-section");

window.onscroll = function() {
  if (isVisible(projTitleElem, 150)) {
    projTitleElem.style.opacity = 1;
    projTitleElem.style.filter = "blur(0px)";

    projTitleElem.classList.add("_shown");
  }

  for (var i = 0; i < textSectionElem.length; i++) {
    if (isVisible(textSectionElem[i], 150)) {
      textSectionElem[i].style.opacity = 1;

      textSectionElem[i].classList.add("_shown");
    }
  }
};

var sklSec = document.getElementsByClassName("skl-sec");

for (let i = 0; i < sklSec.length; i++) {
  sklSec[i].addEventListener("mouseover", function() {
    for (var i2 = 0; i2 < sklSec.length; i2++) {
      sklSec[i2].style.opacity = "0.4";
    }
    sklSec[i].style.transform = "scale(1.4)";
    sklSec[i].style.margin = "0 30px";
    sklSec[i].classList.add("skl-hover");

    sklSec[i + 1].style.transform = "scale(1.1)";
    sklSec[i - 1].style.transform = "scale(1.1)";
  });
  sklSec[i].addEventListener("mouseout", function() {
    for (let i2 = 0; i2 < sklSec.length; i2++) {
      sklSec[i2].style.opacity = "1";
    }
    sklSec[i].style.transform = "scale(1)";
    sklSec[i].style.margin = "0 10px";
    sklSec[i].classList.remove("skl-hover");

    sklSec[i + 1].style.transform = "scale(1)";
    sklSec[i - 1].style.transform = "scale(1)";
  });
}
