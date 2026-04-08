export class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-gray-900 mt-20 p-8 border-t border-slate-700 md:ml-64 relative z-40">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p data-i18n="footer.rights">&copy; 2025 Carlos Silva. Todos os direitos reservados.</p>
                <div class="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/ChickChuck2" target="_blank" class="hover:text-blue-400 transition-colors duration-300" aria-label="Github Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3s-1.37-.4-4.5.97A18.88 18.88 0 0 0 12 5.88a18.88 18.88 0 0 0-3.41-.33c-3.13-1.37-4.5-.97-4.5-.97A5.07 5.07 0 0 0 3 4.77a5.44 5.44 0 0 0 1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                </div>
            </div>
        </footer>
        `;
    }
}
