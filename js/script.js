const heroImages = [
  'assets/hero/img1.jpg',
  'assets/hero/img2.jpg',
  'assets/hero/img3.jpg',
  'assets/hero/img4.jpg',
  'assets/hero/img5.jpg',
  'assets/hero/img6.jpg',
  'assets/hero/img7.jpg',
  'assets/hero/img8.jpg',
  'assets/hero/img9.jpg',
  'assets/hero/img10.jpg',
  'assets/hero/img11.jpg',
  'assets/hero/img12.jpg',
  'assets/hero/img13.jpg',
  'assets/hero/img14.jpg',
  'assets/hero/img15.jpg',
];

const heroImage = document.querySelector('.hero img');
let currentImage = 0;

function changeHeroImage() {
  currentImage++;

  if (currentImage >= heroImages.length) {
    currentImage = 0;
  }

  heroImage.style.opacity = '0';

  setTimeout(() => {
    heroImage.src = heroImages[currentImage];
    heroImage.style.opacity = '1';
  }, 300);
}

setInterval(changeHeroImage, 4000);

heroImage.style.transition = 'opacity .5s ease';

const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,

    behavior: 'smooth',
  });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.style.padding = '12px 4%';
    navbar.style.boxShadow = '0 15px 35px rgba(0,0,0,.18)';
  } else {
    navbar.style.padding = '18px 4%';
    navbar.style.boxShadow = '0 6px 25px rgba(0,0,0,.15)';
  }
});

const newsletter = document.querySelector('.newsletter-form');

if (newsletter) {
  newsletter.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = newsletter.querySelector('input');

    const email = input.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');

      return;
    }

    alert('Thank you for subscribing!');

    input.value = '';
  });
}

const cards = document.querySelectorAll(
  '.category-card,.featured-card,.deal-card,.product-card,.trending-card,.feature-box,.brand-card,.review-card'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },

  {
    threshold: 0.15,
  }
);

cards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(60px)';
  card.style.transition = '.7s ease';

  observer.observe(card);
});

const menuLinks = document.querySelectorAll('.menu-bar a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuLinks.forEach((item) => {
      item.classList.remove('active');
    });

    link.classList.add('active');
  });
});

document.querySelectorAll('img').forEach((img) => {
  img.draggable = false;
});

document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});
