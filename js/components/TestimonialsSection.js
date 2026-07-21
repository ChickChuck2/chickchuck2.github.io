import { getFirebaseContext, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from '../utils/firebase.js';
import { i18n } from '../utils/i18n.js';

export class TestimonialsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="testemunhos" class="p-8 sm:p-16 bg-slate-800 rounded-xl glow-shadow my-16 fade-in-up">
            <h2 class="text-4xl font-bold mb-12 border-b-4 border-blue-500 pb-2 inline-block text-glow" data-i18n="test.title">Testemunhos</h2>
            <p class="text-lg text-gray-300 mb-8" data-i18n="test.desc">Veja o que dizem sobre meu trabalho ou use o formulário abaixo para registrar seu próprio depoimento!</p>

            <div id="testimonials-container" class="space-y-8 max-w-4xl mx-auto">
                <div class="text-center text-gray-400">
                    <svg class="animate-spin h-8 w-8 mx-auto mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <p data-i18n="test.loading">Carregando depoimentos...</p>
                </div>
            </div>

            <!-- Formulário para envio de depoimento -->
            <div class="mt-16 bg-slate-700/50 p-6 sm:p-8 rounded-xl border border-slate-600 max-w-4xl mx-auto">
                <h3 class="text-2xl font-bold mb-6 text-white" data-i18n="test.form.title">Deixe Seu Testemunho</h3>
                <form id="testimonial-form" class="space-y-4">
                    <div>
                        <textarea id="t-quote" required rows="3" placeholder="Seu Depoimento (Obrigatório)" data-i18n="test.form.quote" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white resize-y"></textarea>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" id="t-name" required placeholder="Seu Nome (Obrigatório)" data-i18n="test.form.name" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white">
                        <input type="text" id="t-role" placeholder="Seu Cargo/Função (Ex: Professor, Colega)" data-i18n="test.form.role" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white">
                    </div>
                    <div>
                        <input type="text" id="t-source" placeholder="Fonte (Ex: LinkedIn, E-mail)" data-i18n="test.form.source" class="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white">
                    </div>
                    <button type="submit" id="t-submit" data-i18n="test.form.submit" class="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg glow-shadow hover:bg-blue-700 transition duration-300">
                        Enviar Depoimento
                    </button>
                    <p id="t-feedback" class="mt-2 text-sm font-semibold hidden"></p>
                </form>
            </div>
        </section>
        `;

        // Armazenamos a lista de depoimentos para re-renderizar quando a lingua mudar
        this.testimonialsDataList = [];
        this.loadTestimonials();
        this.setupForm();
        
        window.addEventListener('locale-changed', () => this.renderTestimonials(this.testimonialsDataList));
    }

    async loadTestimonials() {
        const container = this.querySelector('#testimonials-container');

        const { db, isFirebaseConfigured } = await getFirebaseContext();

        // Se o Firebase não estiver configurado, exibe erro diretamente (callback de erro)
        if (!isFirebaseConfigured) {
            console.warn("Firebase não está configurado.");
            container.innerHTML = `<div class="text-center p-6 bg-red-900/40 border border-red-500 rounded-xl text-red-300">
                <p class="font-bold">${i18n.getTranslation('test.error')}</p>
            </div>`;
            return;
        }

        try {
            // Busca depoimentos ordenados pela data de criação em ordem decrescente (mais recentes primeiro)
            const testimonialsCol = collection(db, 'testimonials');
            const q = query(testimonialsCol, orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            
            const testimonials = [];
            querySnapshot.forEach((doc) => {
                testimonials.push(doc.data());
            });
            
            this.testimonialsDataList = testimonials;
            this.renderTestimonials(testimonials);
        } catch (error) {
            console.error('Erro ao buscar depoimentos no Firebase:', error);
            container.innerHTML = `<div class="text-center p-6 bg-red-900/40 border border-red-500 rounded-xl text-red-300">
                <p class="font-bold">${i18n.getTranslation('test.error')}</p>
            </div>`;
        }
    }

    renderTestimonials(testimonials) {
        const container = this.querySelector('#testimonials-container');
        container.innerHTML = '';

        if (!testimonials || testimonials.length === 0) {
            container.innerHTML = `<p class="text-center text-gray-400 italic">${i18n.getTranslation('test.empty')}</p>`;
            return;
        }

        testimonials.forEach((t, index) => {
            const card = this.createCard(t, index);
            container.appendChild(card);
        });
    }

    createCard(t, index) {
        const card = document.createElement('div');
        card.className = 'bg-slate-700/80 p-6 rounded-xl border border-slate-600 glow-shadow relative transform hover:-translate-y-1 transition duration-300';
        
        // Ícone de aspas decorativo
        const quoteIcon = `
            <svg class="absolute top-4 right-4 w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
        `;

        // Lógica de "Ler mais" para textos muito longos
        const maxLength = 250;
        let quoteContent = '';
        if (t.quote.length > maxLength) {
            const truncated = t.quote.substring(0, maxLength) + '...';
            quoteContent = `
                <p class="text-gray-300 italic mb-4 relative z-10 quote-text" data-full="${encodeURIComponent(t.quote)}">
                    "${truncated}"
                    <button class="text-blue-400 font-semibold hover:underline ml-1 read-more-btn">${i18n.getTranslation('test.read_more')}</button>
                </p>
            `;
        } else {
            quoteContent = `<p class="text-gray-300 italic mb-4 relative z-10">"${t.quote}"</p>`;
        }

        card.innerHTML = `
            ${quoteIcon}
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    ${t.name.charAt(0).toUpperCase()}
                </div>
                <div class="flex-1">
                    ${quoteContent}
                    <div>
                        <h4 class="font-bold text-white">${t.name}</h4>
                        <p class="text-sm text-blue-300">${t.role || ''} ${t.source ? '(' + t.source + ')' : ''}</p>
                    </div>
                </div>
            </div>
        `;

        // Event listener para botão ler mais
        const readMoreBtn = card.querySelector('.read-more-btn');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', (e) => {
                const quoteText = e.target.parentElement;
                const fullText = decodeURIComponent(quoteText.getAttribute('data-full'));
                
                if (e.target.textContent === i18n.getTranslation('test.read_more')) {
                    quoteText.innerHTML = `"${fullText}" <button class="text-blue-400 font-semibold hover:underline ml-1 read-more-btn">${i18n.getTranslation('test.read_less')}</button>`;
                } else {
                    const truncated = fullText.substring(0, maxLength) + '...';
                    quoteText.innerHTML = `"${truncated}" <button class="text-blue-400 font-semibold hover:underline ml-1 read-more-btn">${i18n.getTranslation('test.read_more')}</button>`;
                }
            }); // O ideal seria refatorar esse listener para funcionar bidirecionalmente (truncando novamente), mas deixaremos simples na demo
        }

        return card;
    }

    setupForm() {
        const form = this.querySelector('#testimonial-form');
        const feedback = this.querySelector('#t-feedback');
        const submitBtn = this.querySelector('#t-submit');

        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const quote = this.querySelector('#t-quote').value;
            const name = this.querySelector('#t-name').value;
            const role = this.querySelector('#t-role').value;
            const source = this.querySelector('#t-source').value;

            const { db, isFirebaseConfigured } = await getFirebaseContext();

            if (!isFirebaseConfigured) {
                feedback.textContent = "O Firebase não está configurado.";
                feedback.className = "mt-2 text-sm font-semibold text-red-400 block";
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = i18n.getTranslation('test.form.loading');
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

            try {
                const testimonialsCol = collection(db, 'testimonials');
                await addDoc(testimonialsCol, {
                    quote,
                    name,
                    role: role || "",
                    source: source || "",
                    createdAt: serverTimestamp()
                });

                feedback.textContent = i18n.getTranslation('test.form.success');
                feedback.className = "mt-2 text-sm font-semibold text-green-400 block";
                form.reset();
                
                // Recarregar os depoimentos
                this.loadTestimonials();
            } catch (error) {
                console.error("Erro ao enviar depoimento:", error);
                feedback.textContent = `${i18n.getTranslation('test.form.err')}: ${error.message}`;
                feedback.className = "mt-2 text-sm font-semibold text-red-400 block";
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = i18n.getTranslation('test.form.submit');
                submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                
                setTimeout(() => {
                    feedback.classList.add('hidden');
                }, 5000);
            }
        });
    }
}
