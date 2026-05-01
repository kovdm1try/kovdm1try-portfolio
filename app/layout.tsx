import type { Metadata } from 'next';

import Sidebar from '@/components/layout/Sidebar';

import './globals.css';

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
      <body className="min-h-full flex flex-col">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
