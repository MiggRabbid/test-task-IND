import type { Metadata } from 'next';
import '../styles/globals.scss';
import React from 'react';
import AppHeader from '@/components/layout/header/AppHeader';

export const metadata: Metadata = {
  title: 'STEMPS',
  description: 'Образовательная онлайн‑платформа',
  keywords:
    'образование, онлайн платформа, STEM, курсы, обучение, онлайн обучение, STEMPS',
  openGraph: {
    title: 'STEMPS - Образовательная онлайн-платформа',
    description:
      'STEMPS — образовательная онлайн‑платформа для для архитекторов, урбанистов, девелоперов и специалистов креативных индустрий.',
    url: 'https://stemps.ru/',
    siteName: 'STEMPS',

    type: 'website',
  },
  robots: {
    index: false, // чтобы не индексировалось, т.к. это тестовое задание
    follow: false, // чтобы не индексировалось, т.к. это тестовое задание
  },
};

type IRootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={metadata.keywords as string} />
      <meta name="description" content={metadata.keywords as string} />
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
