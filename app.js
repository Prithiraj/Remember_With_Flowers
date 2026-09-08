const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function closeMenu({ restoreFocus = false } = {}) {
  if (!menuToggle || !nav) return;
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  if (restoreFocus) menuToggle.focus();
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const nextOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(nextOpen));
    menuToggle.setAttribute('aria-label', nextOpen ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', nextOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('is-open')) return;
    if (!event.target.closest('[data-nav]') && !event.target.closest('[data-menu-toggle]')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu({ restoreFocus: true });
  });
}

const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

const revealNodes = [...document.querySelectorAll('.reveal')];
if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });
  revealNodes.forEach((node) => observer.observe(node));
}

// Three.js is decorative only. The real florist photography remains the hero.
async function initPetals() {
  const mount = document.querySelector('[data-petals]');
  if (!mount || reducedMotion.matches) return;

  let THREE;
  try {
    THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
  } catch {
    return; // graceful static fallback if the CDN or WebGL dependency is unavailable
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  mount.appendChild(canvas);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    canvas.remove();
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 10;

  const petalGeometry = new THREE.ShapeGeometry((() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.42);
    shape.bezierCurveTo(0.44, -0.22, 0.5, 0.22, 0, 0.56);
    shape.bezierCurveTo(-0.5, 0.22, -0.44, -0.22, 0, -0.42);
    return shape;
  })(), 8);

  const palette = [0xd96847, 0xe0a78c, 0x8c426f, 0xa7b39c, 0xf1cbb7];
  const petals = [];
  const petalCount = window.innerWidth < 700 ? 9 : 16;

  for (let i = 0; i < petalCount; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: palette[i % palette.length],
      transparent: true,
      opacity: 0.075 + Math.random() * 0.055,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const petal = new THREE.Mesh(petalGeometry, material);
    const scale = 0.22 + Math.random() * 0.38;
    petal.scale.setScalar(scale);
    petal.position.set(
      -7.5 + Math.random() * 15,
      -5 + Math.random() * 10,
      -2 + Math.random() * 4,
    );
    petal.rotation.z = Math.random() * Math.PI * 2;
    petal.userData.speed = 0.00009 + Math.random() * 0.00008;
    petal.userData.sway = 0.35 + Math.random() * 0.65;
    petal.userData.phase = Math.random() * Math.PI * 2;
    petals.push(petal);
    scene.add(petal);
  }

  const resize = () => {
    const rect = mount.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(mount);

  let raf = 0;
  let visible = !document.hidden;
  let last = performance.now();

  const frame = (now) => {
    if (!visible) return;
    const dt = Math.min(now - last, 40);
    last = now;
    petals.forEach((petal, index) => {
      petal.position.y += dt * petal.userData.speed;
      petal.position.x += Math.sin(now * 0.00018 + petal.userData.phase) * 0.0007 * petal.userData.sway * dt;
      petal.rotation.z += dt * 0.00003 * (index % 2 ? 1 : -1);
      if (petal.position.y > 5.5) {
        petal.position.y = -5.5;
        petal.position.x = -7.5 + Math.random() * 15;
      }
    });
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (raf || reducedMotion.matches) return;
    visible = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    visible = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  reducedMotion.addEventListener?.('change', (event) => {
    if (event.matches) {
      stop();
      mount.style.display = 'none';
    } else {
      mount.style.display = '';
      start();
    }
  });
  start();
}

initPetals();
