import { i18n } from '../utils/i18n.js';

export class AppSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="sidebar" class="hidden md:flex flex-col fixed left-0 top-0 w-64 h-full bg-[#0F172A] border-r border-slate-700 p-8 z-50 transition-all duration-300">
                <div class="text-center mb-8 relative">
                    <h1 class="text-3xl font-extrabold text-white text-glow">Carlos Silva</h1>
                    <p class="text-blue-400 text-sm mt-1" data-i18n="hero.prof.dev">Desenvolvedor de Sistemas</p>
                    
                    <button id="sidebar-lang-btn" aria-label="Toggle Language" class="absolute top-0 right-[-10px] text-xl hover:scale-110 transition-transform duration-300">
                        🇧🇷
                    </button>
                </div>
                <div class="space-y-4 flex-grow overflow-y-auto">
                    <a href="#home" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <span class="font-medium" data-i18n="nav.home">Início</span>
                    </a>
                    <a href="#sobre" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        <span class="font-medium" data-i18n="nav.about">Sobre Mim</span>
                    </a>
                    <a href="#timeline" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="font-medium" data-i18n="nav.journey">Jornada</span>
                    </a>
                    <a href="#habilidades" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5l4 4v5m-8 0h.01M3 7h5m-2 2h5m-2 4h5m-8-2h.01M3 11h5m-2 4h5m-2 4h5m-2-2h5m-2-4h5m-2-2h5m-2-4h5m-2-2h5M20 7L10 17l-5-5"></path></svg>
                        <span class="font-medium" data-i18n="nav.skills">Habilidades</span>
                    </a>
                    <a href="#stats" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m13-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="font-medium" data-i18n="nav.stats">Estatísticas</span>
                    </a>
                    <a href="#otimizacao" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span class="font-medium" data-i18n="nav.optimization">Otimização</span>
                    </a>
                    <a href="#projetos" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        <span class="font-medium" data-i18n="nav.projects">Projetos</span>
                    </a>
                    <a href="#testemunhos" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h10M7 16h10M9 3v2m6-2v2M9 19v2m6-2v2M5 8h.01M19 8h.01M5 12h.01M19 12h.01M5 16h.01M19 16h.01M3 6h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"></path></svg>
                        <span class="font-medium" data-i18n="nav.testimonials">Testemunhos</span>
                    </a>
                    <a href="#contato" class="flex items-center space-x-3 text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8l9 6 9-6V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2z"></path></svg>
                        <span class="font-medium" data-i18n="nav.contact">Contato</span>
                    </a>
                </div>
            </nav>
        `;
        
        this.setupListeners();
        this.updateLangBtnState();
    }
    
    setupListeners() {
        const langBtn = this.querySelector('#sidebar-lang-btn');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const isPt = i18n.currentLocale === 'pt-BR';
                i18n.setLocale(isPt ? 'en-US' : 'pt-BR');
            });
        }
        window.addEventListener('locale-changed', () => this.updateLangBtnState());
    }
    
    updateLangBtnState() {
        const langBtn = this.querySelector('#sidebar-lang-btn');
        if (langBtn) {
            langBtn.textContent = i18n.currentLocale === 'pt-BR' ? '🇧🇷' : '🇺🇸';
        }
    }
}
