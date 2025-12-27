/**
 * PROJECT-PAGE.JS
 * Carrega e renderiza projeto individual baseado na URL
 */

document.addEventListener('DOMContentLoaded', () => {
  loadProject();
});

/**
 * Pega o ID do projeto da URL e carrega
 */
function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  
  if (!projectId) {
    showError('Projeto não especificado');
    return;
  }
  
  const project = PROJECTS.find(p => p.id === projectId);
  
  if (!project) {
    showError('Projeto não encontrado');
    return;
  }
  
  renderProject(project);
  document.title = `${project.title} — Eric Kennedy`;
}

/**
 * Renderiza o conteúdo do projeto
 */
function renderProject(project) {
  const container = document.getElementById('projectContent');
  
  container.innerHTML = `
    <!-- Voltar -->
    <a href="index.html#projects" class="back-link">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Voltar aos projetos
    </a>
    
    <!-- Header -->
    <header class="project-header">
      <span class="project-icon">${project.icon}</span>
      <h1 class="project-page-title">${project.title}</h1>
      
      <div class="project-meta">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="project-link project-link--primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Ver no GitHub
        </a>
        ${project.demo ? `
          <a href="${project.demo}" target="_blank" class="project-link project-link--secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Ver Demo
          </a>
        ` : ''}
      </div>
    </header>
    
    <!-- Imagem Principal -->
    ${project.image 
      ? `<img src="${project.image}" alt="${project.title}" class="project-hero-image" onerror="this.outerHTML='<div class=\\'project-hero-placeholder\\'>${project.icon}</div>'">`
      : `<div class="project-hero-placeholder">${project.icon}</div>`
    }
    
    <!-- Descrição -->
    <section class="project-section">
      <h2 class="project-section-title">Sobre o Projeto</h2>
      <p class="project-description">${project.details.fullDescription.trim()}</p>
    </section>
    
    <!-- Features -->
    ${project.details.features && project.details.features.length > 0 ? `
      <section class="project-section">
        <h2 class="project-section-title">Funcionalidades</h2>
        <ul class="project-features">
          ${project.details.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </section>
    ` : ''}
    
    <!-- Galeria -->
    <section class="project-section">
      <h2 class="project-section-title">Screenshots</h2>
      ${project.details.images && project.details.images.length > 0 ? `
        <div class="project-gallery">
          ${project.details.images.map((img, i) => `
            <div class="gallery-item" onclick="openLightbox('${img}')">
              <img src="${img}" alt="Screenshot ${i + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="no-images">
          <div class="no-images-icon">📸</div>
          <p>Screenshots em breve!</p>
          <p style="font-size: 0.85rem; margin-top: 8px;">
            Adicione imagens em <code>assets/images/projects/${project.id}/</code>
          </p>
        </div>
      `}
    </section>
    
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox" onclick="closeLightbox()">
      <button class="lightbox-close" aria-label="Fechar">&times;</button>
      <img src="" alt="Screenshot ampliada" id="lightboxImage">
    </div>
  `;
}

/**
 * Mostra erro quando projeto não existe
 */
function showError(message) {
  const container = document.getElementById('projectContent');
  container.innerHTML = `
    <div style="text-align: center; padding: 100px 20px;">
      <div style="font-size: 4rem; margin-bottom: 24px;">🔍</div>
      <h1 style="font-size: 1.5rem; margin-bottom: 16px;">${message}</h1>
      <p style="color: var(--text-secondary); margin-bottom: 32px;">
        O projeto que você procura não foi encontrado.
      </p>
      <a href="index.html#projects" class="project-link project-link--primary" style="display: inline-flex;">
        Ver todos os projetos
      </a>
    </div>
  `;
}

/**
 * Abre lightbox com imagem
 */
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  img.src = imageSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Fecha lightbox
 */
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Fecha lightbox com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
