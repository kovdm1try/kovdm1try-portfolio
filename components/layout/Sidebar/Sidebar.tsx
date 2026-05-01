'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { FaLaptopCode, FaPhone } from 'react-icons/fa';

import * as motion from 'motion/react-client';
import { stagger, Variants } from 'motion/react';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon: ReactNode;
  href: string;
}

interface NavigationProps {
  pages: MenuItemProps[];
}

interface ToggleButtonProps {
  action: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onTapStart?: () => void;
  onTap?: () => void;
  onTapCancel?: () => void;
  className?: string;
}

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const pages: MenuItemProps[] = [
  { title: 'About', icon: <BsFillPersonBadgeFill />, href: 'about' },
  { title: 'Projects', icon: <FaLaptopCode />, href: 'projects' },
  { title: 'Contacts', icon: <FaPhone />, href: 'contacts' }
];

const SidebarVariants: Variants = {
  open: (radius: number = 1000) => ({
    clipPath: `circle(${radius * 2}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(28px at 40px 40px)',
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 400,
      damping: 40
    }
  }
};

const HoverBGVariants: Variants = {
  hover: { height: '68px', width: '68px' },
  idle: { height: '60px', width: '60px' },
  tap: { height: '57px', width: '57px' }
};

const NavVariants: Variants = {
  open: { transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) } },
  closed: { transition: { delayChildren: stagger(0.05, { from: 'last' }) } }
};

const ItemsVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } }
  }
};

const Path: FC<PathProps> = (props) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="var(--primary-contrast)" strokeLinecap="round" {...props} />
);

const MenuItem: FC<MenuItemProps> = ({ title, icon, href }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.li
      className="h-15 w-full"
      variants={ItemsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <Link href={href} className="flex h-full w-full items-center justify-evenly">
        {icon}
        <div className="w-[50%]">
          <div className="text-[25px] text-primary-contrast">{title}</div>
        </div>
        <div />
      </Link>
      <motion.div
        className="h-[2px] bg-primary-contrast"
        animate={isHover ? { width: '100%' } : { width: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, restDelta: 0.2 }}
      />
    </motion.li>
  );
};

const Navigation: FC<NavigationProps> = ({ pages }) => (
  <motion.ul className="relative z-5 flex flex-col pt-24 px-6 gap-4" variants={NavVariants}>
    {pages.map(({ title, icon, href }) => (
      <MenuItem title={title} icon={icon} href={href} key={`sidebar-nav-${href}`} />
    ))}
  </motion.ul>
);

const ToggleButton: FC<ToggleButtonProps> = ({
  action,
  onHoverStart,
  onHoverEnd,
  onTapStart,
  onTap,
  onTapCancel,
  className
}) => (
  <motion.button
    onClick={() => action()}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 100 }}
    className={className}
    onTapStart={onTapStart}
    onTap={onTap}
    onTapCancel={onTapCancel}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
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

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);
  const [isButtonTapped, setIsButtonTapped] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    if (navRef.current) ro.observe(navRef.current);

    return () => ro.disconnect();
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={false}
      animate={isOpened ? 'open' : 'closed'}
      className="fixed top-0 left-0 w-full md:w-[30%] md:min-w-64 md:max-w-[400px] h-screen z-50"
    >
      <motion.div
        variants={SidebarVariants}
        className="top-0 left-0 w-full h-full z-0 absolute bg-primary"
        custom={height}
      />
      <motion.div
        className="absolute top-[40px] left-[40px] -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"
        variants={HoverBGVariants}
        animate={isButtonTapped ? 'tap' : isButtonHovered ? 'hover' : 'idle'}
        transition={{ type: 'spring', stiffness: 400, restDelta: 0.3, damping: 100 }}
      />
      <IconContext.Provider value={{ size: '25', color: 'var(--primary-contrast)' }}>
        <Navigation pages={pages} />
      </IconContext.Provider>
      <ToggleButton
        action={() => setIsOpened((prev) => !prev)}
        onHoverStart={() => setIsButtonHovered(true)}
        onHoverEnd={() => setIsButtonHovered(false)}
        onTapStart={() => setIsButtonTapped(true)}
        onTap={() => setIsButtonTapped(false)}
        onTapCancel={() => setIsButtonTapped(false)}
        className="flex absolute top-[40px] left-[40px] -translate-x-1/2 -translate-y-1/2 h-[60px] w-[60px] rounded-full items-center justify-center cursor-pointer z-10"
      />
    </motion.nav>
  );
};

export default Sidebar;
