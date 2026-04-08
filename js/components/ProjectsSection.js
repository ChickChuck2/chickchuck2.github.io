export class ProjectsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="projetos" class="p-8 sm:p-16 my-16 fade-in-up">
            <h2 class="text-4xl font-bold mb-12 text-center border-b-4 border-blue-500 pb-2 inline-block mx-auto text-glow" data-i18n="proj.title">Meus Projetos</h2>
            <p class="text-lg text-gray-300 text-center mb-8" data-i18n="proj.desc">Clique em qualquer projeto para ver detalhes, tecnologias e links.</p>
            
            <div id="project-filters" class="flex flex-wrap justify-center gap-4 mb-10">
                <button data-filter="all" class="filter-btn active-filter px-4 py-2 bg-blue-600 text-white font-semibold rounded-full glow-shadow hover:bg-blue-700 transition duration-300"><span data-i18n="proj.filter.all">Todos</span></button>
                <button data-filter="csharp" class="filter-btn px-4 py-2 bg-slate-700 text-white font-semibold rounded-full glow-shadow hover:bg-blue-700 transition duration-300"><span data-i18n="proj.filter.csharp">C#</span></button>
                <button data-filter="unity" class="filter-btn px-4 py-2 bg-slate-700 text-white font-semibold rounded-full glow-shadow hover:bg-blue-700 transition duration-300"><span data-i18n="proj.filter.unity">Unity/Jogos</span></button>
                <button data-filter="python" class="filter-btn px-4 py-2 bg-slate-700 text-white font-semibold rounded-full glow-shadow hover:bg-blue-700 transition duration-300"><span data-i18n="proj.filter.python">Python</span></button>
                <button data-filter="utility" class="filter-btn px-4 py-2 bg-slate-700 text-white font-semibold rounded-full glow-shadow hover:bg-blue-700 transition duration-300"><span data-i18n="proj.filter.utility">Utilitários</span></button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">

                <!-- Card Projeto 2: Translator -->
                <div class="project-card bg-slate-800 p-6 rounded-xl glow-shadow transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer" data-project="windowstranslator" data-techs="cpp utility">
                    <div class="flex items-center space-x-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-blue-400"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 22H20"/><line x1="12" y1="17" x2="12" y2="13"/><line x1="15" y1="10" x2="9" y2="10"/><line x1="12" y1="13" x2="12" y2="10"/></svg>
                        <h3 class="text-xl font-semibold">WindowsTranslatorOverlay</h3>
                    </div>
                    <p class="text-gray-300 mb-4" data-i18n="proj.windowstranslator.desc">
                        Overlay de tradução de texto para Windows. Tradução instantânea de qualquer texto na tela.
                    </p>
                    <p class="text-blue-400 font-medium" data-i18n="proj.click">Clique para mais detalhes</p>
                </div>

                <!-- Card Projeto 3: Senai Game -->
                <div class="project-card bg-slate-800 p-6 rounded-xl glow-shadow transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer" data-project="senaigame" data-techs="game javascript web">
                    <div class="flex items-center space-x-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-blue-400"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><line x1="6" y1="12" x2="6" y2="12.01"/><line x1="18" y1="12" x2="18" y2="12.01"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
                        <h3 class="text-xl font-semibold">Construct-Senai-Game</h3>
                    </div>
                    <p class="text-gray-300 mb-4" data-i18n="proj.senaigame.desc">
                        Jogo simples desenvolvido durante o curso do SENAI, demonstração de lógica e mecânicas básicas.
                    </p>
                    <p class="text-blue-400 font-medium" data-i18n="proj.click">Clique para mais detalhes</p>
                </div>
                
                <!-- Card Projeto 4: Oveger -->
                <div class="project-card bg-slate-800 p-6 rounded-xl glow-shadow transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer" data-project="oveger" data-techs="csharp utility">
                    <div class="flex items-center space-x-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-blue-400"><path d="M5 3v4M3 5h4M19 3v4M21 5h-4M5 21v-4M3 19h4M21 19h-4M19 21v-4"/><path d="M12 12h.01"/></svg>
                        <h3 class="text-xl font-semibold">Oveger</h3>
                    </div>
                    <p class="text-gray-300 mb-4" data-i18n="proj.oveger.desc">
                        Um overlay minimalista e personalizável para atalhos de aplicativos e arquivos no desktop.
                    </p>
                    <p class="text-blue-400 font-medium" data-i18n="proj.click">Clique para mais detalhes</p>
                </div>

                <!-- Card Projeto 5: TheXBESTHost -->
                <div class="project-card bg-slate-800 p-6 rounded-xl glow-shadow transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer" data-project="thexbesthost" data-techs="python utility">
                    <div class="flex items-center space-x-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-blue-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>
                        <h3 class="text-xl font-semibold">TheXBESTHost</h3>
                    </div>
                    <p class="text-gray-300 mb-4" data-i18n="proj.thexbesthost.desc">
                        Projeto de localhost com funções adicionais, permitindo controlar e gerenciar recursos de forma remota.
                    </p>
                    <p class="text-blue-400 font-medium" data-i18n="proj.click">Clique para mais detalhes</p>
                </div>

                <!-- Card Projeto 6: Mydroid -->
                <div class="project-card bg-slate-800 p-6 rounded-xl glow-shadow transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer" data-project="mydroid" data-techs="python utility">
                    <div class="flex items-center space-x-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-blue-400"><path d="M12 2a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M10 12h4"/><path d="M12 16v6"/><path d="M16 18h2"/><path d="M6 18h2"/></svg>
                        <h3 class="text-xl font-semibold">Mydroid (Bot do Discord)</h3>
                    </div>
                    <p class="text-gray-300 mb-4" data-i18n="proj.mydroid.desc">
                        Meu bot personalizado para a plataforma Discord, oferecendo comandos e automações para gestão de comunidades.
                    </p>
                    <p class="text-blue-400 font-medium" data-i18n="proj.click">Clique para mais detalhes</p>
                </div>

                <!-- Card Projeto 7: Inceptum -->
                <div class="project-card bg-slate-800 p-6 rounded-xl glow-shadow border-2 border-blue-500 transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer" data-project="inceptum" data-techs="csharp unity game">
                    <div class="flex items-center space-x-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-yellow-400"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2h8V3a1 1 0 0 0-1-1z"/><path d="M8 12h8"/><path d="M8 16h8"/></svg>
                        <h3 class="text-xl font-semibold text-yellow-400">Inceptum</h3>
                    </div>
                    <p class="text-gray-300 mb-4" data-i18n="proj.inceptum.desc">
                        **Jogo de sobrevivência 2D realista Multiplayer.** Projeto em desenvolvimento ativo.
                    </p>
                    <p class="text-yellow-400 font-bold flex items-center transition-colors duration-300">
                        <span class="w-2 h-2 mr-2 bg-yellow-400 rounded-full animate-pulse-custom"></span>
                        <span data-i18n="proj.inceptum.status">Status: Desenvolvimento Ativo</span>
                    </p>
                    <p class="text-blue-400 font-medium mt-2" data-i18n="proj.click">Clique para mais detalhes</p>
                </div>

            </div>
        </section>
        `;

        this.setupFilters();
        this.setupModalTriggers();
    }

    setupFilters() {
        const filterButtons = this.querySelectorAll('.filter-btn');
        const projectCards = this.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                filterButtons.forEach(btn => {
                    btn.classList.remove('active-filter', 'bg-blue-600');
                    btn.classList.add('bg-slate-700');
                });
                button.classList.add('active-filter', 'bg-blue-600');
                button.classList.remove('bg-slate-700');

                projectCards.forEach(card => {
                    const techs = card.getAttribute('data-techs');
                    const isMatch = filter === 'all' || techs.includes(filter);

                    if (isMatch) {
                        setTimeout(() => {
                            card.style.display = 'block';
                            card.classList.remove('hidden-filter');
                            card.style.opacity = 1;
                        }, 50); 
                    } else {
                        card.classList.add('hidden-filter');
                        card.style.opacity = 0;
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    setupModalTriggers() {
        const projectCards = this.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectKey = card.getAttribute('data-project');
                window.dispatchEvent(new CustomEvent('open-project-modal', { detail: { projectKey } }));
            });
        });
    }
}
