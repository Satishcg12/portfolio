import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satish.dev",
  description: "Personal website of Satish Chaudhary",
  keywords: ["Personal website", "Satish Chaudhary"],
  metadataBase: new URL("https://www.satishchaudhary.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-gray-800 dark:text-white font-mono animated-gradient  text-lg max-w-6xl mx-auto flex flex-col h-screen`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
