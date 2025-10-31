import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { SWRConfig } from 'swr';

export const metadata: Metadata = {
  title: 'StarkVision - AI-Powered Visual Search in Satellite Imagery',
  description: 'Advanced AI solution for real-time detection and classification of objects in satellite imagery, enhancing environmental monitoring and disaster response.',
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <SWRConfig
          value={{
            fallback: {
            }
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
