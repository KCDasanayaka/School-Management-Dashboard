import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="h-screen flex">
          <div className="w-[8%] lg:w-[16%] xl:w-[14%] bg-red-500">
            l
          </div>
          <div className="w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-600">
            r
          </div>
        </div>
      </body>
    </html>
  );
}
