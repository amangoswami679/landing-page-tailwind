const menuButton = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu-items'); // Menu

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});