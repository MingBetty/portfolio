"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { experience, education, skills, aboutMe } from "../../data/resume";
import {
  Briefcase,
  GraduationCap,
  Code2,
  User,
  MapPin,
  Calendar,
  Download,
  CheckCircle2,
  Quote,
} from "lucide-react";

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "about", label: "About Me", icon: User },
];

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent/70 to-accent rounded-full"
        />
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l border-border last:border-l-0 last:pb-0 group"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-accent bg-dark group-hover:bg-accent transition-colors duration-300" />

      <div className="bg-card border border-border rounded-xl p-5 group-hover:border-accent/30 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-white font-bold text-base">
              {type === "experience" ? item.role : item.degree}
            </h3>
            <p className="text-accent text-sm font-medium">
              {type === "experience" ? item.company : item.school}
            </p>
          </div>
          {type === "experience" && item.current && (
            <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {item.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {item.location}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {type === "experience" && item.tech && (
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {type === "education" && item.achievements && (
          <div className="flex flex-wrap gap-2">
            {item.achievements.map((achievement) => (
              <span
                key={achievement}
                className="flex items-center gap-1 px-2 py-0.5 text-xs bg-accent/10 text-accent rounded border border-accent/20"
              >
                <CheckCircle2 size={10} />
                {achievement}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <PageTransition>
      <div className="min-h-screen py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-sm mb-2">Experience & Journey</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="text-accent accent-glow">Resume</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              My journey across product, UX, AI, and Web3. Here&apos;s my
              professional journey.
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent text-sm rounded hover:bg-accent hover:text-dark transition-all duration-200"
            >
              <Download size={15} />
              Download Full CV
            </a>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    activeTab === tab.id
                      ? "bg-accent text-dark border-accent font-bold"
                      : "text-gray-400 border-border hover:border-accent/40 hover:text-white"
                  }`}
                >
                  <TabIcon size={15} />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-gray-500 text-xs mb-6 flex items-center gap-2">
                  <Briefcase size={13} />
                  // work_experience.json
                </h2>
                <div>
                  {experience.map((item) => (
                    <TimelineItem key={item.id} item={item} type="experience" />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-gray-500 text-xs mb-6 flex items-center gap-2">
                  <GraduationCap size={13} />
                  // education_history.json
                </h2>
                <div>
                  {education.map((item) => (
                    <TimelineItem key={item.id} item={item} type="education" />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-gray-500 text-xs mb-6 flex items-center gap-2">
                  <Code2 size={13} />
                  // technical_skills.json
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.map((skillGroup, groupIndex) => (
                    <div
                      key={skillGroup.category}
                      className="bg-card border border-border rounded-xl p-5"
                    >
                      <h3 className="text-accent font-bold text-sm mb-5 flex items-center gap-2">
                        <span className="text-accent/50">//</span>
                        {skillGroup.category}
                      </h3>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          index={skillIndex + groupIndex * 5}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-gray-500 text-xs mb-6 flex items-center gap-2">
                  <User size={13} />
                  // about_me.json
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                    <h3 className="text-accent font-bold text-sm">
                      // introduction
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {aboutMe.intro}
                    </p>

                    <div className="space-y-2 pt-2">
                      {aboutMe.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <span className="text-accent text-xs">▸</span>
                          {detail}
                        </div>
                      ))}
                    </div>

                    <div className="relative mt-4 p-4 border-l-2 border-accent bg-accent/5 rounded-r-lg">
                      <Quote size={14} className="text-accent/50 mb-2" />
                      <p className="text-gray-400 text-xs italic leading-relaxed">
                        {aboutMe.quote}
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                    <h3 className="text-accent font-bold text-sm">
                      // fun_facts
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {aboutMe.funFacts.map((fact) => (
                        <div
                          key={fact}
                          className="p-4 border border-border rounded-lg bg-dark/40 text-sm text-gray-300 hover:border-accent/40 transition-colors duration-200"
                        >
                          {fact}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
