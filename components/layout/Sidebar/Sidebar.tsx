'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

import * as motion from 'motion/react-client';
import clsx from 'clsx';
import { stagger, Variants } from 'motion/react';
import { usePathname } from 'next/navigation';

import { translations } from '@/lib/translations';
import { Language, useLanguageStore } from '@/store/languageStore';
import { useTransitionStore } from '@/store/transitionStore';

interface MenuItemProps {
  title: string;
  icon: ReactNode;
  href: string;
  setClosed?: () => void;
}

type PageProps = Omit<MenuItemProps, 'setClosed'>;

const getPages = (lang: Language): PageProps[] => {
  const t = translations[lang].nav;
  return [
    { title: t.about, icon: <FaUserCircle />, href: 'about' },
    { title: t.projects, icon: <FaBriefcase />, href: 'projects' },
    { title: t.contacts, icon: <FaPhoneAlt fontSize={'lg'} />, href: 'contacts' }
  ];
};

const IconVariant: Variants = {
  hover: {
    scale: 1.05,
    rotate: '8deg'
  },
  idle: {
    scale: 1,
    rotate: 0
  }
};

const ItemVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { x: { stiffness: 1000, velocity: 100 } }
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: { x: { stiffness: 1000 } }
  }
};

const MenuItem: FC<MenuItemProps> = ({ title, icon, href, setClosed }) => {
  const pathname = usePathname();
  const page = pathname.slice(1);
  const isSamePage = href === page;
  const [isHover, setIsHover] = useState<boolean>(false);
  const { navigateTo } = useTransitionStore();

  const handleClick = () => {
    setClosed?.();
    if (!isSamePage) navigateTo(href);
  };

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-[200px] h-[38px] md:w-[270px] md:h-[50px]"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onTapStart={() => setIsHover(true)}
      onTap={() => setIsHover(false)}
      onTapCancel={() => setIsHover(false)}
      variants={ItemVariants}
    >
      <button onClick={handleClick} className="w-full h-full flex items-center justify-between gap-5 cursor-pointer">
        <motion.div
          className={clsx('w-[32px] md:w-[50px] aspect-square', isSamePage ? 'text-primary' : 'text-black')}
          animate={isHover ? 'hover' : 'idle'}
          transition={{ type: 'spring' }}
          variants={IconVariant}
        >
          {icon}
        </motion.div>
        <div
          className={clsx(
            'flex-1 text-left h-full font-bold text-[28px] md:text-[40px] flex items-center',
            isSamePage ? 'text-primary' : 'text-black'
          )}
        >
          {title}
        </div>
      </button>
    </motion.li>
  );
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path: FC<PathProps> = (props) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="var(--primary-foreground)" strokeLinecap="round" {...props} />
);

interface ToggleButtonProps {
  setOpen: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ setOpen }) => {
  return (
    <motion.button
      className="z-20 h-[44px] w-[44px] md:h-[60px] md:w-[60px] flex items-center justify-center rounded-[50%] bg-primary cursor-pointer fixed top-[16px] left-[12px] md:top-[24px] md:left-[16px]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 200, damping: 40 }}
      onClick={setOpen}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        />
      </svg>
    </motion.button>
  );
};

interface NavCustom {
  pageHeight: number;
  cx: number;
  cy: number;
  r: number;
}

const NavigationVariants: Variants = {
  open: ({ pageHeight = 1000, cx = 46, cy = 54 }: NavCustom) => ({
    pointerEvents: 'auto',
    clipPath: `circle(${pageHeight * 2}px at ${cx}px ${cy}px)`,
    transition: { type: 'spring', stiffness: 100, restDelta: 2 }
  }),
  closed: ({ cx = 46, cy = 54, r = 2 }: NavCustom) => ({
    pointerEvents: 'none',
    clipPath: `circle(${r}px at ${cx}px ${cy}px)`,
    transition: { type: 'spring', delay: 0.2, stiffness: 200, damping: 40 }
  })
};

const ItemsListVariants: Variants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) }
  },
  closed: { transition: { delayChildren: stagger(0.05, { from: 'last' }) } }
};

interface NavigationProps {
  setClosed: () => void;
}

const LangToggle: FC = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <motion.div variants={ItemVariants} className="flex items-center gap-1 select-none">
      {(['ru', 'en'] as Language[]).map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground text-[20px] md:text-[28px] font-light">/</span>}
          <motion.button
            onClick={() => setLanguage(lang)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={clsx(
              'font-bold text-[28px] md:text-[40px] cursor-pointer uppercase tracking-wide',
              language === lang ? 'text-primary' : 'text-black/40 hover:text-black/70'
            )}
          >
            {lang}
          </motion.button>
        </span>
      ))}
    </motion.div>
  );
};

const Navigation: FC<NavigationProps> = ({ setClosed }) => {
  const [maxSide, setMaxSide] = useState<number>(0);
  const { language } = useLanguageStore();

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setMaxSide((prev) => Math.max(prev, width, height));
    });

    ro.observe(document.documentElement);

    return () => ro.disconnect();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    mq.addEventListener('change', update);
    update();
    return () => mq.removeEventListener('change', update);
  }, []);

  const custom = isMobile ? { pageHeight: maxSide, cx: 34, cy: 38 } : { pageHeight: maxSide, cx: 46, cy: 54 };
  const pages = getPages(language);

  return (
    <motion.div
      variants={NavigationVariants}
      className="z-10 overflow-hidden fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center gap-6"
      custom={custom}
    >
      <motion.ul
        variants={ItemsListVariants}
        className="relative z-10 w-full h-[70%] flex flex-col items-center justify-center gap-8"
      >
        {pages.map(({ title, icon, href }) => (
          <MenuItem title={title} icon={icon} href={href} setClosed={setClosed} key={`nav-link-${href}`} />
        ))}
        <motion.li variants={ItemVariants} className="mt-4">
          <LangToggle />
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <ToggleButton setOpen={() => setIsOpen((prev) => !prev)} />
      <IconContext.Provider value={{ className: 'w-full h-full' }}>
        <Navigation setClosed={() => setIsOpen(false)} />
      </IconContext.Provider>
    </motion.nav>
  );
};

export default Sidebar;
