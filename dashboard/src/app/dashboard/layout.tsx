import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";

import Menu from "../../app/components/Menu"; // Adjust the path as needed
import Navbar from "../components/Navbar";

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
    <html lang="en" className="h-full">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} h-full min-h-screen`}>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-[8%] lg:w-[16%] xl:w-[14%] flex flex-col items-center lg:items-start p-4 bg-white text-black">
            <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <span className="hidden lg:block font-semibold">LMS</span>
            </Link>
            <Menu /> {/* Render the Menu component here */}
          </aside>

          {/* Main Content Area */}
          <main className="w-[92%] lg:w-[84%] xl:w-[86%] p-6 bg-[#F7F8Fa] overflow-scroll flex flex-col">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
