import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "@/theme/Theme";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@components/BackToTop/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Website",
  description: "Developed by Abdelrahman Abdelmoaty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </Theme>
      </body>
    </html>
  );
}
