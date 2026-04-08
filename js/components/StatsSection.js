export class StatsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="stats" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
            <h2 class="text-4xl font-bold mb-12 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="stats.title">Estatísticas & Impacto</h2>
            <p class="text-lg text-gray-300 text-center mb-10" data-i18n="stats.desc">Os números que refletem a dedicação e o alcance do meu trabalho.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="p-6 bg-slate-700 rounded-xl glow-shadow">
                    <div class="text-5xl font-extrabold text-blue-400 mb-2">
                        <span id="stat-lines" data-target="15000">0</span>+
                    </div>
                    <p class="text-gray-300 font-semibold" data-i18n="stats.lines">Linhas de Código Escritas (<span class="text-glow-csharp" style="text-shadow: none; color: #A020F0;">C#</span> / <span class="text-glow-python" style="text-shadow: none; color: #FFD43B;">Python</span>)</p>
                </div>

                <div class="p-6 bg-slate-700 rounded-xl glow-shadow">
                    <div class="text-5xl font-extrabold text-blue-400 mb-2">
                        <span id="stat-hours" data-target="1500">0</span>+
                    </div>
                    <p class="text-gray-300 font-semibold" data-i18n="stats.hours">Horas de Desenvolvimento em <span class="text-glow-unity" style="text-shadow: none; color: #F1F5F9;">Unity</span></p>
                </div>

                <div class="p-6 bg-slate-700 rounded-xl glow-shadow">
                    <div class="text-5xl font-extrabold text-blue-400 mb-2">
                        <span id="stat-projects" data-target="6">0</span>
                    </div>
                    <p class="text-gray-300 font-semibold" data-i18n="stats.repos">Repositórios de Código Aberto no GitHub</p>
                </div>
            </div>
        </section>
        `;

        this.fetchGithubStats();
    }

    async fetchGithubStats() {
        try {
            // Buscando os repositórios públicos dinamicamente
            const response = await fetch('https://api.github.com/users/ChickChuck2');
            if (response.ok) {
                const data = await response.json();
                const reposTarget = data.public_repos || 6;
                this.querySelector('#stat-projects').setAttribute('data-target', reposTarget);
            }
        } catch (error) {
            console.error("Erro ao buscar API do GitHub", error);
        } finally {
            this.initCounterObserver();
        }
    }

    animateCounter(element, target) {
        const duration = 2000;
        const stepTime = 10;
        const steps = duration / stepTime;
        const stepValue = target / steps;
        let current = 0;

        const updateCount = () => {
            current += stepValue;
            if (current < target) {
                element.textContent = Math.ceil(current).toLocaleString('pt-BR');
                setTimeout(updateCount, stepTime);
            } else {
                element.textContent = target.toLocaleString('pt-BR');
            }
        }
        updateCount();
    }

    initCounterObserver() {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.querySelectorAll('[data-target]').forEach(stat => {
                        this.animateCounter(stat, parseInt(stat.dataset.target));
                    });
                    observer.unobserve(this);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(this);
    }
}
