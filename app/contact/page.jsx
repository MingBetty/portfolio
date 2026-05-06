"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ExternalLink
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  { icon: ExternalLink, label: "LinkedIn", href: "https://www.linkedin.com/in/guan-ming-wang-81bb27279" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-accent text-sm mb-2">// contact me</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get In <span className="text-accent accent-glow">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Have a project, collaboration, or role in mind? Send a message
              and let&apos;s build something useful together.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-accent text-sm mb-2">// availability</p>
                <h2 className="text-white text-2xl font-bold mb-3">
                  Let&apos;s talk about your next idea.
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I&apos;m open to freelance projects, full-time opportunities,
                  product collaborations, and technical consulting.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Location" ? "_blank" : undefined}
                    rel={label === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-all duration-200 group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg">
                      <Icon size={19} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-gray-300 text-sm group-hover:text-accent transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-gray-500 text-xs mb-4">// social_links</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center border border-border rounded text-gray-400 hover:text-accent hover:border-accent transition-all duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-card border border-border rounded-xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-gray-400 text-xs mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-gray-400 text-xs mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 text-xs mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-accent text-dark font-semibold rounded text-sm hover:bg-accent/90 transition-all duration-200"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
