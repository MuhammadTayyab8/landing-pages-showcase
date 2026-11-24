// Page interactions (loader, smooth scroll, carousel, modals, etc.)
import Lenis from 'lenis';

export function initPage() {
  // 1. Lenis Smooth-scroll & Scroll lock
  window.scrollTo(0, 0);
  const lenis = new Lenis({ smoothWheel: true });
  function raf(t) {
    lenis.raf(t);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  let scrollEnabled = true;
  function stopScroll() {
    scrollEnabled = false;
    lenis.stop();
    document.documentElement.style.position = 'relative';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
  }
  function startScroll() {
    scrollEnabled = true;
    lenis.start();
    document.documentElement.style.removeProperty('position');
    document.documentElement.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('height');
  }

  function smoothScrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    stopScroll();
    setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => {
        startScroll();
      }, 100);
    }, 50);
  }

  // Bind scroll buttons
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll');
      closeNavMenu();
      smoothScrollTo(targetId);
    });
  });
  document.getElementById('brand-logo-btn')?.addEventListener('click', () => smoothScrollTo('home'));

  // 2. Adaptive Grid Scale-up above 1920px
  function applyAdaptiveGrid() {
    const FONT_BASE = 16, baseWidth = 1920, coef = 0.6666;
    const w = window.innerWidth;
    const widthReduction = ((baseWidth - w) / baseWidth) * 100;
    const size = FONT_BASE - (FONT_BASE * (widthReduction * coef)) / 100;
    if (size > FONT_BASE) document.documentElement.style.fontSize = size + 'px';
    else document.documentElement.style.removeProperty('font-size');
  }
  applyAdaptiveGrid();
  window.addEventListener('resize', applyAdaptiveGrid);

  // 3. Live Clock Update
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    const timeStr = `${hours}:${minutes}${ampm}`;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateStr = `${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;

    const timeEl = document.getElementById('clock-time');
    const dateEl = document.getElementById('clock-date');
    const navTimeEl = document.getElementById('nav-local-time');
    if (timeEl) timeEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
    if (navTimeEl) navTimeEl.textContent = `Local time — ${timeStr}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 4. Page Loader Animation
  let ready = false;
  stopScroll();

  const loader = document.getElementById('page-loader');
  const loaderFill = document.getElementById('loader-fill');
  const loaderCount = document.getElementById('loader-count');
  const loaderCenter = document.getElementById('loader-center');

  const FILL_MS = 1300;
  const startLoaderTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function stepLoader(currentTime) {
    const elapsed = currentTime - startLoaderTime;
    const t = Math.min(elapsed / FILL_MS, 1);
    const progress = Math.round(easeInOutCubic(t) * 100);

    if (loaderFill) loaderFill.style.width = progress + '%';
    if (loaderCount) loaderCount.textContent = String(progress).padStart(3, '0');

    if (t < 1) {
      requestAnimationFrame(stepLoader);
    } else {
      setTimeout(exitLoader, 150);
    }
  }
  requestAnimationFrame(stepLoader);

  function exitLoader() {
    if (loaderCenter) {
      loaderCenter.style.opacity = '0';
      loaderCenter.style.transform = 'translateY(-12px)';
    }
    if (loader) {
      loader.style.transform = 'translateY(-100%)';
    }
    setTimeout(() => {
      ready = true;
      startScroll();
      if (loader) loader.remove();
      triggerEntranceReveals();
    }, 700);
  }

  // 5. Entrance Reveals Trigger
  function triggerEntranceReveals() {
    // Header entrance (150ms)
    setTimeout(() => {
      document.getElementById('site-header')?.classList.add('is-ready');
    }, 150);

    // Hero eyebrow (200ms)
    setTimeout(() => {
      document.getElementById('hero-eyebrow')?.classList.add('is-revealed');
    }, 200);

    // Hero H1 line reveals (250ms with line stagger 120ms)
    setTimeout(() => {
      const lines = document.querySelectorAll('#hero-heading .line-reveal-inner');
      lines.forEach((line, i) => {
        setTimeout(() => {
          line.style.transform = 'translateY(0%)';
          line.style.opacity = '1';
        }, i * 120);
      });
    }, 250);

    // Hero watermark (300ms)
    setTimeout(() => {
      document.getElementById('hero-watermark')?.classList.add('is-revealed');
    }, 300);

    // Hero card (400ms)
    setTimeout(() => {
      document.getElementById('hero-card')?.classList.add('is-revealed');
    }, 400);

    // Partners (550ms)
    setTimeout(() => {
      document.getElementById('hero-partners')?.classList.add('is-revealed');
    }, 550);

    // Rating (650ms)
    setTimeout(() => {
      document.getElementById('hero-rating')?.classList.add('is-revealed');
    }, 650);

    // CTAs (750ms)
    setTimeout(() => {
      document.getElementById('hero-ctas')?.classList.add('is-revealed');
    }, 750);

    // Status bar (900ms)
    setTimeout(() => {
      document.getElementById('hero-status-bar')?.classList.add('is-revealed');
    }, 900);
  }

  // 6. Liquid Cursor Reveal on Hero
  const heroCanvas = document.getElementById('hero-canvas');
  const heroSection = document.getElementById('home');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroCanvas && heroSection && !prefersReducedMotion) {
    const ctx = heroCanvas.getContext('2d');
    const brushRadius = 143;
    const decay = 0.016;

    // Offscreen cover canvas and brush canvas
    const coverCanvas = document.createElement('canvas');
    const coverCtx = coverCanvas.getContext('2d');
    const brushCanvas = document.createElement('canvas');
    const brushCtx = brushCanvas.getContext('2d');

    const afterImg = new Image();
    afterImg.crossOrigin = 'anonymous';
    // afterSrc = .../hero/before.jpg
    afterImg.src = 'https://api.getlayers.ai/storage/v1/object/public/public/assets/lumora-e8b711fc68/hero/before.jpg';

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0, height = 0;
    let radius = brushRadius * dpr;
    let diam = Math.ceil(radius * 2);

    brushCanvas.width = diam;
    brushCanvas.height = diam;

    function resizeLiquid() {
      const rect = heroSection.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.floor(rect.width * dpr);
      height = Math.floor(rect.height * dpr);

      heroCanvas.width = width;
      heroCanvas.height = height;
      coverCanvas.width = width;
      coverCanvas.height = height;

      radius = brushRadius * dpr;
      diam = Math.ceil(radius * 2);
      brushCanvas.width = diam;
      brushCanvas.height = diam;

      drawCoverImage();
    }

    function drawCoverImage() {
      if (!afterImg.complete || !afterImg.naturalWidth) return;
      const imgRatio = afterImg.naturalWidth / afterImg.naturalHeight;
      const canvasRatio = width / height;
      let dw, dh, dx, dy;
      if (canvasRatio > imgRatio) {
        dw = width;
        dh = width / imgRatio;
        dx = 0;
        dy = (height - dh) / 2;
      } else {
        dh = height;
        dw = height * imgRatio;
        dx = (width - dw) / 2;
        dy = 0;
      }
      coverCtx.clearRect(0, 0, width, height);
      coverCtx.drawImage(afterImg, dx, dy, dw, dh);
    }

    afterImg.onload = () => {
      resizeLiquid();
    };

    const ro = new ResizeObserver(() => {
      resizeLiquid();
    });
    ro.observe(heroSection);

    let points = [];
    let lastPoint = null;
    let idle = 0;

    window.addEventListener('pointermove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const px = (e.clientX - rect.left) * dpr;
      const py = (e.clientY - rect.top) * dpr;

      if (px < -radius || py < -radius || px > width + radius || py > height + radius) {
        lastPoint = null;
        return;
      }

      if (!lastPoint) {
        lastPoint = { x: px, y: py };
        points.push({ x: px, y: py });
        return;
      }

      const dx = px - lastPoint.x;
      const dy = py - lastPoint.y;
      const dist = Math.hypot(dx, dy);
      const step = Math.max(radius * 0.3, 1);
      const n = Math.min(Math.ceil(dist / step), 60);

      for (let i = 1; i <= n; i++) {
        points.push({
          x: lastPoint.x + (dx * i) / n,
          y: lastPoint.y + (dy * i) / n,
        });
      }
      lastPoint = { x: px, y: py };
    });

    function stamp(x, y) {
      const c = radius;
      brushCtx.clearRect(0, 0, diam, diam);
      brushCtx.globalCompositeOperation = 'source-over';

      const grad = brushCtx.createRadialGradient(c, c, 0, c, c, radius);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.55, 'rgba(255,255,255,0.82)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      brushCtx.fillStyle = grad;
      brushCtx.fillRect(0, 0, diam, diam);

      brushCtx.globalCompositeOperation = 'source-in';
      brushCtx.drawImage(coverCanvas, x - c, y - c, diam, diam, 0, 0, diam, diam);

      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(brushCanvas, x - c, y - c);
    }

    function liquidLoop() {
      const drawing = points.length > 0;
      if (drawing) {
        idle = 0;
      } else {
        idle++;
      }

      if (idle <= 120) {
        const fade = drawing ? decay : Math.min(decay + idle * 0.004, 0.5);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `rgba(0,0,0,${fade})`;
        ctx.fillRect(0, 0, width, height);

        if (drawing) {
          for (let i = 0; i < points.length; i++) {
            stamp(points[i].x, points[i].y);
          }
          points = [];
        }

        if (idle === 120) {
          ctx.clearRect(0, 0, width, height);
        }
      }

      requestAnimationFrame(liquidLoop);
    }
    requestAnimationFrame(liquidLoop);
  }

  // 7. HeroCard Carousel Cycle
  const carouselItems = [
    { caption: "Conversion design", title: "Crafted to convert." },
    { caption: "Engineering", title: "Built to scale." },
    { caption: "Brand systems", title: "Designed to last." },
  ];
  let activeCarouselIndex = 0;
  const captionEl = document.getElementById('carousel-caption');
  const titleEl = document.getElementById('carousel-title');
  const slotEl = document.getElementById('carousel-text-slot');
  const dashes = document.querySelectorAll('.carousel-dash');

  function updateCarousel(nextIdx, dir = 1) {
    if (nextIdx === activeCarouselIndex) return;
    activeCarouselIndex = (nextIdx + carouselItems.length) % carouselItems.length;

    // Animate transition
    if (slotEl) {
      slotEl.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
      slotEl.style.transform = `translateY(${dir > 0 ? '-14px' : '14px'})`;
      slotEl.style.opacity = '0';

      setTimeout(() => {
        if (captionEl) captionEl.textContent = carouselItems[activeCarouselIndex].caption;
        if (titleEl) titleEl.textContent = carouselItems[activeCarouselIndex].title;
        slotEl.style.transform = `translateY(${dir > 0 ? '14px' : '-14px'})`;

        requestAnimationFrame(() => {
          slotEl.style.transform = 'translateY(0)';
          slotEl.style.opacity = '1';
        });
      }, 200);
    }

    dashes.forEach((d, i) => {
      if (i === activeCarouselIndex) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  document.getElementById('carousel-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateCarousel(activeCarouselIndex + 1, 1);
  });
  document.getElementById('carousel-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateCarousel(activeCarouselIndex - 1, -1);
  });
  document.getElementById('carousel-card-click')?.addEventListener('click', (e) => {
    if (e.target.closest('.carousel-nav-btn')) return;
    updateCarousel(activeCarouselIndex + 1, 1);
  });

  // 8. Word Reveal for About Statement
  const aboutStatement = document.getElementById('about-statement-text');
  if (aboutStatement) {
    const part1 = "We partner with ambitious teams to ship ";
    const part2 = "digital products, brand systems, and the strategy that holds them together.";
    const words1 = part1.trim().split(' ');
    const words2 = part2.trim().split(' ');

    let html = '';
    let wordIdx = 0;
    words1.forEach(word => {
      html += `<span class="about-word" style="transition-delay:${wordIdx * 35}ms">${word}</span> `;
      wordIdx++;
    });
    words2.forEach(word => {
      html += `<span class="about-word about-gray" style="transition-delay:${wordIdx * 35}ms">${word}</span> `;
      wordIdx++;
    });
    aboutStatement.innerHTML = html;
  }

  // 9. IntersectionObserver for Reveal Items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // For line reveals inside
        entry.target.querySelectorAll('.line-reveal-inner').forEach((line, i) => {
          setTimeout(() => {
            line.style.transform = 'translateY(0%)';
            line.style.opacity = '1';
          }, i * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const REVEAL_SELECTOR = '.reveal-item, .about-h2, .portfolio-h2, .services-h2, .stats-h2, .footer-cta-h2';
  document.querySelectorAll('#about, .create-band-list, #works, #services, #stats-panel, #site-footer').forEach(sec => {
    // The container itself can be a reveal target (e.g. #stats-panel), not only its children.
    if (sec.matches(REVEAL_SELECTOR)) observer.observe(sec);
    sec.querySelectorAll(REVEAL_SELECTOR).forEach(el => {
      observer.observe(el);
    });
  });

  // 10. Scroll Count-up for Stats Panel
  const countNums = document.querySelectorAll('.count-num');
  let statsCompleted = false;

  function handleStatsScroll() {
    if (statsCompleted) return;
    const statsPanel = document.getElementById('stats-panel');
    if (!statsPanel) return;

    const rect = statsPanel.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const startY = window.innerHeight;
    const endY = window.innerHeight / 2;

    if (rect.top > startY) return;

    const progress = Math.min(Math.max((startY - elCenter) / (startY - endY), 0), 1);

    countNums.forEach(numEl => {
      const target = parseInt(numEl.getAttribute('data-target') || '0', 10);
      numEl.textContent = Math.round(progress * target);
    });

    if (progress >= 1) {
      statsCompleted = true;
      window.removeEventListener('scroll', throttledStatsScroll);
    }
  }

  let lastScrollTime = 0;
  function throttledStatsScroll() {
    const now = performance.now();
    if (now - lastScrollTime > 30) {
      lastScrollTime = now;
      handleStatsScroll();
    }
  }
  window.addEventListener('scroll', throttledStatsScroll, { passive: true });

  // 11. NavMenu Overlay Controls
  const navMenu = document.getElementById('nav-menu');
  const openMenuBtn = document.getElementById('open-menu-btn');
  const closeMenuBtn = document.getElementById('nav-close-btn');

  function openNavMenu() {
    if (!navMenu) return;
    navMenu.classList.add('is-open');
    stopScroll();
  }
  function closeNavMenu() {
    if (!navMenu) return;
    navMenu.classList.remove('is-open');
    startScroll();
  }

  openMenuBtn?.addEventListener('click', openNavMenu);
  closeMenuBtn?.addEventListener('click', closeNavMenu);

  // 12. Request Modal Controls & Form Submission
  const requestModal = document.getElementById('request-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFormView = document.getElementById('modal-form-view');
  const modalSuccessView = document.getElementById('modal-success-view');
  const projectForm = document.getElementById('project-form');
  const submitBtnText = document.getElementById('submit-btn-text');
  const successCloseBtn = document.getElementById('success-close-btn');

  function openModal() {
    closeNavMenu();
    if (!requestModal) return;
    requestModal.classList.add('is-open');
    stopScroll();
  }
  function closeModal() {
    if (!requestModal) return;
    requestModal.classList.remove('is-open');
    startScroll();
    setTimeout(() => {
      if (projectForm) projectForm.reset();
      if (modalFormView) modalFormView.style.display = 'block';
      if (modalSuccessView) modalSuccessView.style.display = 'none';
      if (submitBtnText) submitBtnText.textContent = 'Send request';
    }, 300);
  }

  document.querySelectorAll('.open-modal-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  successCloseBtn?.addEventListener('click', closeModal);
  requestModal?.addEventListener('click', (e) => {
    if (e.target === requestModal) closeModal();
  });

  // Escape key listener for overlays
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (requestModal?.classList.contains('is-open')) {
        closeModal();
      } else if (navMenu?.classList.contains('is-open')) {
        closeNavMenu();
      }
    }
  });

  // Stubbed form submit
  projectForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submitBtnText) submitBtnText.textContent = 'Sending…';
    setTimeout(() => {
      if (modalFormView) modalFormView.style.display = 'none';
      if (modalSuccessView) modalSuccessView.style.display = 'flex';
    }, 400);
  });
}
