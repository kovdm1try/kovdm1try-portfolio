import { create } from 'zustand';

interface TransitionStore {
  isReady: boolean;
  pendingHref: string | null;
  setReady: (v: boolean) => void;
  navigateTo: (href: string) => void;
  clearPending: () => void;
}

export const useTransitionStore = create<TransitionStore>((set) => ({
  isReady: false,
  pendingHref: null,
  setReady: (v) => set({ isReady: v }),
  navigateTo: (href) => set({ pendingHref: href }),
  clearPending: () => set({ pendingHref: null })
}));
