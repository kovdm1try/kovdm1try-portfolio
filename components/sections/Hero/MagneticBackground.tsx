'use client';

import { FC, useEffect, useRef, useState } from 'react';

import * as motion from 'motion/react-client';
import { MotionValue, useMotionValue, useSpring, useTransform } from 'motion/react';

const TICK_SQUARE_SIZE: number = 55;

interface TickProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  col: number;
  row: number;
}

const Tick: FC<TickProps> = ({ mouseX, mouseY, col, row }) => {
  const tickX = col * TICK_SQUARE_SIZE;
  const tickY = row * TICK_SQUARE_SIZE;
  const lastAngle = useRef(0);

  const rotate = useTransform(() => {
    const mX = mouseX.get();
    const mY = mouseY.get();
    const raw = (Math.atan2(mY - tickY, mX - tickX) * 180) / Math.PI;
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
      key={`tick-${col}-row-${row}`}
    >
      <motion.div
        className="h-[60%] w-[3px] bg-[color-mix(in_srgb,var(--muted-foreground)_30%,transparent)] rounded-full"
        style={{ rotate: smoothRotate }}
      />
    </div>
  );
};

const MagneticBackground = () => {
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

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('mousemove', mouseMoveHandler);
        } else {
          window.removeEventListener('mousemove', mouseMoveHandler);
        }
      },
      { threshold: 0 }
    );

    if (blockRef.current) io.observe(blockRef.current);

    return () => {
      io.disconnect();
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-between absolute inset-0 z-0" ref={blockRef}>
      {Array.from({ length: Math.floor(blockHeight / TICK_SQUARE_SIZE) }).map((_, row) => (
        <div className="flex items-center justify-between w-full h-fit" key={`tick-row-${row}`}>
          {Array.from({ length: Math.floor(blockWidth / TICK_SQUARE_SIZE) }).map((_, col) => (
            <Tick mouseX={mouseX} mouseY={mouseY} col={col} row={row} key={`tick-${col}-${row}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MagneticBackground;
