'use client';

import { useEffect, useState } from 'react';

export const useTypewriter = (text: string, enabled = false, charsPerTick = 4, tickMs = 16) => {
  const [{ index, activeText }, setState] = useState({ index: 0, activeText: text });

  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => {
      setState((prev) => {
        const current = prev.activeText === text ? prev.index : 0;
        if (current >= text.length) {
          clearInterval(id);
          return { index: current, activeText: text };
        }
        return { index: Math.min(current + charsPerTick, text.length), activeText: text };
      });
    }, tickMs);
    return () => clearInterval(id);
  }, [text, enabled, charsPerTick, tickMs]);

  const effectiveIndex = activeText === text ? index : 0;

  return {
    displayed: text.slice(0, effectiveIndex),
    done: effectiveIndex >= text.length
  };
};
