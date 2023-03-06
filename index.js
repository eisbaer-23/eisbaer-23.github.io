let isHoveringOverMenuToggle = false;
let click = 'click';
let eventX = function (event) { return event.clientX; };
let starhover = 'mouseover';
let endhover = 'mouseout';
if ('ontouchstart' in window) {
  starhover = 'touchstart';
  endhover = 'touchend';
  click = 'touchstart';
  eventX = function (event) { return event.touches[0].clientX; };
}
document.getElementById('hamburger-menu').addEventListener(starhover, function (event) {
  isHoveringOverMenuToggle = true;
});
document.getElementById('hamburger-menu').addEventListener(endhover, function (event) {
  isHoveringOverMenuToggle = false;
});
document.addEventListener(click, function (event) {
  if (eventX(event) > 100) {
    const cb = document.querySelector('#menu__toggle');
    if (cb.checked === true) {
      if (isHoveringOverMenuToggle === false) {
        cb.checked = false;
      }
    }
  }
});
