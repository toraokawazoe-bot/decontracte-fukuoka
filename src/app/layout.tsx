import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/a/Header";
import { Footer } from "@/components/a/Footer";
import { Motion } from "@/components/a/Motion";

const dm = DM_Sans({ variable: "--font-dm", subsets: ["latin"], weight: ["500", "700"], display: "swap" });
// 日本語の字形も配信させるため subsets を指定せず preload を切る(CJKフォントの推奨設定)
const noto = Noto_Sans_JP({ variable: "--font-noto", weight: ["500", "700", "900"], display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://decontracte-fukuoka.vercel.app"),
  title: {
    default: "DÉCONTRACTÉ | チームユニフォームのフルオーダー 福岡",
    template: "%s | DÉCONTRACTÉ",
  },
  description:
    "サッカー・フットサル・ソサイチのチームユニフォームを、昇華プリントのフルオーダーで。初回5枚から、追加は1枚から。福岡・薬院。",
  // 作り直し案の確認用。本番として公開する時に外す
  robots: { index: false, follow: false },
  openGraph: {
    title: "DÉCONTRACTÉ | FULL ORDER UNIFORMS",
    description: "サッカー・フットサル・ソサイチのチームユニフォームを、フルオーダーで。初回5枚から。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${dm.variable} ${noto.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="sr" href="#main">本文へ移動</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
