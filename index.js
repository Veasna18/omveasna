
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width  = '50px';
    cursorRing.style.height = '50px';
    cursorRing.style.borderColor = 'rgba(124,110,255,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.style.width  = '32px';
    cursorRing.style.height = '32px';
    cursorRing.style.borderColor = 'rgba(124,110,255,0.5)';
  });
});

const themes = ['purple', 'blue', 'green', 'pink', 'orange'];

const panel = document.createElement('div');
panel.className = 'color-panel';
panel.innerHTML = `
  <div class="color-swatches" id="colorSwatches">
    ${themes.map(t => `
      <div class="swatch swatch-${t}" data-theme="${t}" data-label="${t.charAt(0).toUpperCase()+t.slice(1)}"></div>
    `).join('')}
    <div class="dark-light-btn" id="darkLightBtn" data-label="Toggle Dark/Light">🌙</div>
  </div>
  <button class="color-panel-toggle" id="colorPanelToggle" title="Change color theme">🎨</button>
`;
document.body.appendChild(panel);

const swatchesEl       = document.getElementById('colorSwatches');
const colorPanelToggle = document.getElementById('colorPanelToggle');
const darkLightBtn     = document.getElementById('darkLightBtn');

colorPanelToggle.addEventListener('click', () => {
  swatchesEl.classList.toggle('open');
  colorPanelToggle.style.transform = swatchesEl.classList.contains('open')
    ? 'scale(1.1) rotate(90deg)' : '';
});

document.addEventListener('click', e => {
  if (!panel.contains(e.target)) {
    swatchesEl.classList.remove('open');
    colorPanelToggle.style.transform = '';
  }
});

function applyColorTheme(theme) {
  themes.forEach(t => document.documentElement.classList.remove('theme-' + t));
  document.documentElement.classList.add('theme-' + theme);
  localStorage.setItem('colorTheme', theme);
  document.querySelectorAll('.swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.theme === theme);
  });
}

const savedTheme = localStorage.getItem('colorTheme') || 'purple';
applyColorTheme(savedTheme);

document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => applyColorTheme(swatch.dataset.theme));
});

function applyDarkLight(isLight) {
  document.documentElement.classList.toggle('light', isLight);
  darkLightBtn.textContent = isLight ? '☀️' : '🌙';
  darkLightBtn.dataset.label = isLight ? 'Dark Mode' : 'Light Mode';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

const savedLight = localStorage.getItem('theme') === 'light';
applyDarkLight(savedLight);

darkLightBtn.addEventListener('click', () => {
  applyDarkLight(!document.documentElement.classList.contains('light'));
});

const toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
  if (savedLight) toggleBtn.textContent = '☀️';
  toggleBtn.addEventListener('click', () => {
    const isLight = !document.documentElement.classList.contains('light');
    applyDarkLight(isLight);
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
  });
}

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width  = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

const sections = document.querySelectorAll('section[id]');
const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => spyObserver.observe(s));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const target = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = target; }, 200);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.3)' : 'none';
});
