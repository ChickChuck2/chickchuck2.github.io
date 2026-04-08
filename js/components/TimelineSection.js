export class TimelineSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="timeline" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
            <h2 class="text-4xl font-bold mb-12 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="timeline.title">Jornada & Educação</h2>
            <div class="relative max-w-4xl mx-auto">
                <div class="absolute w-0.5 bg-blue-500 left-2 md:left-1/2 transform -translate-x-1/2 h-full"></div>
                
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-full md:w-5/12"></div>
                    <div class="z-10 flex items-center order-1 bg-blue-500 shadow-xl w-4 h-4 rounded-full"></div>
                    <div class="order-1 bg-slate-700 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 glow-shadow">
                        <p class="mb-1 text-xs text-blue-400 font-bold" data-i18n="timeline.y1.date">2018 - 2020</p>
                        <h3 class="mb-3 font-bold text-lg text-white" data-i18n="timeline.y1.title">O Despertar da Programação</h3>
                        <p class="text-sm leading-snug tracking-wide text-gray-300" data-i18n="timeline.y1.desc">
                            Início da jornada autodidata em programação, adquirindo o básico de <span class="text-glow-python font-semibold">Python</span> e desenvolvendo os primeiros programas utilitários para o sistema operacional Windows. <span class="text-yellow-400 font-semibold">"10 bilhões de por cento, o código vai funcionar."</span>
                        </p>
                    </div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full left-timeline">
                    <div class="order-1 w-full md:w-5/12 md:text-right md:pr-6">
                        <div class="bg-slate-700 rounded-lg shadow-xl px-6 py-4 glow-shadow">
                            <p class="mb-1 text-xs text-blue-400 font-bold" data-i18n="timeline.y2.date">2020 - 2022</p>
                            <h3 class="mb-3 font-bold text-lg text-white" data-i18n="timeline.y2.title">Aprofundamento e Expansão de Stack</h3>
                            <p class="text-sm leading-snug tracking-wide text-gray-300" data-i18n="timeline.y2.desc">
                                Estudo autodidata de Java para Android e a introdução ao <span class="text-glow-csharp font-semibold">C#</span> na <span class="text-glow-unity font-semibold">Unity</span>. Criação de programas para Windows/Android e experimentação com serviços em nuvem (Azure).
                            </p>
                        </div>
                    </div>
                    <div class="z-10 flex items-center order-1 bg-blue-500 shadow-xl w-4 h-4 rounded-full"></div>
                    <div class="order-1 w-full md:w-5/12"></div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-full md:w-5/12"></div>
                    <div class="z-10 flex items-center order-1 bg-blue-500 shadow-xl w-4 h-4 rounded-full"></div>
                    <div class="order-1 bg-slate-700 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 glow-shadow">
                        <p class="mb-1 text-xs text-blue-400 font-bold" data-i18n="timeline.y3.date">2022 - 2024</p>
                        <h3 class="mb-3 font-bold text-lg text-white" data-i18n="timeline.y3.title">C/C++, Robótica e o Projeto <span class="text-yellow-400 text-glow">Inceptum</span></h3>
                        <p class="text-sm leading-snug tracking-wide text-gray-300" data-i18n="timeline.y3.desc">
                            Aprimoramento avançado em <span class="text-glow-csharp font-semibold">C#</span>, aprendizado de <span class="text-glow-cpp font-semibold">C e C++</span> voltado para projetos de Arduino e robótica. Período crucial marcado pelo lançamento do projeto de sobrevivência multiplayer <span class="text-yellow-400 font-semibold">Inceptum</span>.
                        </p>
                    </div>
                </div>
                
                <div class="mb-8 flex justify-between items-center w-full left-timeline">
                    <div class="order-1 w-full md:w-5/12 md:text-right md:pr-6">
                        <div class="bg-slate-700 rounded-lg shadow-xl px-6 py-4 glow-shadow">
                            <p class="mb-1 text-xs text-blue-400 font-bold" data-i18n="timeline.y4.date">2024 - Atual</p>
                            <h3 class="mb-3 font-bold text-lg text-white" data-i18n="timeline.y4.title">Estudante no SENAI (Desenvolvimento de Jogos)</h3>
                            <p class="text-sm leading-snug tracking-wide text-gray-300" data-i18n="timeline.y4.desc">
                                Foco na formação acadêmica em desenvolvimento de jogos, consolidando conhecimentos técnicos e práticos para a indústria de games.
                            </p>
                        </div>
                    </div>
                    <div class="z-10 flex items-center order-1 bg-blue-500 shadow-xl w-4 h-4 rounded-full"></div>
                    <div class="order-1 w-full md:w-5/12"></div>
                </div>
            </div>
        </section>
        `;
    }
}
