// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');

// Theme Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
const html = document.documentElement;

// Modal Elements
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalStack = document.getElementById('modal-stack');
const modalMainImg = document.getElementById('modal-main-img');
const modalCarouselImg = document.getElementById('modal-carousel-img');
const modalCarouselCaption = document.getElementById('modal-carousel-caption');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Zoom Elements
const zoomModal = document.getElementById('zoom-modal');
const zoomBtn = document.getElementById('zoom-btn');
const zoomClose = document.getElementById('zoom-close');
const zoomImg = document.getElementById('zoom-img');
const zoomPrev = document.getElementById('zoom-prev');
const zoomNext = document.getElementById('zoom-next');

// State
let currentProject = null;
let currentImageIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjects(projects);
  setupFilters();
  setupModalListeners();
  setupZoomListeners();
  setupThemeListeners();
});

// Theme Logic
function initTheme() {
  // Check localStorage or default to dark
  if (localStorage.theme === 'light') {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark'); // Default is dark
  }
}

function toggleTheme() {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

function setupThemeListeners() {
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);
}

// Render Projects
function renderProjects(projectsToRender) {
  projectsGrid.innerHTML = '';

  projectsToRender.forEach(project => {
    const card = document.createElement('div');
    // Added dark mode classes
    card.className = 'project-card group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer';
    card.setAttribute('data-category', project.category);
    card.onclick = () => openModal(project.id);

    const stackHtml = project.stack.slice(0, 3).map(tech =>
      `<span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">${tech}</span>`
    ).join('');

    card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img src="${project.mainImage}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span class="text-white text-sm font-medium">Ver detalles <i data-lucide="arrow-right" class="inline w-4 h-4 ml-1"></i></span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">${project.title}</h3>
                </div>
                <p class="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">
                    ${project.shortDescription}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${stackHtml}
                </div>
            </div>
        `;
    projectsGrid.appendChild(card);
  });

  // Re-initialize icons for new elements
  if (window.lucide) lucide.createIcons();
}

// Filters
function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // UI Updates
      filterBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-700');
      });
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-700');
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');

      // Filtering Logic
      const filterValue = btn.getAttribute('data-filter');
      const filteredProjects = filterValue === 'all'
        ? projects
        : projects.filter(p => p.category === filterValue);

      // Animate out
      projectsGrid.style.opacity = '0';
      setTimeout(() => {
        renderProjects(filteredProjects);
        projectsGrid.style.opacity = '1';
      }, 200);
    });
  });
}

// Modal Logic
function openModal(projectId) {
  currentProject = projects.find(p => p.id === projectId);
  if (!currentProject) return;

  // Reset Carousel
  currentImageIndex = 0;

  // Populate Data
  modalTitle.textContent = currentProject.title;
  modalDesc.textContent = currentProject.fullDescription;
  modalMainImg.src = currentProject.mainImage;

  modalStack.innerHTML = currentProject.stack.map(tech =>
    `<span class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800">${tech}</span>`
  ).join('');

  updateCarousel();

  // Show Modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function setupModalListeners() {
  modalCloseBtn.addEventListener('click', closeModal);

  // Close on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      if (zoomModal && !zoomModal.classList.contains('hidden')) return;
      closeModal();
    }
  });

  // Carousel Controls
  prevBtn.addEventListener('click', () => {
    if (!currentProject.gallery.length) return;
    currentImageIndex = (currentImageIndex - 1 + currentProject.gallery.length) % currentProject.gallery.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    if (!currentProject.gallery.length) return;
    currentImageIndex = (currentImageIndex + 1) % currentProject.gallery.length;
    updateCarousel();
  });
}

function updateCarousel() {
  if (currentProject.gallery && currentProject.gallery.length > 0) {
    const imageObj = currentProject.gallery[currentImageIndex];
    modalCarouselImg.src = imageObj.url;
    modalCarouselCaption.textContent = imageObj.caption;
  } else {
    // Fallback if no gallery
    modalCarouselImg.src = currentProject.mainImage;
    modalCarouselCaption.textContent = "Vista principal del proyecto";
  }
}

// =========================================
// Visual Effects
// =========================================

// --- Cursor Follower ---
const cursorGlow = document.getElementById('cursor-glow');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  if (!cursorGlow) return;

  // Smooth interpolation
  const dx = mouseX - cursorX;
  const dy = mouseY - cursorY;

  cursorX += dx * 0.1;
  cursorY += dy * 0.1;

  cursorGlow.style.left = `${cursorX}px`;
  cursorGlow.style.top = `${cursorY}px`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

// --- Particle Network Animation (Hero) ---
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  // Configuration
  const particleCount = 50;
  const connectionDistance = 150;
  const moveSpeed = 0.5;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * moveSpeed;
      this.vy = (Math.random() - 0.5) * moveSpeed;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(37, 99, 235, 0.5)'; // Blue-600 in light
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const lineColor = isDark ? '255, 255, 255' : '37, 99, 235'; // Blue-600

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${lineColor}, ${1 - dist / connectionDistance})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  // Init
  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });
  resize();
  initParticles();
  animateParticles();
}

// Zoom Logic
function setupZoomListeners() {
  if (!zoomBtn || !zoomModal) return;

  // Open Zoom
  zoomBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentProject && currentProject.gallery && currentProject.gallery.length > 0) {
      // Use current image index
      zoomImg.src = currentProject.gallery[currentImageIndex].url;
      zoomModal.classList.remove('hidden');
    } else if (currentProject) {
      // Fallback if no gallery (just main image)
      zoomImg.src = currentProject.mainImage;
      zoomModal.classList.remove('hidden');
    }
  });

  // Close Zoom
  zoomClose.addEventListener('click', () => {
    zoomModal.classList.add('hidden');
  });

  // Close on click outside
  zoomModal.addEventListener('click', (e) => {
    if (e.target !== zoomImg && !e.target.closest('button')) {
      zoomModal.classList.add('hidden');
    }
  });

  // Navigation
  zoomPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentProject.gallery || !currentProject.gallery.length) return;
    currentImageIndex = (currentImageIndex - 1 + currentProject.gallery.length) % currentProject.gallery.length;
    updateCarousel(); // Update underlying carousel
    zoomImg.src = currentProject.gallery[currentImageIndex].url;
  });

  zoomNext.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentProject.gallery || !currentProject.gallery.length) return;
    currentImageIndex = (currentImageIndex + 1) % currentProject.gallery.length;
    updateCarousel();
    zoomImg.src = currentProject.gallery[currentImageIndex].url;
  });

  // Escape key for Zoom
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !zoomModal.classList.contains('hidden')) {
      zoomModal.classList.add('hidden');
      e.stopPropagation();
    }
  });
}
