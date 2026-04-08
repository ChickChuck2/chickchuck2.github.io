import { ptBR } from '../data/locales/pt-BR.js';
import { enUS } from '../data/locales/en-US.js';

const translations = {
    'pt-BR': ptBR,
    'en-US': enUS
};

export class I18nManager {
    constructor() {
        this.currentLocale = this.getInitialLocale();
        this.saveLocale(this.currentLocale);
    }

    getInitialLocale() {
        // Obter do localStorage se existir
        const saved = localStorage.getItem('app_lang');
        if (saved && translations[saved]) return saved;

        // Senão tentar detectar a língua do navegador
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('pt')) return 'pt-BR';
        return 'en-US'; // Inglês como fallback padrão para gringos
    }

    saveLocale(locale) {
        localStorage.setItem('app_lang', locale);
    }

    setLocale(locale) {
        if (!translations[locale]) return;
        this.currentLocale = locale;
        this.saveLocale(locale);
        this.translateDOM();
        // Disparar evento global para atualizar componentes js que dependem (ex: projectData)
        window.dispatchEvent(new CustomEvent('locale-changed', { detail: { locale } }));
    }

    getTranslation(key) {
        const dict = translations[this.currentLocale];
        if (dict && dict[key] !== undefined) {
            return dict[key];
        }
        console.warn(`[I18N MISSING KEY]: ${key}`);
        return `<span style="color:#F87171; font-weight:bold; background:#7F1D1D; padding:2px;">[MISSING: ${key}]</span>`;
    }

    translateDOM() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            // Verifica se é placeholder de input ou conteudo
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translation);
                } else {
                    el.value = translation;
                }
            } else {
                el.innerHTML = translation;
            }
        });
    }
}

// Singleton export
export const i18n = new I18nManager();
