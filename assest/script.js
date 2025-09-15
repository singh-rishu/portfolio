// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Update active class
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Optional: Highlight nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Accordion functionality for Professional Experience
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(header => {
  header.addEventListener('click', function() {
    const isActive = this.classList.contains('active');
    // Close all
    accordions.forEach(h => {
      h.classList.remove('active');
      h.querySelector('.chevron')?.classList.remove('rotate');
      h.nextElementSibling.style.display = 'none';
    });
    // Open this one if it wasn't already open
    if (!isActive) {
      this.classList.add('active');
      this.querySelector('.chevron')?.classList.add('rotate');
      this.nextElementSibling.style.display = 'block';
    }
  });
});


