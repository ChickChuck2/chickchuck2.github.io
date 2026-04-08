import { renderRadarChart } from '../utils/RadarChart.js';

export class SkillsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="habilidades" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
                <h2 class="text-4xl font-bold mb-12 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="skills.title">Habilidades & Ferramentas</h2>
                <p class="text-lg text-gray-300 mb-8" data-i18n="skills.desc">Visualização dinâmica das minhas principais áreas de proficiência.</p>
                <div class="flex flex-col lg:flex-row gap-10 items-center justify-center">
                    <div class="lg:w-1/2 w-full flex justify-center items-center p-4 bg-slate-900 rounded-xl glow-shadow border border-blue-600">
                        <svg id="radar-chart" width="400" height="400" viewBox="0 0 400 400" class="w-full h-full max-w-sm"></svg>
                    </div>
                    <div class="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <svg class="skill-icon w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7l9 5 9-5-9-5z"/><path d="M3 17l9 5 9-5"/><path d="M3 7v10"/><path d="M21 7v10"/><path d="M12 12v5"/></svg>
                            <span class="mt-3 text-sm font-semibold">Unity</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <span class="skill-icon text-4xl font-extrabold" style="color: #A020F0;">C#</span>
                            <span class="mt-3 text-sm font-semibold">C Sharp</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <span class="skill-icon text-4xl font-extrabold" style="color: #4080FF;">C++</span>
                            <span class="mt-3 text-sm font-semibold">C Plus Plus</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <span class="skill-icon text-4xl font-extrabold" style="color: #619CBF;">C</span>
                            <span class="mt-3 text-sm font-semibold">Linguagem C</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <svg class="skill-icon w-10 h-10 text-[#306998]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M10 12h4"/><path d="M12 16v6"/><path d="M16 18h2"/><path d="M6 18h2"/></svg>
                            <span class="mt-3 text-sm font-semibold">Python</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M12 3v18"/><path d="M3 12h18"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>
                            <span class="mt-3 text-sm font-semibold">POO/Arquitetura</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <span class="skill-icon text-4xl font-extrabold text-[#F00]">SCM</span>
                            <span class="mt-3 text-sm font-semibold">Plastic SCM</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-xl glow-shadow transform hover:scale-105 transition duration-300 ease-in-out text-center">
                            <svg class="skill-icon w-10 h-10 text-[#F14E32]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><line x1="18" y1="9" x2="18" y2="21"/><line x1="6" y1="9" x2="6" y2="21"/><line x1="12" y1="9" x2="12" y2="15"/></svg>
                            <span class="mt-3 text-sm font-semibold">Git</span>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.initObserver();
    }

    initObserver() {
        const radarObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    renderRadarChart();
                    observer.unobserve(this); 
                }
            });
        }, { threshold: 0.3 }); 
        
        radarObserver.observe(this);
    }
}
