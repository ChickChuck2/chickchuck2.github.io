export class BackToTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a id="back-to-top" href="#home" class="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg glow-shadow opacity-0 transform translate-y-4 hover:bg-blue-700 transition duration-300 ease-in-out z-50" aria-label="Voltar ao Topo">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </a>
        `;

        this.setupScrollListener();
    }

    setupScrollListener() {
        const backToTopBtn = this.querySelector('#back-to-top');

        window.addEventListener('scroll', () => {
            const header = document.querySelector('app-header')?.querySelector('#mobile-header');
            const sidebar = document.querySelector('app-sidebar')?.querySelector('#sidebar');

            if (window.scrollY > 400) { 
                backToTopBtn.classList.remove('opacity-0', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
                backToTopBtn.classList.add('opacity-0', 'translate-y-4');
            }
            
            if (window.scrollY > 50) {
                if(header) {
                    header.classList.add('scrolled-header');
                    header.classList.remove('bg-[#0F172A]');
                }
                if(sidebar) sidebar.classList.add('scrolled-header');
            } else {
                if(header) {
                    header.classList.remove('scrolled-header');
                    header.classList.add('bg-[#0F172A]');
                }
                if(sidebar) sidebar.classList.remove('scrolled-header');
            }
        });
    }
}
