import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AutoReach - AI-Powered Customer Support & Marketing Automation',
  description: 'Transform your customer interactions with AutoReach\'s intelligent platform that combines AI support agents with personalized marketing automation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <ToastContainer />
      <body className={inter.className}>{children}</body>
    </html>
  );
}