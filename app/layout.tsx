import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/layout/Sidebar';

import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

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
    <html lang="en" className={`h-full antialiased`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
