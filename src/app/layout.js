import { Inter } from "next/font/google";

import { Poppins } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Pastel Hub",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing_script",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${dancing_script.variable} `}>
        <div className="bg-dimWhite">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
