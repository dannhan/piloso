let lastFocus = null;

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    const nav = menuToggle.closest('nav');
    const setMenu = (open) => {
      navLinks.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    };
    menuToggle.addEventListener('click', (event) => {
      const open = !navLinks.classList.contains('active');
      setMenu(open);
      if (open && event.detail === 0) navLinks.querySelector('a').focus();
    });
    navLinks
      .querySelectorAll('a')
      .forEach((a) => a.addEventListener('click', () => setMenu(false)));
    nav.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        setMenu(false);
        menuToggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
    });
    globalThis.matchMedia('(max-width: 1120px)').addEventListener('change', (event) => {
      if (!event.matches) setMenu(false);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id && id !== '#') {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const behavior = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth';
          target.scrollIntoView({ behavior, block: 'start' });
        }
      }
    });
  });

  const overlay = document.getElementById('sampleModal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSampleModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSampleModal();
  });
});

function toggleFaq(btn, event) {
  const item = btn.parentElement;
  const list = item.parentElement;
  const willOpen = !item.classList.contains('active');
  list.classList.toggle('faq-instant', event.detail === 0);
  list.querySelectorAll('.faq-item').forEach((faqItem) => {
    const open = faqItem === item && willOpen;
    const answer = faqItem.querySelector('.faq-answer');
    faqItem.classList.toggle('active', open);
    faqItem.querySelector('.faq-question').setAttribute('aria-expanded', String(open));
    answer.setAttribute('aria-hidden', String(!open));
    answer.inert = !open;
  });
}

function openSampleModal() {
  const modal = document.getElementById('sampleModal');
  if (!modal) return;
  lastFocus = document.activeElement;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  const first = modal.querySelector('input');
  if (first) first.focus();
}

function closeSampleModal() {
  const modal = document.getElementById('sampleModal');
  if (!modal || !modal.classList.contains('active')) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

function selectLotAndOpen(lotName) {
  const select = document.getElementById('lotSelection');
  if (select) select.value = lotName;
  openSampleModal();
}

function handleSampleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('sampleForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}
