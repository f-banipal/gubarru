import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aqqaru – Your Gateway to the World of Wine",
  description:
    "Explore the world of wine — articles, videos, experiences, and a passionate community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          <nav className="nav">
            <div className="logo">🍷 Aqqaru</div>
            <ul className="menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Aqqaru – All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
