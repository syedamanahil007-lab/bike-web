// mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth', block:'start' });
    // close mobile menu after click
    if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
  });
});

// reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowH = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowH - 80) el.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const container = document.querySelector(".falling-container");

// Replace these with your doodle image URLs (Kawasaki logo, bikes, hearts)
const doodles = [
  "kawasaki-logo.png",
  "bike.png",
  "heart1.png",
  "heart2.png"
];



