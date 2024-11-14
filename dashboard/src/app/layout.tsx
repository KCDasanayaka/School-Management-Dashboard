import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Menu/>
        {children}
        </body>
    </html>
  );
}
