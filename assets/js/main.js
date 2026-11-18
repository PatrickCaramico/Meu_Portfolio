/* =====================================================================
   PORTFÓLIO — Patrick Souza · interações (JavaScript puro, sem libs)
   1. Tema claro/escuro (com persistência)
   2. Menu mobile acessível
   3. Header com borda ao rolar
   4. Link ativo conforme a seção visível
   5. Animação de entrada ao rolar (IntersectionObserver)
   6. Brilho que segue o cursor nos case studies
   7. Copiar e-mail + aviso (toast)
   8. Ano dinâmico no rodapé
   ===================================================================== */
(() => {
  'use strict';

  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---------- 1. TEMA ----------
     O tema inicial já foi aplicado por um script inline no <head>
     (evita "piscar"). Aqui só tratamos o clique no botão. */
  const themeBtn = $('#theme-toggle');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  const currentTheme = () =>
    root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');

  const updateThemeLabel = () => {
    const next = currentTheme() === 'dark' ? 'claro' : 'escuro';
    themeBtn?.setAttribute('aria-label', `Ativar tema ${next}`);
  };

  themeBtn?.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.setAttribute('data-theme', next);
      updateThemeLabel();
    };
    // Transição suave nativa quando o navegador suporta View Transitions
    document.startViewTransition ? document.startViewTransition(apply) : apply();
    try { localStorage.setItem('theme', next); } catch (e) { /* modo privado */ }
  });
  updateThemeLabel();

  /* ---------- 2. MENU MOBILE ---------- */
  const navToggle = $('#nav-toggle');
  const navMenu = $('#nav-menu');

  const setMenu = (open) => {
    navMenu.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  navToggle?.addEventListener('click', () => {
    setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  // Fecha ao clicar num link, ao apertar Esc ou ao clicar fora
  $$('.nav__link').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      setMenu(false);
      navToggle.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !e.target.closest('.nav')) setMenu(false);
  });

  /* ---------- 3. HEADER AO ROLAR ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 4. LINK ATIVO ----------
     Observa as seções e marca no menu a que está no meio da tela. */
  const links = new Map($$('.nav__link').map((a) => [a.hash.slice(1), a]));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const active = a.hash.slice(1) === entry.target.id;
          a.classList.toggle('is-active', active);
          active ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  $$('main section[id]').forEach((s) => sectionObserver.observe(s));

  /* ---------- 5. ANIMAÇÃO DE ENTRADA ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target); // anima só uma vez
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 6. BRILHO SEGUINDO O CURSOR ----------
     Apenas em dispositivos com mouse; atualiza variáveis CSS via rAF. */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.case').forEach((card) => {
      let frame = 0;
      card.addEventListener('pointermove', (e) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
      });
    });
  }

  /* ---------- 7. COPIAR E-MAIL ---------- */
  const toast = $('#toast');
  let toastTimer = 0;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => (toast.textContent = ''), 300);
    }, 2600);
  };

  const copyBtn = $('#copy-email');
  copyBtn?.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(`E-mail copiado: ${email}`);
    } catch (e) {
      // Sem permissão de clipboard (ex.: http): mostra o e-mail para copiar à mão
      showToast(email);
    }
  });

  /* ---------- 8. ANO NO RODAPÉ ---------- */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
