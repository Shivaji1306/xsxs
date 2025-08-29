// Main JS for interactivity: mobile menu, smooth scroll, modal gallery, and form validation

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('closeIcon');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden');
    // toggle icons
    hamburger.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    // if menu open, ensure it's visible
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.querySelectorAll('a')[0]?.focus();
    }
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple keyboard accessibility: close mobile menu with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      hamburger.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileBtn.focus();
    }
  }
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg = document.getElementById('formSuccess');
  const clearBtn = document.getElementById('clearBtn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameField.value.trim()) {
      nameError.classList.remove('hidden');
      valid = false;
    } else nameError.classList.add('hidden');

    if (!validateEmail(emailField.value.trim())) {
      emailError.classList.remove('hidden');
      valid = false;
    } else emailError.classList.add('hidden');

    if (!messageField.value.trim() || messageField.value.trim().length < 10) {
      messageError.classList.remove('hidden');
      valid = false;
    } else messageError.classList.add('hidden');

    if (!valid) return;

    // Fake submit (replace with real API call as needed)
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
      successMsg.classList.remove('hidden');
      contactForm.reset();
      // Move focus to success message for screen readers
      successMsg.setAttribute('tabindex', '-1');
      successMsg.focus();
    }, 900);
  });

  clearBtn?.addEventListener('click', () => contactForm.reset());
}

// Small performance tweak: lazy-load images by swapping src for those with placeholder pattern
window.addEventListener('load', () => {
  document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
      img.loading = 'lazy';
    }
  });
});

// Basic keyboard focus management for project cards (make them accessible as buttons)
document.querySelectorAll('[tabindex="0"]').forEach(card => {
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.click();
    }
  });
});
