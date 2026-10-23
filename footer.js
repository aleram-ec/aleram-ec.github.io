(function () {
  const styles = `
    #footer-root > footer { background: #05080f; border-top: 1px solid rgba(212,175,55,0.12); padding: 3rem 1.5rem 1.5rem; width: 100%; margin-top: auto; position: relative; z-index: 1; }
    #footer-root .footer-inner { max-width: 1100px; margin: 0 auto; }
    #footer-root .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 2.5rem; }
    #footer-root .nav-logo-mark { display: inline-flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; border-radius: 16px; background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.05)); border: 1px solid rgba(212,175,55,0.35); color: var(--gold, #d4af37); font-family: 'Cinzel', serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.08em; }
    #footer-root .footer-brand-name { font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 600; margin-top: 0.75rem; margin-bottom: 0.5rem; }
    #footer-root .footer-brand-desc { font-size: 0.85rem; color: var(--muted, var(--text-secondary, #94a3b8)); line-height: 1.7; max-width: 300px; }
    #footer-root .footer-col-title { font-size: 0.75rem; font-weight: 700; color: var(--gold, #d4af37); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1rem; }
    #footer-root .footer-links { display: flex; flex-direction: column; gap: 0.6rem; }
    #footer-root .footer-links a { color: var(--muted, var(--text-secondary, #94a3b8)); text-decoration: none; font-size: 0.875rem; transition: color 0.3s; }
    #footer-root .footer-links a:hover { color: var(--gold, #d4af37); }
    #footer-root .footer-bottom { padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem; text-align: center; }
    #footer-root .footer-bottom p { width: 100%; font-size: 0.8rem; color: var(--muted, var(--text-secondary, #94a3b8)); margin: 0; }
    @media (max-width: 768px) { #footer-root .footer-top { grid-template-columns: 1fr; gap: 2rem; } #footer-root .footer-bottom { flex-direction: column; align-items: center; } }
  `;
  const styleNode = document.createElement('style');
  styleNode.dataset.component = 'footer';
  styleNode.textContent = styles;
  document.head.appendChild(styleNode);

  const mountNode = document.getElementById('footer-root');
  if (!mountNode) return;

  mountNode.innerHTML = `
    <footer role="contentinfo">
      <div class="footer-inner">
        <div class="footer-top">
          <div>
            <div class="nav-logo-mark" style="width:3rem;height:3rem;border-radius:16px;">EJ</div>
            <div class="footer-brand-name gold-text">EJ - Estudio Jurídico</div>
            <p class="footer-brand-desc">Asesoría legal especializada en Quito y zona norte del Ecuador. Atención directa, ética y comprometida. Propiedad: aleram-ec.</p>
          </div>
          <div>
            <div class="footer-col-title">Navegación</div>
            <nav class="footer-links" aria-label="Navegación del pie de página">
              <a href="/">Inicio</a>
              <a href="/#servicios">Servicios</a>
              <a href="/#aliados">Aliados</a>
              <a href="/#contacto">Contacto</a>
              <a href="tarjeta.html">Tarjeta Digital</a>
            </nav>
          </div>
          <div>
            <div class="footer-col-title">Legal</div>
            <nav class="footer-links" aria-label="Páginas legales">
              <a href="terminos.html">Términos y Condiciones</a>
              <a href="privacidad.html">Política de Privacidad</a>
              <a href="cookies.html">Política de Cookies</a>
            </nav>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© <span id="footer-year"></span> aleram-ec | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;

  const yearNode = document.getElementById('footer-year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
})();
