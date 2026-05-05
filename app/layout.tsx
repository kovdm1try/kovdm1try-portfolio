import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import PageTransition from '@/components/layout/PageTransition';
import Sidebar from '@/components/layout/Sidebar';
import { TransitionProvider } from '@/components/layout/TransitionContext';

import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Kovtunov Dmitry',
  description: 'github: kovdm1try'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <TransitionProvider>
          <Sidebar />
          <PageTransition>{children}</PageTransition>
        </TransitionProvider>
      </body>
    </html>
  );
}
