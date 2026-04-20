// ============================================================
// SAAS-Guard — Main JavaScript
// Smart Navbar, Typewriter, GSAP Animations, Tab System,
// Timeline, Custom Cursor, Contact Form, and more
// ============================================================

(function () {
  'use strict';

  // ── Wait for DOM ────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initParticles();
    initNavbar();
    initTypewriter();
    initSmoothScroll();
    initCustomCursor();
    initDomainTabs();
    initGSAPAnimations();
    initTimelineProgress();
    initCounterAnimation();
    initImageModal();
    initContactForm();
    initBackToTop();
    initCardTilt();
  }

  // ── Particles (Hero Background) ─────────────────────────
  function initParticles() {
    if (typeof tsParticles !== 'undefined' && document.getElementById('hero-particles')) {
      tsParticles.load('hero-particles', PARTICLES_CONFIG);
    }
  }

  // ── Smart Navbar ────────────────────────────────────────
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');
    let lastScroll = 0;
    let ticking = false;

    // Hide/show on scroll
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset;

          // Add background after scrolling past hero
          if (currentScroll > 80) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }

          // Smart hide/show
          if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.classList.add('hidden');
          } else {
            navbar.classList.remove('hidden');
          }

          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    });

    // Mobile toggle
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
      });
    }

    // Close mobile menu on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Active nav highlighting
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  // ── Typewriter Effect ───────────────────────────────────
  function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    const phrases = SITE_DATA.project.subTaglines;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 80;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        delay = 40;
      } else {
        el.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        delay = 80;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 500;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 1000);
  }

  // ── Smooth Scroll ──────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Custom Cursor ──────────────────────────────────────
  function initCustomCursor() {
    if (window.innerWidth <= 1024) return;

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .glass-card, .domain-tab, .team-card, input, textarea');
    hoverTargets.forEach(t => {
      t.addEventListener('mouseenter', () => {
        dot.classList.add('hover');
        ring.classList.add('hover');
      });
      t.addEventListener('mouseleave', () => {
        dot.classList.remove('hover');
        ring.classList.remove('hover');
      });
    });
  }

  // ── Domain Tabs ────────────────────────────────────────
  function initDomainTabs() {
    const tabs = document.querySelectorAll('.domain-tab');
    const contents = document.querySelectorAll('.domain-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c => {
          c.classList.remove('active');
          if (c.id === `tab-${target}`) {
            c.classList.add('active');
          }
        });
      });
    });
  }

  // ── Scroll Reveal Animations (IntersectionObserver-based) ─
  // Uses CSS transitions with class toggling — never leaves elements invisible
  function initGSAPAnimations() {
    // Register GSAP if available (used only for hero entrance)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Hero content entrance (this is fine with gsap.from since it's immediately visible)
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        gsap.from('.hero-badge', { y: 30, opacity: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
        gsap.from('.hero-title', { y: 40, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
        gsap.from('.hero-tagline', { y: 30, opacity: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' });
        gsap.from('.hero-typewriter', { y: 30, opacity: 0, duration: 0.6, delay: 0.8, ease: 'power3.out' });
        gsap.from('.hero-buttons', { y: 30, opacity: 0, duration: 0.6, delay: 1.0, ease: 'power3.out' });
        gsap.from('.scroll-indicator', { y: 20, opacity: 0, duration: 0.6, delay: 1.4, ease: 'power3.out' });
      }
    }

    // ── Robust IntersectionObserver-based reveal system ──
    // This replaces all gsap.from + ScrollTrigger combos that were causing
    // elements to get stuck at opacity:0
    const revealElements = document.querySelectorAll(
      '.section-header, .about-text, .about-visual, ' +
      '.feature-card, .team-card, .stat-item, ' +
      '.timeline-item, .doc-card, .pres-card, ' +
      '.member-profile, .supervisor-card, ' +
      '.contact-info-item, .contact-form-card, ' +
      '.domain-tabs, .glass-card.domain-content-wrapper'
    );

    // Add the reveal class to all elements (sets initial hidden state via CSS)
    revealElements.forEach((el, index) => {
      el.classList.add('scroll-reveal');
      // Add stagger delay based on sibling position within parent grid
      const parent = el.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(':scope > .scroll-reveal');
        const siblingIndex = Array.from(siblings).indexOf(el);
        if (siblingIndex > 0) {
          el.style.transitionDelay = `${siblingIndex * 0.1}s`;
        }
      }
    });

    // Create observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ── Timeline Progress Line ─────────────────────────────
  function initTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    const progressLine = document.querySelector('.timeline-progress');
    if (!timeline || !progressLine) return;

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: timeline,
        start: 'top 70%',
        end: 'bottom 50%',
        onUpdate: (self) => {
          const progress = self.progress;
          progressLine.style.height = `${progress * 100}%`;
        }
      });
    }
  }

  // ── Counter Animation ──────────────────────────────────
  function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          animateCount(el, 0, target, 2000, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  function animateCount(el, start, end, duration, suffix) {
    const range = end - start;
    const startTime = performance.now();

    function update(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(start + range * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ── Image Modal (for Architecture Diagram) ─────────────
  function initImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalClose = document.querySelector('.modal-close');
    const zoomTriggers = document.querySelectorAll('.architecture-image');

    if (!modal) return;

    zoomTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const img = trigger.querySelector('img');
        if (img) {
          modalImg.src = img.src;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ── Contact Form (Formspree) ───────────────────────────
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.classList.add('loading');

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
          form.reset();
        } else {
          showToast('Failed to send message. Please try again.', 'error');
        }
      } catch (err) {
        showToast('Network error. Please check your connection.', 'error');
      }

      btn.textContent = originalText;
      btn.classList.remove('loading');
    });
  }

  function showToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // ── Back to Top ────────────────────────────────────────
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.pageYOffset > 600);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Card 3D Tilt Effect ────────────────────────────────
  function initCardTilt() {
    if (window.innerWidth <= 1024) return;

    const cards = document.querySelectorAll('.feature-card, .team-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -6;
        const rotateY = (x - centerX) / centerX * 6;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

})();
