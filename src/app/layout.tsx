import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./styles/globals.css";
import { PathnameInfoProvider } from "@/context/pathname-context";

// If loading a variable font, you don't need to specify the font weight
const openSans = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FisiQAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PathnameInfoProvider>
      <html lang="es">
        <body className={`${openSans.className} antialiased`}>{children}</body>
      </html>
    </PathnameInfoProvider>
  );
}
