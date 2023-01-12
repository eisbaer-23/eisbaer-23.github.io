if (window.innerWidth < 941) {
  const div = document.getElementById('navigation-bar');
  div.style.display = 'none';
}
addEventListener('resize', (event) => {
  const div = document.getElementById('navigation-bar');
  if (window.innerWidth < 941) {
    div.style.display = 'none';
  } else {
    div.style.display = 'flex';
  }
});
