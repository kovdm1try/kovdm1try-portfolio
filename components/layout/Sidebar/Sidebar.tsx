'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { BsFillPersonBadgeFill } from 'react-icons/bs';

import { Variants } from 'motion';
import { motion } from 'motion/react';
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
  className?: string;
}

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const pages: MenuItemProps[] = [{ title: 'About', icon: <BsFillPersonBadgeFill />, href: 'about' }];

const MenuItem: FC<MenuItemProps> = ({ title, icon, href }) => {
  return (
    <li className="flex items-center justify-around">
      <Link href={href}>
        <div className="">{icon}</div>
        <div className="">{title}</div>
      </Link>
    </li>
  );
};

const Navigation: FC<NavigationProps> = ({ pages }) => {
  return (
    <ul className="">
      {pages.map(({ title, icon, href }) => (
        <MenuItem title={title} icon={icon} href={href} key={`sidebar-nav-href`} />
      ))}
    </ul>
  );
};

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="var(--primary-contrast)" strokeLinecap="round" {...props} />
);

const ToggleButton: FC<ToggleButtonProps> = ({ action, className }) => {
  return (
    <button onClick={() => action()} className={className}>
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
    </button>
  );
};

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
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 400,
      damping: 40
    }
  }
};

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    return () => ro.disconnect();
  }, []);

  return (
    <div className="w-full h-screen" ref={containerRef}>
      <motion.nav
        initial={false}
        animate={isOpened ? 'open' : 'closed'}
        className="relative w-full md:w-[30%] md:min-w-64 md:max-w-[400px] h-screen"
      >
        <motion.div
          variants={SidebarVariants}
          className="top-0 left-0 w-full h-full z-0 absolute bg-primary"
          custom={height}
        />
        <Navigation pages={pages} />
        <ToggleButton
          action={() => setIsOpened((prev) => !prev)}
          className="flex z-1 absolute top-[40px] left-[40px] -translate-x-1/2 -translate-y-1/2 h-[60px] w-[60px] rounded-full items-center justify-center cursor-pointer"
        />
      </motion.nav>
    </div>
  );
};

export default Sidebar;
