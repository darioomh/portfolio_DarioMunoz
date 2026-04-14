import { motion } from "motion/react";
import { BrainCircuit } from "lucide-react";
import { PROFILE } from "@/src/constants";

export function TechStack() {
  const nodes = [
    // Inner Ring (Radius ~22%)
    { name: "Python", angle: 0, radius: 22, color: "#3776AB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Kotlin", angle: 60, radius: 22, color: "#7F52FF", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Java", angle: 120, radius: 22, color: "#007396", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL", angle: 180, radius: 22, color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", angle: 240, radius: 22, color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", angle: 300, radius: 22, color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    
    // Outer Ring (Radius ~40%)
    { name: "C#", angle: 25, radius: 40, color: "#239120", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Pandas", angle: 76, radius: 40, color: "#150458", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", angle: 127, radius: 40, color: "#013243", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "PySpark", angle: 178, radius: 40, color: "#E25A1C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "Compose", angle: 229, radius: 40, color: "#4285F4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
    { name: "Matplotlib", angle: 280, radius: 40, color: "#11557C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Seaborn", angle: 331, radius: 40, color: "#3776AB", icon: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg" },
  ];

  return (
    <section className="py-32 px-12 bg-surface-low overflow-hidden" id="labs">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-bold mb-6"
        >
          Stack <span className="text-neon-blue">Tecnológico</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-xl mx-auto"
        >
          Ecosistema de herramientas y lenguajes integrados para el desarrollo de soluciones de software e inteligencia artificial.
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto h-[700px] flex items-center justify-center">
        {/* Animated Background Orbits */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {[22, 40].map((radius, idx) => (
            <motion.div
              key={radius}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              className="absolute border border-neon-blue/30 rounded-full"
              style={{ width: `${radius * 2}%`, height: `${radius * 2}%` }}
            />
          ))}
          {/* Pulsing Core Glow */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="relative w-44 h-44 glass-panel rounded-full flex flex-col items-center justify-center z-20 border-neon-blue shadow-[0_0_100px_rgba(0,242,255,0.2)] group"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-neon-blue/10"
          />
          <div className="relative z-10 flex flex-col items-center">
            <BrainCircuit className="text-neon-blue w-14 h-14 mb-2 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-neon-blue uppercase">Dario.Core</span>
          </div>
        </motion.div>

        {/* Skill Nodes */}
        {nodes.map((node, i) => {
          const x = 50 + node.radius * Math.cos((node.angle * Math.PI) / 180);
          const y = 50 + node.radius * Math.sin((node.angle * Math.PI) / 180);
          
          return (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                damping: 15, 
                delay: 0.05 * i 
              }}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group z-30"
            >
              <motion.div
                animate={{ 
                  y: [0, Math.sin(i) * 10, 0],
                  x: [0, Math.cos(i) * 10, 0]
                }}
                transition={{ 
                  duration: 5 + i % 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div 
                  className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center hover:scale-125 transition-all duration-500 relative group-hover:border-neon-blue group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]"
                  style={{ borderColor: `${node.color}33` }}
                >
                  <img 
                    src={node.icon} 
                    alt={node.name} 
                    className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: node.color }}
                  />
                </div>
                
                {/* Tooltip-style Label */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
                  <span className="text-[9px] font-bold text-white bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap uppercase tracking-widest">
                    {node.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {nodes.map((node, i) => {
            const x = 50 + node.radius * Math.cos((node.angle * Math.PI) / 180);
            const y = 50 + node.radius * Math.sin((node.angle * Math.PI) / 180);
            
            return (
              <g key={`line-${i}`}>
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  x1="50%" y1="50%"
                  x2={`${x}%`} y2={`${y}%`}
                  stroke="var(--color-neon-blue)"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                />
                {/* Data Pulse Animation */}
                <motion.circle
                  r="1.5"
                  fill="var(--color-neon-blue)"
                  animate={{ 
                    cx: ["50%", `${x}%`],
                    cy: ["50%", `${y}%`],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "linear"
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
