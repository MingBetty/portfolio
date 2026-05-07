import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../app/globals.css";
import Navbar from "../components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Portfolio | MingBailey",
  description: "Personal portfolio website of UX Designer & Product Strategist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} bg-dark text-white min-h-screen font-sans`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
