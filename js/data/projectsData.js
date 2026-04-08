import { i18n } from '../utils/i18n.js';

export const projectData = {
    windowstranslator: {
        title: 'WindowsTranslatorOverlay',
        get description() { return i18n.getTranslation('proj.windowstranslator.desc'); },
        techs: ['C++', 'Windows Forms', 'OCR (Optical Character Recognition)'],
        links: [
            { name: 'Repositório GitHub', url: 'https://github.com/ChickChuck2/WindowsTranslatorOverlay', icon: 'github' }
        ]
    },
    senaigame: {
        title: 'Construct-Senai-Game',
        get description() { return i18n.getTranslation('proj.senaigame.desc'); },
        techs: ['Construct', 'HTML5', 'JavaScript (Lógica)'],
        links: [
            { name: 'Ver Demo (GitHub Pages)', url: 'https://chickchuck2.github.io/Construct-Senai-Game/', icon: 'external' },
            { name: 'Repositório GitHub', url: 'https://github.com/ChickChuck2/Construct-Senai-Game/', icon: 'github' }
        ]
    },
    oveger: {
        title: 'Oveger',
        get description() { return i18n.getTranslation('proj.oveger.desc'); },
        techs: ['C#', 'Windows Presentation Foundation (WPF)', 'Configuração de Sistema'],
        links: [
            { name: 'Repositório GitHub', url: 'https://github.com/ChickChuck2/Oveger', icon: 'github' }
        ]
    },
    thexbesthost: {
        title: 'TheXBESTHost',
        get description() { return i18n.getTranslation('proj.thexbesthost.desc'); },
        techs: ['Python', 'Networking', 'Comunicação HTTP/TCP'],
        links: [
            { name: 'Repositório GitHub', url: 'https://github.com/ChickChuck2/TheXBESTHost', icon: 'github' }
        ]
    },
    mydroid: {
        title: 'Mydroid (Bot do Discord)',
        get description() { return i18n.getTranslation('proj.mydroid.desc'); },
        techs: ['Python', 'Discord API', 'Database Integration'],
        links: [
            { name: 'Ver Página (Demo)', url: 'https://chickchuck2.github.io/Mydroid/', icon: 'external' },
            { name: 'Repositório GitHub', url: 'https://github.com/ChickChuck2/Mydroid/', icon: 'github' }
        ]
    },
    inceptum: {
        title: 'Inceptum',
        get description() { return i18n.getTranslation('proj.inceptum.desc'); },
        get caseTitle() { return i18n.getTranslation('proj.inceptum.caseTitle'); },
        get caseStudy() { return i18n.getTranslation('proj.inceptum.case'); },
        techs: ['Unity', 'C#', 'Multiplayer Networking', 'Plastic SCM'],
        links: [
            { name: 'Instagram do Jogo', url: 'https://www.instagram.com/inceptumthegame/', icon: 'instagram' }
        ]
    }
};
