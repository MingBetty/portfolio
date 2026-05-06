"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const roles = [
  "UX Designer",
  "Product Manager",
  "HCI Researcher",
  "Business Analyst",
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/guan-ming-wang-81bb27279", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/ming07_29?igsh=MTQ4NDd6OTJlM3VuMA%3D%3D&utm_source=qr", label: "Instagram" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[currentRole];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#00ff99 1px, transparent 1px), linear-gradient(90deg, #00ff99 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Left blob decoration */}
      <div className="absolute bottom-10 left-0 pointer-events-none">
        <div className="w-32 h-32 bg-accent/20 rounded-full blur-2xl blob-animate" />
        <div className="absolute bottom-0 left-4 text-accent/30 text-6xl">
          ♥
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-full text-xs text-accent"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Work
            </motion.div>

            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Welcome, This is</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Guan-Ming
                <br />
                <span className="text-accent accent-glow">Wang</span>
              </h1>
            </div>

            {/* Typing role */}
            <div className="flex items-center gap-2 text-lg sm:text-xl text-gray-300 min-h-[2rem]">
              <span className="text-accent">&gt;</span>
              <span>{displayText}</span>
              <span className="text-accent cursor-blink font-bold">_</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              I bridge Python data logic with Figma/Adobe CC design to transform complex architectures into intuitive prototypes.As an ACM CHI SDC 2025 finalist,student startup CEO, and former Logitech intern, I lead data-driven UX from prototype to mass production.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark font-semibold rounded hover:bg-accent/90 transition-all duration-200 text-sm"
              >
                <Download size={16} />
                View CV
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded hover:border-accent hover:text-accent transition-all duration-200 text-sm"
                >
                  View My Work
                </Link>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-gray-500 text-xs">connect</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center border border-border rounded text-gray-400 hover:text-accent hover:border-accent transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40 ring-rotate" />

              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full border border-accent/20" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent/50 m-6">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {/* Fallback gradient */}
                <div className="flex items-center justify-center w-[300px] h-[300px] rounded-full overflow-hidden border border-green-500">
                  <img 
                    src="/images/profile.jpg" 
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-4 bg-card border border-accent/30 rounded-lg px-3 py-2 text-xs"
              >
                <span className="text-accent font-bold">3+</span>
                <span className="text-gray-400 ml-1">Years UX Exp.</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-6 bg-card border border-accent/30 rounded-lg px-3 py-2 text-xs"
              >
                <span className="text-accent font-bold">10+</span>
                <span className="text-gray-400 ml-1">Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
