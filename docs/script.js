/* =========================================================
   7 Conceitos Essenciais do Claude Code · DIO
   JS vanilla: reveal on scroll, back-to-top, nav suave
   ========================================================= */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // Reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.section-header, .live-item, .about-block, .about-stats .stat'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Header sombra ao rolar
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    const y = window.scrollY;
    if (header) {
      header.style.boxShadow = y > 8 ? '0 4px 16px rgba(0,0,0,.35)' : 'none';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Foco no destino após clicar em âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const id = anchor.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          setTimeout(() => {
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            target.removeAttribute('tabindex');
          }, 600);
        }
      }
    });
  });
})();
