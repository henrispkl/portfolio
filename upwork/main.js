// Elements
var navbar = document.querySelector('#navbar');
var windowWidth = window.innerWidth;
var client3Info = document.querySelector('#client-3 .info');
var client3 = document.querySelector('#client-3');
var client4 = document.querySelector('#client-4');
var hidden1 = document.querySelector('#hidden1');
var hidden2 = document.querySelector('#hidden2');
var hidden3 = document.querySelector('#hidden3');
var hidden4 = document.querySelector('#hidden4');
var mainTopics = document.querySelector('#main-topics');
var topics = document.querySelectorAll('#main-topics .topic');
var clients = document.querySelectorAll('.client');

// Change navbar color on scroll
function changeNavbarColor() {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add('white');
  } else {
    navbar.classList.remove('white');
  }
}
changeNavbarColor();

window.onscroll = function () {
  changeNavbarColor();

  if (checkVisible(hidden1)) {
    hidden1.classList.add('visible');
  }

  if (checkVisible(hidden2, 200)) {
    hidden2.classList.add('visible');
  }

  if (checkVisible(hidden3)) {
    hidden3.classList.add('visible');
  }

  if (checkVisible(hidden4, 300)) {
    hidden4.classList.add('visible');
  }

  if (windowWidth >= 1348) {
    if (checkVisible(mainTopics, 100)) {
      topics.forEach(function (topic, i) {
        setTimeout(function () {
          topic.classList.add('visible');
        }, i * 200);
      });
    }
  } else {
    topics.forEach(function (topic) {
      if (checkVisible(topic)) {
        topic.classList.add('visible');
      }
    });
  }

  clients.forEach(function (client) {
    if (checkVisible(client)) {
      client.classList.add('visible');
    }
  });
};

function moveClient3Info() {
  if (windowWidth >= 768) {
    client3Info.classList.add('special-info');
    client4.prepend(client3Info);
  } else if (windowWidth <= 768) {
    client3Info.classList.remove('special-info');
    client3.append(client3Info);
  }
}
moveClient3Info();

window.onresize = function () {
  windowWidth = window.innerWidth;
  moveClient3Info();
};

function checkVisible(elm, threshold, mode) {
  threshold = threshold || 0;
  mode = mode || 'visible';

  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;

  return mode === 'above' ? above : mode === 'below' ? below : !above && !below;
}
