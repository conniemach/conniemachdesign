class SiteNav extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    const link = (page, href, label) => {
      const isActive = page === active ? ' is-active' : '';
      return `<a href="${href}" class="${isActive.trim()}">${label}</a>`;
    };
    this.innerHTML = `
      <nav class="nav">
        <a href="index.html" class="nav__logo" aria-label="Home">
          <img src="assets/icons/logo.svg" alt="CM logo">
        </a>
        <div class="nav__links">
          ${link('experience', 'experience.html', 'Experience')}
          ${link('about', 'about.html', 'About')}
        </div>
      </nav>
    `;
  }
}

customElements.define('site-nav', SiteNav);

class ProjectCard extends HTMLElement {
  connectedCallback() {
    const tag = this.getAttribute('tag') || '';
    const title = this.getAttribute('title') || '';
    const image = this.getAttribute('image') || '';
    const href = this.getAttribute('href') || '#';
    this.innerHTML = `
      <a class="project-card" href="${href}">
        <div class="project-card__text">
          <span class="project-card__tag">${tag}</span>
          <h3 class="project-card__title">${title}</h3>
        </div>
        <img class="project-card__image" src="${image}" alt="${title}">
      </a>
    `;
  }
}

customElements.define('project-card', ProjectCard);
