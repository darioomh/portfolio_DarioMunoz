import { motion } from "motion/react";
import { BrainCircuit } from "lucide-react";
import { PROFILE } from "@/src/constants";

export function TechStack() {
  const nodes = [
    { name: "Python", x: "20%", y: "15%", color: "var(--color-neon-green)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", x: "75%", y: "20%", color: "var(--color-neon-blue)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Kotlin", x: "10%", y: "45%", color: "var(--color-neon-purple)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "C#", x: "85%", y: "45%", color: "var(--color-neon-blue)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "SQL", x: "30%", y: "85%", color: "var(--color-neon-green)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Pandas", x: "70%", y: "80%", color: "var(--color-neon-purple)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
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
          Integración de lenguajes, frameworks y herramientas para el desarrollo de soluciones completas.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto h-[600px]">
        {/* Animated Background Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: [0, 0.1, 0], scale: [0.5, 1.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
              className="absolute inset-0 border border-neon-blue/30 rounded-full"
            />
          ))}
        </div>

        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 15 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass-panel rounded-full flex flex-col items-center justify-center z-20 border-neon-blue shadow-[0_0_80px_rgba(0,242,255,0.3)] group cursor-pointer"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-neon-blue/20"
          />
          <BrainCircuit className="text-neon-blue w-12 h-12 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold mt-2 tracking-widest text-neon-blue">DARIO.CORE</span>
        </motion.div>

        {/* Skill Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.name}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              damping: 12, 
              delay: 0.1 * i,
              duration: 0.8
            }}
            style={{ left: node.x, top: node.y }}
            className="absolute group"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <div 
                className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center hover:scale-125 transition-all duration-500 relative z-10 group-hover:rotate-12 group-hover:border-neon-blue"
                style={{ borderColor: `${node.color}44` }}
              >
                <img src={node.icon} alt={node.name} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all" />
                <div 
                  className="absolute inset-[-8px] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                  style={{ backgroundColor: node.color }}
                />
              </div>
              
              {/* Floating Label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] font-bold text-neon-blue opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 block uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-neon-blue/20">
                  {node.name}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-neon-blue)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-neon-blue)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-neon-blue)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {nodes.map((node, i) => (
            <g key={`connection-${i}`}>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                x1="50%" y1="50%"
                x2={node.x} y2={node.y}
                stroke="var(--color-neon-blue)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Animated Pulse on Line */}
              <motion.circle
                r="2"
                fill="var(--color-neon-blue)"
                initial={{ offset: 0 }}
                animate={{ 
                  cx: ["50%", node.x],
                  cy: ["50%", node.y],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
