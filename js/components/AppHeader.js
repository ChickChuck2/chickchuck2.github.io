import { i18n } from '../utils/i18n.js';

export class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="mobile-header" class="md:hidden sticky top-0 z-50 bg-[#0F172A] transition-shadow duration-300">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <a href="#home" class="text-2xl font-extrabold text-white tracking-wide hover:text-blue-400 transition-colors duration-300">
                            Carlos Silva
                        </a>
                        <div class="flex items-center space-x-4">
                            <!-- Toggle Language Button -->
                            <button id="mobile-lang-btn" aria-label="Toggle Language" class="text-xl hover:scale-110 transition-transform duration-300">
                                🇧🇷
                            </button>
                            <button id="mobile-menu-btn" aria-label="Abrir Menu" class="p-2 text-gray-400 hover:text-white rounded-md transition-colors duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" class="md:hidden hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <a href="#home" data-i18n="nav.home" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Início</a>
                        <a href="#sobre" data-i18n="nav.about" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Sobre Mim</a>
                        <a href="#timeline" data-i18n="nav.journey" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Jornada</a>
                        <a href="#habilidades" data-i18n="nav.skills" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Habilidades</a>
                        <a href="#stats" data-i18n="nav.stats" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Estatísticas</a>
                        <a href="#otimizacao" data-i18n="nav.optimization" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Otimização</a>
                        <a href="#projetos" data-i18n="nav.projects" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Projetos</a>
                        <a href="#testemunhos" data-i18n="nav.testimonials" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Testemunhos</a>
                        <a href="#contato" data-i18n="nav.contact" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300">Contato</a>
                    </div>
                </div>
            </header>
        `;

        this.setupListeners();
        this.updateLangBtnState();
    }

    setupListeners() {
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');
        const navLinks = this.querySelectorAll('#mobile-menu a');
        const langBtn = this.querySelector('#mobile-lang-btn');

        if(mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                });
            });
        }
        
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const isPt = i18n.currentLocale === 'pt-BR';
                i18n.setLocale(isPt ? 'en-US' : 'pt-BR');
                // Component receives global event 'locale-changed' to update flags
            });
        }
        
        window.addEventListener('locale-changed', () => this.updateLangBtnState());
    }
    
    updateLangBtnState() {
        const langBtn = this.querySelector('#mobile-lang-btn');
        if (langBtn) {
            langBtn.textContent = i18n.currentLocale === 'pt-BR' ? '🇧🇷' : '🇺🇸';
        }
    }
}
