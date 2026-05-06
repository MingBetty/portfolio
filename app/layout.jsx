import { JetBrains_Mono } from "next/font/google";
import "../app/globals.css";
import Navbar from "../components/Navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Personal portfolio website of a full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono bg-dark text-white min-h-screen`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
