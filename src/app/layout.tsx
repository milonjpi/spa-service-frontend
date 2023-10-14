import './globals.css'
import type { Metadata } from 'next';
import Providers from '@/lib/Providers';

export const metadata: Metadata = {
  title: '24/7 Spa Service',
  description: 'This is 24/7 Spa house',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
