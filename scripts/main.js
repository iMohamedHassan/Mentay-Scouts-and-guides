const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.querySelector('.mobile-overlay');
const links = document.querySelectorAll('.mobile-menu a');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const form = document.getElementById('joinForm');
const formMessage = document.getElementById('formMessage');

function openMenu() {
  mobileNav.classList.add('open');
  hamburger.classList.add('active');
  mobileNav.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  // focus first link
  const first = mobileNav.querySelector('.mobile-menu a');
  if (first) first.focus();
}

function closeMenu() {
  mobileNav.classList.remove('open');
  hamburger.classList.remove('active');
  mobileNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.focus();
}

hamburger.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) closeMenu(); else openMenu();
});

overlay.addEventListener('click', closeMenu);
links.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* Theme handling with persistence */
(function initTheme() {
  const saved = localStorage.getItem('theme');
  // Respect an explicit 'light' preference, otherwise default to dark
  if (saved === 'light') {
    body.classList.add('light');
    body.classList.remove('dark');
    if (themeToggle) themeToggle.textContent = '🌙';
  } else {
    body.classList.add('dark');
    body.classList.remove('light');
    if (themeToggle) themeToggle.textContent = '☀️';
  }
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    body.classList.toggle('light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* Event card active toggle */
document.querySelectorAll('.event').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.event').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

/* Simple form handler */
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.fullName.value.trim();
    if (!name) {
      formMessage.hidden = false;
      formMessage.textContent = 'الرجاء إدخال الاسم الكامل.';
      return;
    }
    formMessage.hidden = false;
    formMessage.textContent = 'شكراً! تم إرسال نموذجك.';
    form.reset();
    setTimeout(() => { formMessage.hidden = true; }, 4000);
  });
}

  /* Lightbox for gallery images */
  (function initLightbox(){
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    const lbOverlay = lightbox.querySelector('.lightbox-overlay');
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbClose = lightbox.querySelector('.lightbox-close');
    const lbPrev = lightbox.querySelector('.lightbox-nav.prev');
    const lbNext = lightbox.querySelector('.lightbox-nav.next');
    const gallery = Array.from(document.querySelectorAll('.gallery img'));
    let currentIndex = -1;

    if (!gallery.length) return;

    gallery.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.setAttribute('tabindex', '0');
      img.addEventListener('click', () => open(i));
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    });

    function open(index){
      currentIndex = index;
      const { src, alt } = gallery[index];
      lbImg.src = src;
      lbImg.alt = alt || '';
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function close(){
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
      document.body.style.overflow = '';
      if (currentIndex > -1) gallery[currentIndex].focus();
      currentIndex = -1;
    }

    function showPrev(){
      if (currentIndex <= 0) open(gallery.length - 1); else open(currentIndex - 1);
    }
    function showNext(){
      if (currentIndex >= gallery.length - 1) open(0); else open(currentIndex + 1);
    }

    lbOverlay.addEventListener('click', close);
    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', showPrev);
    lbNext.addEventListener('click', showNext);

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });

    // Touch / swipe support for mobile: left/right to navigate
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const threshold = 40; // px
      if (Math.abs(dx) > threshold) {
        if (dx > 0) showPrev(); else showNext();
      }
    }, { passive: true });

  })();
