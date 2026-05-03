'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface TransitionContextType {
  isReady: boolean;
  setIsReady: (v: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isReady: false,
  setIsReady: () => {
    /* empty */
  }
});

export const useTransitionReady = () => useContext(TransitionContext);

export const TransitionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  return <TransitionContext.Provider value={{ isReady, setIsReady }}>{children}</TransitionContext.Provider>;
};
