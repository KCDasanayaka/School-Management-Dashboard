import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

// Assuming Menu component is available
import Menu from "../app/components/Menu"; // Adjust the path as needed
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="h-full flex">
          {/* Sidebar */}
          <div className="w-[8%] lg:w-[16%] xl:w-[14%] flex flex-col items-center lg:items-start p-4 bg-white h-full">
            <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <span className="hidden lg:block text-white font-semibold">LMS</span>
            </Link>
            <Menu/> {/* Render the Menu component here */}
          </div>

          {/* Main Content Area */}
          <div className="w-[92%] lg:w-[84%] xl:w-[86%] p-6 bg-[#F7F8Fa] overflow-scroll">
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
