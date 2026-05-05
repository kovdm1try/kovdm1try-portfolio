'use client';

import { FC } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { useTransitionStore } from '@/store/transitionStore';

interface OutroSectionProps {
  title: string;
  accent: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  primaryIcon?: React.ReactNode;
  secondaryLabel: string;
  secondaryHref: string;
  externalPrimary?: boolean;
}

const OutroSection: FC<OutroSectionProps> = ({
  title,
  accent,
  subtitle,
  primaryLabel,
  primaryHref,
  primaryIcon,
  secondaryLabel,
  secondaryHref,
  externalPrimary = false
}) => {
  const { navigateTo } = useTransitionStore();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_50%_40%,#E8EDFB,#F6F8FC)] overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-[250px] top-[-10%] left-[-8%] blur-[80px]"
        style={{ background: 'rgba(99,102,241,0.18)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-[200px] bottom-[-5%] right-[-5%] blur-[80px]"
        style={{ background: 'rgba(132,94,247,0.15)' }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-[150px] top-[30%] right-[10%] blur-[60px]"
        style={{ background: 'rgba(77,171,247,0.13)' }}
      />
      <div
        className="absolute w-[250px] h-[250px] rounded-[125px] bottom-[20%] left-[15%] blur-[60px]"
        style={{ background: 'rgba(132,94,247,0.12)' }}
      />
      <div className="flex flex-col items-center text-center gap-6 px-6 relative z-1">
        <h2 className="text-[52px] min-[800px]:text-[80px] font-[800] leading-none tracking-tight text-gray-900">
          {title} <span className="text-primary">{accent}</span>
        </h2>
        <p className="text-muted-foreground text-[16px] min-[800px]:text-[18px]">{subtitle}</p>
        <div className="flex gap-3 mt-2 flex-wrap justify-center">
          {externalPrimary ? (
            <a
              href={primaryHref}
              rel="noopener noreferrer"
              className="flex w-[200px] items-center justify-center gap-2.5 px-6 py-3 rounded-[24px] bg-primary text-white font-[500] text-[15px] hover:-translate-y-0.5 transition-transform shadow-sm"
            >
              {primaryIcon}
              {primaryLabel}
            </a>
          ) : (
            <button
              onClick={() => navigateTo(primaryHref)}
              className="flex w-[200px] items-center justify-center gap-2.5 px-6 py-3 rounded-[24px] bg-primary text-white font-[500] text-[15px] hover:-translate-y-0.5 transition-transform shadow-sm cursor-pointer"
            >
              {primaryIcon}
              {primaryLabel}
            </button>
          )}
          <button
            onClick={() => navigateTo(secondaryHref)}
            className="flex w-[200px] items-center justify-center gap-2.5 px-6 py-3 rounded-[24px] bg-white text-gray-900 font-[500] text-[15px] border border-[rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-transform shadow-sm cursor-pointer"
          >
            {secondaryLabel}
            <HiArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutroSection;
