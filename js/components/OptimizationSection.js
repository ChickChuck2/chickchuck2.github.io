export class OptimizationSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="otimizacao" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
            <h2 class="text-4xl font-bold mb-8 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="opt.title">Otimização & Performance</h2>
            <div class="text-lg space-y-6">
                <p data-i18n="opt.p1">
                    A performance não é apenas um recurso, é uma mentalidade. Meus projetos são desenvolvidos com foco em eficiência de recursos e velocidade de execução, garantindo a melhor experiência ao usuário.
                </p>
                <ul class="list-disc list-inside space-y-2 pl-4 text-gray-300">
                    <li data-i18n="opt.li1">**Código Limpo e Modular:** Uso de padrões de projeto para garantir escalabilidade e manutenção.</li>
                    <li data-i18n="opt.li2">**Otimização de Renderização (Games/Web):** Foco em baixo *draw call* na Unity e minificação de assets na Web.</li>
                    <li data-i18n="opt.li3">**Uso Eficiente de Threads:** Implementação de processamento assíncrono para evitar gargalos em aplicações de desktop (C#/Python).</li>
                    <li data-i18n="opt.li4">**Gerenciamento de Memória:** Atenção especial à desalocação de recursos em C/C++ para evitar vazamentos (*memory leaks*).</li>
                </ul>
                <p class="mt-6 text-yellow-400 font-medium text-xl" data-i18n="opt.quote">
                    "Não há limites para o poder da ciência e da tecnologia!"
                </p>
            </div>
        </section>
        `;
    }
}
