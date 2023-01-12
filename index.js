if (window.innerWidth < 914) {
  const div = document.getElementById('navigation-bar');
  div.style.display = 'none';
}
addEventListener('resize', (event) => {
  const div = document.getElementById('navigation-bar');
  if (window.innerWidth < 914) {
    div.style.display = 'none';
  } else {
    div.style.display = 'flex';
  }
});
