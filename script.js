document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) link.classList.add('active');
  });

  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  if (lightbox && lightboxImg) {
    document.querySelectorAll('[data-lightbox]').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        lightboxImg.src = item.getAttribute('href');
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target.tagName === 'BUTTON') lightbox.classList.remove('open');
    });
  }
});
