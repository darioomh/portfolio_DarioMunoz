/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Sidebar } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { Contact, Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Sidebar />

      <main className="md:ml-20">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
