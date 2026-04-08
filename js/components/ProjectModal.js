import { projectData } from '../data/projectsData.js';
import { i18n } from '../utils/i18n.js';

export class ProjectModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="project-modal" class="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm modal-overlay"></div>
            <div class="relative bg-slate-800 p-8 rounded-2xl max-w-2xl w-full mx-4 glow-shadow border border-slate-700 transform scale-95 transition-transform duration-300 flex flex-col max-h-[90vh]">
                <button class="modal-close absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 bg-slate-700 hover:bg-red-500 rounded-full p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div class="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    <h3 id="modal-title" class="text-3xl font-bold mb-4 text-white text-glow">Nome do Projeto</h3>
                    <p id="modal-desc" class="text-gray-300 mb-6 text-lg leading-relaxed">Detalhes do projeto aqui...</p>
                    
                    <div class="mb-6">
                        <h4 class="text-xl font-semibold text-blue-400 mb-3 border-b border-blue-900 pb-1" data-i18n="modal.techs">Tecnologias Chave</h4>
                        <div id="modal-techs" class="flex flex-wrap gap-2"></div>
                    </div>
                    
                    <div id="modal-casestudy" class="hidden mb-6 mt-6 p-6 bg-slate-900/50 rounded-xl border border-blue-500/30">
                        <h4 id="case-title" class="text-xl font-bold text-blue-400 mb-4 flex items-center">
                            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            Case Study
                        </h4>
                        <div id="case-content" class="space-y-4"></div>
                    </div>

                    <div id="modal-links" class="flex flex-wrap gap-4 mt-8"></div>
                </div>
            </div>
        </div>
        `;

        this.setupListeners();
    }

    setupListeners() {
        const modal = this.querySelector('#project-modal');
        const overlay = this.querySelector('.modal-overlay');
        const closeBtn = this.querySelector('.modal-close');

        // Escuta o evento custumizado para abrir o modal
        window.addEventListener('open-project-modal', (e) => {
            this.openModal(e.detail.projectKey);
        });

        const closeModal = () => {
            const modalContent = modal.querySelector('.relative');
            modal.classList.remove('opacity-100');
            modalContent.classList.remove('scale-100');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
            document.body.style.overflow = ''; // Restaura scroll
        };

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
        
        // Se a língua mudar enquanto o modal estiver aberto, refaz a renderização se possível.
        window.addEventListener('locale-changed', () => {
            if (!modal.classList.contains('hidden') && this.currentProjectKey) {
                this.openModal(this.currentProjectKey, false); // re-render sem re-animar
            }
        });
    }

    openModal(projectKey, animate = true) {
        this.currentProjectKey = projectKey;
        const project = projectData[projectKey];
        if (!project) return;

        const modal = this.querySelector('#project-modal');
        const modalContent = modal.querySelector('.relative');

        this.querySelector('#modal-title').textContent = project.title;
        // The project.description getter will now dynamically return the correct translation!
        this.querySelector('#modal-desc').innerHTML = project.description;

        this.querySelector('#modal-techs').innerHTML = project.techs.map(tech => 
            `<span class="px-3 py-1 bg-slate-700 text-blue-300 text-sm font-medium rounded-full border border-slate-600">${tech}</span>`
        ).join('');

        const caseStudyContainer = this.querySelector('#modal-casestudy');
        if (project.caseStudy && Array.isArray(project.caseStudy)) {
            caseStudyContainer.classList.remove('hidden');
            this.querySelector('#case-title').innerHTML = `
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                ${project.caseTitle || 'Case Study'}
            `;
            this.querySelector('#case-content').innerHTML = project.caseStudy.map(c => `
                <div>
                    <h5 class="text-white font-semibold flex items-center mb-1"><span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>${c.title}</h5>
                    <p class="text-gray-300 text-base border-l-2 border-slate-700 ml-1 pl-4 pb-2 border-opacity-50">${c.content}</p>
                </div>
            `).join('');
        } else {
            caseStudyContainer.classList.add('hidden');
            this.querySelector('#case-content').innerHTML = '';
        }

        this.querySelector('#modal-links').innerHTML = project.links.map(link => {
            let iconSvg = '';
            if (link.icon === 'github') {
                iconSvg = '<svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>';
            } else if (link.icon === 'external') {
                iconSvg = '<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>';
            } else if (link.icon === 'instagram') {
                iconSvg = '<svg class="w-5 h-5 mr-2 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';
            }
            
            return `<a href="${link.url}" target="_blank" class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 glow-shadow text-sm font-semibold">${iconSvg}${link.name}</a>`;
        }).join('');

        if (animate) {
            modal.classList.remove('hidden');
            // Pequeno delay para a animação ocorrer após remover o hidden
            setTimeout(() => {
                modal.classList.add('opacity-100');
                modalContent.classList.add('scale-100');
            }, 10);
            
            document.body.style.overflow = 'hidden'; // Previne scroll da página de fundo
        }
    }
}
