'use client';

import * as motion from 'motion/react-client';

const PerspectiveGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute left-1/2 -bottom-[20%] w-[200%] h-[120%] [transform:translateX(-50%)_perspective(800px)_rotateX(50deg)] [mask-image:linear-gradient(180deg,transparent_0%,#000_35%,#000_75%,transparent_100%)]"
      style={{
        backgroundImage: [
          'linear-gradient(rgba(59,91,219,.22) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(59,91,219,.22) 1px, transparent 1px)'
        ].join(', '),
        // eslint-disable-next-line no-inline-styles/no-inline-styles
        backgroundSize: '64px 64px, 64px 64px'
      }}
      animate={{ backgroundPosition: ['0px 0px, 0px 0px', '0px 64px, 64px 0px'] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

export default PerspectiveGrid;
