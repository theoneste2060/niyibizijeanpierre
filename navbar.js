// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar nav');
  
  if (menuToggle && navMenu) {
    // Toggle menu on click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Toggle menu on Enter/Space key
    menuToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
    
    function toggleMenu() {
      const isExpanded = navMenu.classList.contains('active');
      navMenu.classList.toggle('active');
      
      // Update ARIA attribute
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Animate menu toggle icon
      const spans = menuToggle.querySelectorAll('span');
      if (!isExpanded) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
  
  // Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections for fade-in animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
});
