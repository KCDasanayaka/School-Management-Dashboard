import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "../globals.css";

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
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default Description"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${inter.className} h-full min-h-screen bg-gray-100`}>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-[8%] lg:w-[16%] xl:w-[14%] flex flex-col items-center lg:items-start p-4 bg-white shadow-md">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 lg:justify-start mb-6"
            >
              <Image src="/logo.png" alt="LMS Logo" width={32} height={32} />
              <span className="hidden lg:block font-semibold text-lg">LMS</span>
            </Link>
            <Menu />
          </aside>

          {/* Main Content Area */}
          <main className="w-[92%] lg:w-[84%] xl:w-[86%] p-6 bg-[#F7F8Fa] overflow-y-auto">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
