import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H5 games",
  description: "Creado Por: Honori55",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
