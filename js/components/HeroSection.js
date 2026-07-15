import { i18n } from '../utils/i18n.js';

export class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="home" class="min-h-[calc(100vh-64px)] flex items-center justify-center p-8 text-center fade-in-up relative">
                <div id="three-container" class="hidden sm:block"></div>
                <div class="space-y-6 max-w-4xl z-20">
                    <h1 class="text-5xl sm:text-7xl font-extrabold leading-tight">
                        <span data-i18n="hero.greeting">Olá, eu sou</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow" data-i18n="hero.name">Carlos Silva</span>.
                    </h1>
                    <p class="text-xl sm:text-2xl text-gray-300 h-8">
                        <span id="typing-text" class="font-semibold text-white"></span>
                        <span class="cursor text-xl sm:text-2xl">|</span>
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                        <a href="#projetos" data-i18n="hero.btn.projects" class="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full glow-shadow transform hover:scale-105 transition duration-300 ease-in-out">
                            Ver Meus Projetos
                        </a>
                        <a href="assets/docs/Carlos_Silva_CV.pdf" download="Carlos_Silva_CV.pdf" data-i18n="hero.btn.cv" class="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-blue-400 border border-blue-500 bg-transparent hover:bg-blue-600 hover:text-white rounded-full glow-shadow transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
                            Baixar Currículo
                        </a>
                    </div>
                </div>
            </section>
        `;

        this.initTypewriter();
        window.addEventListener('locale-changed', () => {
            // Reiniciar typewriter quando idioma muda
            if (this._timeoutId) clearTimeout(this._timeoutId);
            this.initTypewriter();
        });
    }

    initTypewriter() {
        const typingElement = this.querySelector('#typing-text');
        if (!typingElement) return;

        const professions = [
            i18n.getTranslation('hero.prof.dev'),
            i18n.getTranslation('hero.prof.utils'),
            i18n.getTranslation('hero.prof.game'),
            i18n.getTranslation('hero.prof.opt')
        ];

        // Prevent stacking if initialized multiple times
        typingElement.textContent = '';

        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeWriter = () => {
            if (!this.isConnected) return; // Parar se o componente for removido

            const currentProfession = professions[professionIndex] || '';

            if (isDeleting) {
                typingElement.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 80;
            if (isDeleting) typeSpeed = 40;

            if (!isDeleting && charIndex === currentProfession.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                typeSpeed = 500;
            }

            this._timeoutId = setTimeout(typeWriter, typeSpeed);
        };

        typeWriter();
    }
}
