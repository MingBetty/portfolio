"use client";

import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { services } from "../../data/services";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Code2,
  Smartphone,
  Globe,
  Database,
  Palette,
  Zap,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-accent text-sm mb-2 font-mono">
              what I do ?
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My{" "}
              <span className="text-accent accent-glow">Skills</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              I design user-centered digital experiences by combining research, data, and interaction design.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative bg-card border border-border rounded-xl p-6 cursor-pointer overflow-hidden card-hover"
                >
                  {/* Card glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  {/* Number */}
                  <div className="absolute top-4 right-4 text-accent/10 text-5xl font-bold pointer-events-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                      {IconComponent && (
                        <IconComponent
                          size={22}
                          className="text-accent"
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs border border-accent/20 text-accent/70 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-accent transition-colors duration-200">
                      <span>Learn more</span>
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </div>
                  </div>

                  {/* Bottom border accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-16 p-8 border border-border rounded-xl bg-card/50"
          >
            <p className="text-gray-400 text-sm mb-2">
              // Have a project in mind?
            </p>
            <h3 className="text-white text-xl font-bold mb-4">
              Let&apos;s Work Together
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark font-semibold rounded text-sm hover:bg-accent/90 transition-all duration-200"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
