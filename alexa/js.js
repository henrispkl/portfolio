// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault) e.preventDefault();
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// function disableScroll() {
//   if (window.addEventListener)
//     // older FF
//     window.addEventListener("DOMMouseScroll", preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove = preventDefault; // mobile
//   document.onkeydown = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//   if (window.removeEventListener)
//     window.removeEventListener("DOMMouseScroll", preventDefault, false);
//   window.onmousewheel = document.onmousewheel = null;
//   window.onwheel = null;
//   window.ontouchmove = null;
//   document.onkeydown = null;
// }

// disableScroll();

// var smoothScrollActive = false;

// function smoothScroll(target, duration) {
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset || window.scrollY;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function loop(currentTime) {
//     smoothScrollActive = true;
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) {
//       requestAnimationFrame(loop);
//     } else {
//       smoothScrollActive = false;
//     }
//   }
//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }
//   requestAnimationFrame(loop);
// }

// var sActual = 1;

// var secArray = [];
// var focusElems = document.getElementsByClassName("scrollTarget");
// for (var i = 0; i < focusElems.length; i++) {
//   secArray.push(focusElems[i].id);
// }

// window.addEventListener("wheel", function(e) {
//   e.preventDefault;
//   if (smoothScrollActive == false) {
//     if (e.deltaY < 0) {
//       // scrolling up

//       // if (sActual > 1) {
//       sActual -= 1;

//       var regexFilter = new RegExp("sec-" + sActual, "g");
//       secArray.filter(function(item) {
//         if (item.match(regexFilter)) {
//           var a = document.getElementById(item.match(regexFilter));
//           // console.log("SOBE " + item.match(regexFilter));
//           smoothScroll(a, 700);
//         }
//       });
//       // }
//     }
//     if (e.deltaY > 0) {
//       // scrolling down
//       // if (sActual < focusElems.length) {
//       sActual += 1;

//       var regexFilter = new RegExp("sec-" + sActual, "g");
//       secArray.filter(function(item) {
//         if (item.match(regexFilter)) {
//           var a = document.getElementById(item.match(regexFilter));
//           console.log("DESCE " + item.match(regexFilter));
//           console.log("DESCE PARA O " + a.id);
//           smoothScroll(a, 700);
//         }
//       });
//       // }
//     }
//   }
// });

function isVisible(elm, dist) {
  if (!elm.classList.contains("_shown")) {
    var rect = elm.getBoundingClientRect();
    var viewHeight =
      Math.max(document.documentElement.clientHeight, window.innerHeight) -
      dist;
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}

//Projects hover
var a = document.getElementsByClassName("pj");

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("mouseover", function() {
    a[i].style.opacity = "1";
  });

  a[i].addEventListener("mouseout", function() {
    a[i].style.opacity = "0.5";
  });
}

//Fade in stuff
setTimeout(() => {
  document.getElementsByClassName("title")[0].style.opacity = "1";
}, 700);

setTimeout(() => {
  document.getElementsByClassName("sub-title")[0].style.opacity = "1";
}, 1500);

setTimeout(() => {
  document.getElementsByClassName("main-text")[0].style.opacity = "1";
  document.getElementsByClassName("main-text")[0].style.transform =
    "translateY(0%)";
}, 2000);

setTimeout(() => {
  document.getElementsByClassName("media-links")[0].style.opacity = "1";
}, 3000);

function showElements() {
  if (isVisible(document.getElementsByClassName("sec-2-imgs")[0], 200)) {
    setTimeout(() => {
      document.getElementsByClassName("s-image1")[0].style.opacity = "1";
    }, 500);
    setTimeout(() => {
      document.getElementsByClassName("s-image2")[0].style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      document.getElementsByClassName("s-image3")[0].style.opacity = "1";
    }, 1500);
    setTimeout(() => {
      document.getElementsByClassName("sec-2-imgs")[0].style.boxShadow =
        "0 0 15px rgba(0, 0, 0, 0.294)";
    }, 1800);
    setTimeout(() => {
      document.getElementsByClassName("sec-2-text")[0].style.opacity = "1";
      document.getElementsByClassName("sec-2-text")[0].style.transform =
        "translate(0%, -50%)";
    }, 1800);
  }

  if (isVisible(document.querySelector("#sec-3 h1"), 100)) {
    document.querySelector("#sec-3 h1").style.opacity = "1";
    setTimeout(() => {
      document.querySelector("#sec-3 p").style.opacity = "1";
    }, 500);
  }

  if (isVisible(document.querySelector(".sec-4-img"), 200)) {
    document.querySelector(".sec-4-img").style.opacity = "1";
    document.querySelector(".sec-4-img").style.transform = "translateY(0%)";

    setTimeout(() => {
      document.querySelector("#sec-4 h1").style.opacity = "1";

      document.querySelector("#sec-4 .triangles").style.opacity = "1";
    }, 1100);
  }

  if (isVisible(document.querySelector("#projects"), 250)) {
    document.querySelector("#projects").style.opacity = "1";
  }
}
window.addEventListener("scroll", showElements);
