import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brickwall.dev",
  description: "Just another brick in the wall.",
  keywords: "games development, games portfolio, 2D games, 3D games, games, portfolio, Louie Waterfall, Louie, Waterfall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#111010]" >
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
