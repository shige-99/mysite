import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "shige",
  description: "personal site of shige.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${mplus.className} max-w-3xl mx-auto min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
