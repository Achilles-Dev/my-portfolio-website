const menuIcon = document.querySelector('#menu-icon');

const modal = document.querySelector('.modal');

const closeButton = document.querySelector('.close');

const isVisible = 'is-visible';

const menuItems = document.querySelectorAll('#menu > li');

menuIcon.addEventListener('click', () => {
  modal.classList.add(isVisible);
});

closeButton.addEventListener('click', () => {
  modal.classList.remove(isVisible);
});

menuItems.forEach((menuItem) => menuItem.addEventListener('click', () => {
  modal.classList.remove(isVisible);
}));
