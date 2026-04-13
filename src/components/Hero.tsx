import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowRight, ChevronDown, Terminal } from "lucide-react";

function Typewriter({ texts, delay = 0 }: { texts: string[]; delay?: number }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setIsStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === texts[index].length ? 1000 : 100, parseInt((Math.random() * 50).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, isStarted]);

  return (
    <span className="font-mono text-neon-blue">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, "-100%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(useTransform(mouseX, [0, 1920], [-20, 20]), springConfig);
  const dy = useSpring(useTransform(mouseY, [0, 1080], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const titles = [
    "Desarrollador de Software especializado en Inteligencia Artificial",
    "Especialista en Deep Learning & Machine Learning",
    "Arquitecto de Soluciones Escalables & Datos"
  ];

  return (
    <section 
      className="relative h-screen flex flex-col justify-center px-12 bg-[#050505] overflow-hidden select-none" 
      id="hero"
      onMouseMove={handleMouseMove}
    >
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Particles />
        <motion.div 
          style={{ x: dx, y: dy }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          
          {/* Main Name & Title */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display text-8xl md:text-[11rem] font-bold tracking-tighter leading-none text-white"
            >
              Dario Muñoz
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-4xl font-sans font-light tracking-tight text-white/80"
            >
              <Typewriter texts={titles} delay={1200} />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="font-sans text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed font-light"
          >
            Desarrollando aplicaciones inteligentes, sistemas escalables y soluciones basadas en datos combinando ingeniería de software y machine learning.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-wrap gap-8 pt-8"
          >
            <a 
              href="#work"
              className="group relative px-10 py-4 bg-white text-black font-display font-bold text-lg tracking-tight overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors">Ver proyectos</span>
            </a>
            <a 
              href="#contact"
              className="group px-10 py-4 border border-white/10 hover:border-white/40 transition-all font-display font-bold text-lg text-white/60 hover:text-white"
            >
              Contactar
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[8px] text-white/20 tracking-[0.5em] uppercase vertical-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
