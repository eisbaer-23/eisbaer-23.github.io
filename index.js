let hover = false;
document.getElementById('hamburger-menu').addEventListener('mouseover', function (event) {
  hover = true;
});
document.getElementById('hamburger-menu').addEventListener('mouseout', function (event) {
  hover = false;
});
window.addEventListener('click', function (event) {
  if (event.clientX > 300) {
    const cb = document.querySelector('#menu__toggle');
    if (cb.checked === true) {
      if (hover === false) {
        console.log('nothover');
        cb.checked = false;
      }
    }
  }
});
