import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grocery Store',
  description: 'Your favorite online grocery shopping platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
