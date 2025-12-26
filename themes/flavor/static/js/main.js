(function() {
  'use strict';

  function initHeader() {
    const header = document.querySelector('[data-scroll-header]');
    if (!header) return;
    const scrollThreshold = 50;
    function handleScroll() {
      if (window.pageYOffset > scrollThreshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initMobileMenu() {
    const toggleBtn = document.querySelector('[data-toggle="mobile-menu"]');
    const closeBtn = document.querySelector('[data-close-menu]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (!toggleBtn || !mobileMenu) return;
    function openMenu() {
      mobileMenu.hidden = false;
      mobileMenu.setAttribute('data-open', 'true');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const firstFocusable = mobileMenu.querySelector('a, button');
        if (firstFocusable) firstFocusable.focus();
      }, 100);
    }
    function closeMenu() {
      mobileMenu.setAttribute('data-open', 'false');
      document.body.style.overflow = '';
      setTimeout(() => { mobileMenu.hidden = true; }, 300);
    }
    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.getAttribute('data-open') === 'true') closeMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }

  function initBackToTop() {
    const btn = document.querySelector('.ftr__back-top');
    if (!btn) return;
    function handleScroll() {
      if (window.pageYOffset > 500) btn.classList.add('is-visible');
      else btn.classList.remove('is-visible');
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.hdr')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      });
    });
  }

  function initAnimations() {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  }

  function initForms() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function(e) {
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput && !emailInput.value.includes('@')) {
          e.preventDefault();
          emailInput.setCustomValidity('Veuillez entrer une adresse email valide');
          emailInput.reportValidity();
        }
      });
    });
  }

  function initReadingProgress() {
    const article = document.querySelector('.article__content');
    if (!article) return;
    const progress = document.createElement('div');
    progress.className = 'reading-progress';
    progress.innerHTML = '<div class="reading-progress__bar"></div>';
    document.body.appendChild(progress);
    const bar = progress.querySelector('.reading-progress__bar');
    function updateProgress() {
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      const start = articleTop - windowHeight;
      const end = articleTop + articleHeight - windowHeight;
      const current = scrollTop - start;
      const total = end - start;
      const percentage = Math.min(Math.max((current / total) * 100, 0), 100);
      bar.style.width = percentage + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  function initCodeCopy() {
    document.querySelectorAll('pre').forEach(pre => {
      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copier';
      btn.setAttribute('aria-label', 'Copier le code');
      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent;
        try {
          await navigator.clipboard.writeText(code);
          btn.textContent = 'Copié !';
          setTimeout(() => btn.textContent = 'Copier', 2000);
        } catch (err) {
          btn.textContent = 'Erreur';
        }
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  function init() {
    initHeader();
    initMobileMenu();
    initBackToTop();
    initSmoothScroll();
    initAnimations();
    initForms();
    initReadingProgress();
    initCodeCopy();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
