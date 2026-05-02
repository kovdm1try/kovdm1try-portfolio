'use client';

import { FC, useEffect, useRef, useState } from 'react';

import * as motion from 'motion/react-client';
import clsx from 'clsx';
import { MotionValue, useMotionValue, useSpring, useTransform } from 'motion/react';

interface MagneticBackgroundProps {
  className?: string;
}

const TICK_SQUARE_SIZE: number = 40;

interface TickProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  i: number;
  rw: number;
}

const Tick: FC<TickProps> = ({ mouseX, mouseY, i, rw }) => {
  const tickX = i * TICK_SQUARE_SIZE;
  const tickY = rw * TICK_SQUARE_SIZE;
  const lastAngle = useRef(0);

  const rotate = useTransform([mouseX, mouseY], ([mX, mY]: number[]) => {
    const raw = (Math.atan2(mY - tickY, mX - tickX) * 180) / Math.PI - 90;
    let delta = ((raw - lastAngle.current + 180) % 360) - 180;
    if (delta < -180) delta += 360;
    lastAngle.current = lastAngle.current + delta;
    return lastAngle.current;
  });

  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 20 });

  return (
    <div
      style={{ width: TICK_SQUARE_SIZE, height: TICK_SQUARE_SIZE }}
      className="flex items-center justify-center"
      key={`tick-${i}-row-${rw}`}
    >
      <motion.div className="h-full w-[6px] bg-foreground rounded-full" style={{ rotate: smoothRotate }} />
    </div>
  );
};

const MagneticBackground: FC<MagneticBackgroundProps> = ({ className }) => {
  const [blockWidth, setBlockWidth] = useState<number>(0);
  const [blockHeight, setBlockHeight] = useState<number>(0);
  const blockRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setBlockHeight(entry.contentRect.height);
      setBlockWidth(entry.contentRect.width);
    });

    if (blockRef.current) ro.observe(blockRef.current);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const rect = blockRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <div className={clsx('flex flex-col items-center justify-between', className)} ref={blockRef}>
      {Array.from({ length: Math.floor(blockHeight / TICK_SQUARE_SIZE) }).map((_, rw) => (
        <div className="flex items-center justify-between w-full h-fit" key={`tick-row-${rw}`}>
          {Array.from({ length: Math.floor(blockWidth / TICK_SQUARE_SIZE) }).map((_, i) => (
            <Tick mouseX={mouseX} mouseY={mouseY} i={i} rw={rw} key={`tick-${i}-${rw}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MagneticBackground;
