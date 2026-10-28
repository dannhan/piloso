let lastFocus = null;

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    };
    menuToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));
    navLinks
      .querySelectorAll('a')
      .forEach((a) => a.addEventListener('click', () => setMenu(false)));
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

function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach((f) => {
    f.classList.remove('active');
    f.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });
  if (!wasActive) {
    item.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  }
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
