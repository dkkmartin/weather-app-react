import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Weather',
  description: 'Weather app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="body m-0">{children}</body>
    </html>
  );
}
