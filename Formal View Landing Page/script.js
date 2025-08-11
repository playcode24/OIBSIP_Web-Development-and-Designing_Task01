// ==== HAMBURGER MENU TOGGLE ====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('open');
});

// Animate hamburger icon into an "X"
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  const spans = hamburger.querySelectorAll('span');
  if (hamburger.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});

// ==== HIGHLIGHT ACTIVE NAV LINK ====
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// ==== FADE-IN ANIMATION ON SCROLL ====
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
