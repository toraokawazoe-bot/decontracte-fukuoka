import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HudOverlay } from "@/components/HudOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decontracte.co"),
  title: {
    default: "DÉCONTRACTÉ — フルオーダー チームウェア",
    template: "%s | DÉCONTRACTÉ",
  },
  description:
    "福岡発、昇華フルオーダーのチームユニフォーム制作。サッカー・フットサル・ソサイチ向け。最低5枚から、追加は1枚〜。",
  openGraph: {
    title: "DÉCONTRACTÉ — フルオーダー チームウェア",
    description:
      "福岡発、昇華フルオーダーのチームユニフォーム制作。最低5枚から、追加は1枚〜。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable} ${notoJp.variable} h-full antialiased`}
    >
      <body className="canvas-grain min-h-full">
        <div className="relative z-10 article-col flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <HudOverlay />
      </body>
    </html>
  );
}
