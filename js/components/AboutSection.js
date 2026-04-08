export class AboutSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="sobre" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
                <h2 class="text-4xl font-bold mb-8 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="about.title">Sobre Mim</h2>
                <div class="text-lg space-y-6">
                    <p data-i18n="about.p1">
                        Sou um desenvolvedor autodidata e estudante no SENAI, movido pela paixão de criar software robusto, seja para utilitários de sistema ou para dar vida a novos mundos em jogos. Minha base é o <span class="text-glow-csharp font-extrabold">C#</span>, minha linguagem favorita, que utilizo extensivamente na <span class="text-glow-unity font-extrabold">Unity</span> e em aplicações Windows, valorizando sua eficiência e excelente compatibilidade.
                    </p>
                    <h3 class="text-2xl font-semibold text-blue-400 mt-8 mb-4" data-i18n="about.h2">Arquitetura e Metodologia</h3>
                    <p data-i18n="about.p2">
                        Minha filosofia de código é profundamente enraizada na <span class="text-glow-poo font-extrabold">Programação Orientada a Objetos (POO)</span>. Em projetos Unity, aplico rigorosamente o encapsulamento, utilizando classes base para estruturar comportamentos e subclasses específicas para herança e modularidade, garantindo reuso e fácil manutenção. Utilizo a metodologia <span class="text-blue-400 font-extrabold">Agile</span> e princípios de <span class="text-blue-400 font-extrabold">XP (Extreme Programming)</span>, buscando a excelência por meio de entregas contínuas e adaptáveis e a implementação de testes automatizados.
                    </p>
                    <h3 class="text-2xl font-semibold text-blue-400 mt-8 mb-4" data-i18n="about.h3">Engenharia de Sistemas e Jogos</h3>
                    <p data-i18n="about.p3">
                        Minha experiência se divide entre a criação de <span class="text-glow-unity font-extrabold">Jogos 2D</span> (onde encontro a satisfação de criar uma história a partir de desenhos e sprites) e o desenvolvimento de **Utilitários de Windows**. Projetos como <span class="text-blue-400 font-extrabold">Oveger</span> nasceram da necessidade prática de otimizar meu próprio fluxo de trabalho, eliminando o tempo gasto com tarefas repetitivas. Superar o desafio de manipular a hierarquia de objetos (*parenting*) em aplicações de desktop me deu valiosas lições sobre a superação de problemas técnicos complexos.
                    </p>
                    <h3 class="text-2xl font-semibold text-blue-400 mt-8 mb-4" data-i18n="about.h4">Visão de Crescimento e Equilíbrio</h3>
                    <p data-i18n="about.p4">
                        Embora minha maior fraqueza seja o desenvolvimento **Front-end** (uma área que busco ativamente dominar para me tornar um desenvolvedor full-stack), meu foco principal é aprimorar meu conhecimento atual. O SENAI complementa minha base prática, aprofundando a teoria e a disciplina de <span class="text-blue-400 font-extrabold">UI/UX</span> e arquitetura. Meu objetivo de longo prazo é conseguir um emprego e dedicar-me profissionalmente à criação de jogos.
                    </p>
                    <p data-i18n="about.p5">
                        Para manter o equilíbrio, priorizo o **Planejamento** (o alicerce da determinação em qualquer projeto) e hobbies como a **Musculação** (essencial para o equilíbrio emocional e psicológico que o trabalho em tecnologia exige) e a programação de <span class="text-glow-cpp font-extrabold">Arduino</span> (que reforça meu conhecimento em C/C++ e hardware).
                    </p>
                </div>
            </section>
        `;
    }
}
