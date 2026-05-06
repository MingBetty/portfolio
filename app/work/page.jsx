"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { projects, categories } from "../../data/projects";
import { ExternalLink, ArrowRight, FolderKanban } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden card-hover"
    >
      <div className="relative h-48 overflow-hidden border-b border-border bg-dark">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/50 to-accent/20" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#ddff6d 1px, transparent 1px), linear-gradient(90deg, #ddff6d 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute left-5 top-5 flex items-center gap-2 text-xs text-accent z-10">
          <FolderKanban size={14} />
          <span>// project_{String(index + 1).padStart(2, "0")}</span>
        </div>

        {project.featured && (
          <div className="absolute right-5 top-5 px-2 py-1 text-xs border border-accent/30 bg-accent/10 text-accent rounded-full z-10">
            Featured
          </div>
        )}

        <div className="absolute bottom-5 left-5 right-5 z-10">
          <p className="text-accent/80 text-xs mb-1">{project.category}</p>
          <h3 className="text-white text-xl font-bold group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs border border-accent/20 text-accent/70 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 border border-border rounded text-xs text-gray-300 hover:text-accent hover:border-accent transition-all duration-200"
            >
              <span>▶</span>
              <span>Watch Demo</span>
            </a>
          )}

          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 border border-border rounded text-xs text-gray-300 hover:text-accent hover:border-accent transition-all duration-200"
            >
              <span>📄</span>
              <span>Case Study</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageTransition>
      <div className="min-h-screen py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-sm mb-2"># my work</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Selected<span className="text-accent accent-glow"> Projects</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              A collection of work focused on user research, data-driven design, and building meaningful digital experiences that create real-world impact.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${activeCategory === category
                  ? "bg-accent text-dark border-accent font-bold"
                  : "text-gray-400 border-border hover:border-accent/40 hover:text-white"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
