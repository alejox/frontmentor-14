const share = document.querySelector('.footer__icon-share');
const socialIcon = document.querySelector('.social');

share.addEventListener('click', () => {
  socialIcon.classList.toggle('show');
  share.classList.toggle('rotate');
});
