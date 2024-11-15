import type { Metadata } from "next";
import "./styles/globals.css";
import { PathnameInfoProvider } from "@/context/pathname-context";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PathnameInfoProvider>
      <html lang="es">
        <body className="antialiased">{children}</body>
      </html>
    </PathnameInfoProvider>
  );
}
