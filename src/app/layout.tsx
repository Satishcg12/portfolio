import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satish.dev",
  description: "Personal website of Satish Chaudhary",
  keywords: ["Personal website", "Satish Chaudhary"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} animated-gradient  text-lg max-w-6xl mx-auto flex flex-col h-screen`}
      >
          <Navbar />
        

          {children}
      </body>
    </html>
  );
}
