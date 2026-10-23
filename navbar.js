(function () {
  const styles = `
    #navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 0 1.5rem; height: 70px; display: flex; align-items: center; justify-content: space-between; transition: all 0.4s ease; background: rgba(8,14,26,0.92); border-bottom: 1px solid var(--border, rgba(212,175,55,0.2)); }
    #navbar.scrolled { background: rgba(8,14,26,0.97); backdrop-filter: blur(16px); box-shadow: 0 4px 30px rgba(0,0,0,0.35); }
    #navbar .nav-logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
    #navbar .nav-logo-mark { display: inline-flex; align-items: center; justify-content: center; width: 2.2rem; height: 2.2rem; border-radius: 12px; background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.05)); border: 1px solid rgba(212,175,55,0.35); color: var(--gold, #d4af37); font-family: 'Cinzel', serif; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.08em; }
    #navbar .nav-logo-text { font-family: 'Cinzel', serif; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.05em; }
    #navbar .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
    #navbar .nav-links a { color: var(--text-secondary, var(--muted, #94a3b8)); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.3s; position: relative; }
    #navbar .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1.5px; background: var(--gold, #d4af37); transition: width 0.3s ease; }
    #navbar .nav-links a:hover { color: var(--gold, #d4af37); }
    #navbar .nav-links a:hover::after { width: 100%; }
    #navbar .nav-cta, #mobile-menu .nav-cta { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #bf953f, #d4af37, #aa771c); color: #080e1a !important; font-weight: 700 !important; padding: 0.55rem 1.2rem; border-radius: 50px; box-shadow: 0 4px 15px rgba(212,175,55,0.3); text-decoration: none; }
    #navbar .nav-cta::after { display: none; }
    #navbar .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; position: relative; z-index: 1100; }
    #navbar .hamburger span { display: block; width: 24px; height: 2px; background: var(--text-primary, var(--text, #f1f5f9)); border-radius: 2px; transition: all 0.3s; }
    #navbar .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    #navbar .hamburger.open span:nth-child(2) { opacity: 0; }
    #navbar .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    #mobile-menu { position: fixed; inset: 0; display: none; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; padding: 2rem 1.5rem 3rem; background: rgba(8,14,26,0.98); backdrop-filter: blur(18px); z-index: 1200; }
    #mobile-menu.open { display: flex; }
    #mobile-menu .mobile-close { position: absolute; top: 1.25rem; right: 1.25rem; width: 48px; height: 48px; border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; background: rgba(255,255,255,0.02); color: var(--text-primary, var(--text, #f1f5f9)); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
    #mobile-menu .mobile-brand { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 1rem; }
    #mobile-menu .mobile-brand-mark { width: 3rem; height: 3rem; border-radius: 16px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.05)); border: 1px solid rgba(212,175,55,0.35); color: var(--gold, #d4af37); font-family: 'Cinzel', serif; font-weight: 700; }
    #mobile-menu a { color: var(--text-primary, var(--text, #f1f5f9)); text-decoration: none; font-size: clamp(1.2rem, 3vw, 1.8rem); font-weight: 600; padding: 0.75rem 1rem; width: min(90vw, 350px); text-align: center; border-radius: 14px; transition: all 0.25s ease; }
    #mobile-menu a:hover { background: rgba(212,175,55,0.08); color: var(--gold, #d4af37); }
    #mobile-menu .nav-cta { width: min(90vw, 320px); font-size: 1rem; }
    #mobile-menu .mobile-socials { display: flex; align-items: center; justify-content: center; gap: 0.9rem; margin-top: 1rem; }
    #mobile-menu .mobile-socials a { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; padding: 0; font-size: 1.2rem; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.02); border-radius: 50%; }
    #mobile-menu .mobile-email { color: var(--gold, #d4af37); font-size: 0.92rem; text-align: center; margin-top: 0.5rem; }
    @media (max-width: 900px) { #navbar .nav-links { display: none; } #navbar .hamburger { display: flex; } }
  `;
  const styleNode = document.createElement('style');
  styleNode.dataset.component = 'navbar';
  styleNode.textContent = styles;
  document.head.appendChild(styleNode);

  const mountNode = document.getElementById('navbar-root');
  if (!mountNode) return;

  const currentPath = window.location.pathname.replace(/\\/g, '/');
  const isHomePage = currentPath === '/' || currentPath.endsWith('//') || currentPath === '';

  const navLinks = [
    { label: 'Inicio', href: isHomePage ? '#inicio' : '/#inicio' },
    { label: 'Servicios', href: isHomePage ? '#servicios' : '/#servicios' },
    { label: 'Aliados', href: isHomePage ? '#aliados' : '/#aliados' },
    { label: 'Contacto', href: isHomePage ? '#contacto' : '/#contacto' }
  ];

  mountNode.innerHTML = `
    <nav id="navbar" role="navigation" aria-label="Navegación principal">
      <a href="${isHomePage ? '#inicio' : '/'}" class="nav-logo" aria-label="Ir al inicio">
        <span class="nav-logo-mark">EJ</span>
        <span class="nav-logo-text gold-text">EJ - Estudio Jurídico</span>
      </a>
      <ul class="nav-links">
        ${navLinks.map(link => `
          <li><a href="${link.href}">${link.label}</a></li>
        `).join('')}
        <li><a href="tarjeta.html" class="nav-cta" id="nav-tarjeta-btn">Ver Tarjeta Digital</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Menú móvil">
      <button class="mobile-close" id="mobile-close" aria-label="Cerrar menú">
        <i data-lucide="x" style="width:22px;height:22px;"></i>
      </button>
      <div class="mobile-brand">
        <span class="mobile-brand-mark">EJ</span>
        <span class="gold-text" style="font-family:'Cinzel',serif;font-weight:700;letter-spacing:0.06em;">EJ - Estudio Jurídico</span>
      </div>
      ${navLinks.map(link => `
        <a href="${link.href}" class="mobile-link">${link.label}</a>
      `).join('')}
      <a href="tarjeta.html" class="nav-cta" style="display:inline-block;text-align:center;color:#080e1a!important;">Ver Tarjeta Digital</a>
      <div class="mobile-socials">
        <a href="https://wa.me/593983201691?text=Hola%2C%20quiero%20una%20consulta%20legal." target="_blank" rel="noopener" aria-label="WhatsApp"><i data-lucide="message-circle" style="width:20px;height:20px;"></i></a>
        <a href="mailto:jyepezlexis@gmail.com" aria-label="Correo electrónico"><i data-lucide="mail" style="width:20px;height:20px;"></i></a>
        <a href="tel:0983201691" aria-label="Llamar"><i data-lucide="phone" style="width:20px;height:20px;"></i></a>
      </div>
      <div class="mobile-email">jyepezlexis@gmail.com</div>
    </div>
  `;

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  if (!navbar || !hamburger || !mobileMenu || !mobileClose) return;

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  mobileClose.addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  const mobileCta = document.querySelector('.mobile-menu .nav-cta');
  if (mobileCta) {
    mobileCta.addEventListener('click', closeMobileMenu);
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
})();
