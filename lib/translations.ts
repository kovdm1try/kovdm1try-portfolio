export const translations = {
  ru: {
    nav: {
      about: 'Обо мне',
      projects: 'Проекты',
      contacts: 'Контакты'
    },
    hero: {
      name: 'Ковтунов Дмитрий',
      role: 'Frontend-разработчик'
    },
    about: {
      sectionLabel: 'О себе:',
      headline: 'Олимпиадник и UI-энтузиаст',
      line1: 'Разрабатываю интерфейсы с вниманием к деталям: анимации, отзывчивый UI, чистая архитектура.',
      line2: 'Увлечён интерактивными пользовательскими интерфейсами и современными веб-технологиями.'
    },
    aboutOutro: {
      title: 'Смотри',
      accent: 'проекты.',
      subtitle: 'Интерфейсы, которые я спроектировал и собрал самостоятельно.',
      primaryLabel: 'Проекты',
      secondaryLabel: 'Связаться'
    },
    console: {
      name: 'Ковтунов Дмитрий',
      fullName: 'Ковтунов Дмитрий Алексеевич'
    },
    projects: {
      eyebrow: `// PORTFOLIO · 2025 — ${new Date().getFullYear()}`,
      titleMain: 'Мои',
      titleAccent: 'проекты',
      subtitle1: 'Подборка интерфейсов, которые я спроектировал и собрал',
      subtitle2: 'У каждой секции — свой характер, как и у проекта внутри.',
      countLabel: 'Проектов:',
      outroTitle: 'Это',
      outroAccent: 'не всё.',
      outroSubtitle: 'Свежие репозитории и эксперименты — на GitHub.',
      outroPrimaryLabel: 'Открыть GitHub',
      outroSecondaryLabel: 'Связаться'
    },
    portfolio: {
      goal: 'Личный сайт-портфолио на Next.js',
      description:
        'Минималистичный сайт с посекционной навигацией: about, projects, contacts. Акцент на плавных анимациях и презентации скилов.'
    },
    squareHelper: {
      goal: 'Справочник алгоритмов и таймер для Square-1',
      description:
        'Веб-приложение для спидкубинга: пошаговые алгоритмы всех этапов сборки, визуализация состояний кубика и встроенный таймер со скрамблером. Состояние на Redux Toolkit, компоненты на MUI.'
    },
    projectInfo: {
      openSite: 'Открыть сайт',
      repository: 'Репозиторий'
    },
    contacts: {
      title: 'Связаться со мной',
      subtitle: 'Открыт к сотрудничеству',
      telegram: 'Написать в Telegram',
      github: 'Перейти на GitHub',
      linkedin: 'Перейти на LinkedIn'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contacts: 'Contacts'
    },
    hero: {
      name: 'Dmitry Kovtunov',
      role: 'Frontend Developer'
    },
    about: {
      sectionLabel: 'About me:',
      headline: 'Olympiad coder & UI enthusiast',
      line1: 'I build interfaces with attention to detail: animations, responsive UI, clean architecture.',
      line2: 'Passionate about interactive user interfaces and modern web technologies.'
    },
    aboutOutro: {
      title: 'Check out',
      accent: 'projects.',
      subtitle: 'Interfaces I designed and built on my own.',
      primaryLabel: 'Projects',
      secondaryLabel: 'Contact me'
    },
    console: {
      name: 'Dmitry Kovtunov',
      fullName: 'Dmitry Alekseyevich Kovtunov'
    },
    projects: {
      eyebrow: `// PORTFOLIO · 2025 — ${new Date().getFullYear()}`,
      titleMain: 'My',
      titleAccent: 'projects',
      subtitle1: 'A selection of interfaces I designed and built',
      subtitle2: 'Each section has its own character, just like the project inside.',
      countLabel: 'Projects:',
      outroTitle: "That's",
      outroAccent: 'not all.',
      outroSubtitle: 'Fresh repos and experiments — on GitHub.',
      outroPrimaryLabel: 'Open GitHub',
      outroSecondaryLabel: 'Contact me'
    },
    portfolio: {
      goal: 'Personal portfolio website on Next.js',
      description:
        'Minimalist site with section-based navigation: about, projects, contacts. Focus on smooth animations and skill presentation.'
    },
    squareHelper: {
      goal: 'Algorithm reference and timer for Square-1',
      description:
        'Web app for speedcubing: step-by-step algorithms for all solve stages, cube state visualization, and a built-in timer with scrambler. State via Redux Toolkit, components via MUI.'
    },
    projectInfo: {
      openSite: 'Open site',
      repository: 'Repository'
    },
    contacts: {
      title: 'Get in touch',
      subtitle: 'Open to collaboration',
      telegram: 'Write on Telegram',
      github: 'Open GitHub',
      linkedin: 'Open LinkedIn'
    }
  }
} as const;

export type Translations = typeof translations;
