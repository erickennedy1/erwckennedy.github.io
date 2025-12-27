/**
 * MAIN.JS
 * Renderiza projetos e gerencia interações
 */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupSmoothScroll();
  setupAnimations();
});

/**
 * Renderiza os cards de projeto na grid
 */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  
  grid.innerHTML = PROJECTS.map(project => `
    <a href="projeto.html?id=${project.id}" class="project-card">
      ${project.image 
        ? `<img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.outerHTML='<div class=\\'project-image-placeholder\\'>${project.icon}</div>'">`
        : `<div class="project-image-placeholder">${project.icon}</div>`
      }
      <div class="project-content">
        <h3 class="project-title">
          <span class="project-title-icon">${project.icon}</span>
          ${project.title}
        </h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
  `).join('');
}

/**
 * Scroll suave para âncoras
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Animações de scroll (Intersection Observer)
 */
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observa os cards de projeto
  document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
}
