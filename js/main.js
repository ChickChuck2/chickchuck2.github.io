import { AppHeader } from './components/AppHeader.js';
import { AppSidebar } from './components/AppSidebar.js';
import { HeroSection } from './components/HeroSection.js';
import { AboutSection } from './components/AboutSection.js';
import { TimelineSection } from './components/TimelineSection.js';
import { SkillsSection } from './components/SkillsSection.js';
import { StatsSection } from './components/StatsSection.js';
import { OptimizationSection } from './components/OptimizationSection.js';
import { ProjectsSection } from './components/ProjectsSection.js';
import { ProjectModal } from './components/ProjectModal.js';
import { TestimonialsSection } from './components/TestimonialsSection.js';
import { ContactSection } from './components/ContactSection.js';
import { AppFooter } from './components/AppFooter.js';
import { BackToTop } from './components/BackToTop.js';

import { initThreeJS } from './utils/ThreeJS.js';
import { initParticlesCanvas } from './utils/Particles.js';
import { i18n } from './utils/i18n.js';

// Registro dos Custom Elements (Web Components)
customElements.define('app-header', AppHeader);
customElements.define('app-sidebar', AppSidebar);
customElements.define('hero-section', HeroSection);
customElements.define('about-section', AboutSection);
customElements.define('timeline-section', TimelineSection);
customElements.define('skills-section', SkillsSection);
customElements.define('stats-section', StatsSection);
customElements.define('optimization-section', OptimizationSection);
customElements.define('projects-section', ProjectsSection);
customElements.define('project-modal', ProjectModal);
customElements.define('testimonials-section', TestimonialsSection);
customElements.define('contact-section', ContactSection);
customElements.define('app-footer', AppFooter);
customElements.define('back-to-top', BackToTop);

// Inicialização Global Pós-Renderização
document.addEventListener('DOMContentLoaded', () => {
    // 1. Iniciar bibliotecas 3D e Canvas
    initThreeJS();
    initParticlesCanvas();

    // 2. Global Fade-In Observer para seções
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-loaded');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aguarda um pequeno ciclo para garantir que os Web Components injetaram suas tags
    setTimeout(() => {
        const sections = document.querySelectorAll('.fade-in-up');
        sections.forEach(section => {
            observer.observe(section);
        });

        const home = document.querySelector('hero-section')?.querySelector('#home');
        if (home) {
            home.classList.add('animate-loaded');
        }

        // Apply translations
        i18n.translateDOM();
    }, 100);
});
