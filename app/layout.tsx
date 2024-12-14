import './globals.css';
import type { Metadata } from 'next';
import { Sora as SoraFont } from "next/font/google";
import Navbar from '@/components/shared/Navbar';

const sora = SoraFont({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cosmoscape - NASA Space Explorer',
  description: 'Explore the wonders of space through NASA\'s incredible imagery and data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={sora.className}>
      <Navbar />
      {children}
    </body>
  </html>
  );
}