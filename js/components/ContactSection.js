export class ContactSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="contato" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
            <h2 class="text-4xl font-bold mb-12 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="contact.title">Contato & Redes</h2>
            <p class="text-lg text-gray-300 mb-10" data-i18n="contact.desc">Conecte-se comigo e acompanhe meus projetos nas redes:</p>
            
            <div class="max-w-2xl mx-auto space-y-6 lg:space-y-8">
                <!-- Redes Sociais -->
                <div class="flex flex-col gap-6">
                    <!-- Link LinkedIn -->
                    <a href="https://www.linkedin.com/in/carlos-peres-da-silva-338849205/" target="_blank" 
                        class="w-full flex items-center justify-center space-x-4 p-4 bg-blue-700/50 rounded-lg glow-shadow transform hover:scale-[1.03] transition duration-300 ease-in-out"
                        aria-label="Perfil do LinkedIn">
                        <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2" fill="currentColor"/></svg>
                        <span class="text-lg font-semibold">LinkedIn (<span class="text-blue-300">Carlos Peres da Silva</span>)</span>
                    </a>

                    <!-- Link Instagram (Inceptum Game) -->
                    <a href="https://www.instagram.com/inceptumthegame/" target="_blank" 
                        class="w-full flex items-center justify-center space-x-4 p-4 bg-pink-700/50 rounded-lg glow-shadow transform hover:scale-[1.03] transition duration-300 ease-in-out"
                        aria-label="Instagram do projeto Inceptum">
                        <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span class="text-lg font-semibold">Instagram (@inceptumthegame)</span>
                    </a>
                </div>

                <!-- Formulário Formspree.io -->
                <div class="hidden bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                    <h3 class="text-2xl font-bold mb-4 text-white" data-i18n="contact.form.title">Me Envie uma Mensagem</h3>
                    
                    <!-- Formspree Endpoint -->
                    <!-- NOTA: Substitua 'COLOQUE_SEU_ID_AQUI' pelo ID que receber no site do formspree.io -->
                    <form action="https://formspree.io/f/COLOQUE_SEU_ID_AQUI" method="POST" class="space-y-4">
                        <div>
                            <input type="email" name="email" required placeholder="Seu E-mail" data-i18n="contact.form.email" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white">
                        </div>
                        <div>
                            <input type="text" name="empresa" placeholder="Empresa (Opcional)" data-i18n="contact.form.company" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white">
                        </div>
                        <div>
                            <textarea name="message" required rows="4" placeholder="Mensagem" data-i18n="contact.form.msg" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white resize-none"></textarea>
                        </div>
                        <button type="submit" data-i18n="contact.form.submit" class="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg glow-shadow hover:bg-blue-700 transition duration-300">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
        `;
    }
}
