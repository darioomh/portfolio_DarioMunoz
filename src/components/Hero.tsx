import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Terminal, GitBranch, Code2, Cpu } from "lucide-react";

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
    <span className="text-secondary">
      {texts[index].substring(0, subIndex)}
      <span className="animate-blink text-accent">█</span>
    </span>
  );
}

export function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const titles = [
    "Desarrollo sistemas inteligentes con IA y Machine Learning",
    "Construyo APIs escalables con Python y FastAPI",
    "Aplico Deep Learning para resolver problemas reales"
  ];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden" id="hero">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#58a6ff 1px, transparent 1px), linear-gradient(90deg, #58a6ff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20">
        
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="terminal w-full"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="font-mono text-xs text-on-surface-muted">
              dario@portfolio ~ /inicio
            </div>
            <div className="font-mono text-xs text-on-surface-muted">
              {currentTime.toLocaleTimeString('es-ES')}
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 space-y-4 font-mono text-sm">
            {/* Git branch info */}
            <div className="flex items-center gap-2 text-on-surface-muted">
              <GitBranch className="w-4 h-4 text-secondary" />
              <span>main</span>
              <span className="text-on-surface-muted">●</span>
              <span>protected</span>
            </div>

            {/* Welcome comment */}
            <div className="text-on-surface-muted">
              <span className="text-accent">#</span> Bienvenido a mi portfolio de desarrollador
            </div>

            {/* Main intro */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-secondary shrink-0">❯</span>
                <span className="text-on-surface">
                  <span className="text-accent">const</span>
                  <span className="text-warning"> desarrollador</span>
                  <span className="text-on-surface"> = </span>
                  <span className="text-accent">nuevo</span>
                  <span className="text-secondary"> Developer</span>
                  <span className="text-on-surface">();</span>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-on-surface-muted">│</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-on-surface-muted">│</span>
                <span className="text-on-surface">
                  <span className="text-accent">desarrollador</span>
                  <span className="text-on-surface">.</span>
                  <span className="text-warning">nombre</span>
                  <span className="text-on-surface"> = </span>
                  <span className="text-secondary">"Darío Muñoz"</span>
                  <span className="text-on-surface">;</span>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-on-surface-muted">│</span>
                <span className="text-on-surface">
                  <span className="text-accent">desarrollador</span>
                  <span className="text-on-surface">.</span>
                  <span className="text-warning">especialidad</span>
                  <span className="text-on-surface"> = </span>
                  <span className="text-secondary">"Inteligencia Artificial"</span>
                  <span className="text-on-surface">;</span>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-on-surface-muted">│</span>
                <span className="text-on-surface">
                  <span className="text-accent">desarrollador</span>
                  <span className="text-on-surface">.</span>
                  <span className="text-warning">stack</span>
                  <span className="text-on-surface"> = [</span>
                  <span className="text-secondary">"Python"</span>
                  <span className="text-on-surface">,</span>
                  <span className="text-secondary">"Java"</span>
                  <span className="text-on-surface">,</span>
                  <span className="text-secondary">"Kotlin"</span>
                  <span className="text-on-surface">];</span>
                </span>
              </div>
            </div>

            {/* Typewriter role */}
            <div className="flex items-start gap-2 pt-4">
              <span className="text-secondary shrink-0">❯</span>
              <span className="flex-1">
                <span className="text-accent">desarrollador</span>
                <span className="text-on-surface">.</span>
                <span className="text-warning">quéHago</span>
                <span className="text-on-surface">() → </span>
                <Typewriter texts={titles} delay={1500} />
              </span>
            </div>

            {/* System ready */}
            <div className="flex items-center gap-2 pt-4 text-secondary">
              <span>✓</span>
              <span>Sistema inicializado correctamente</span>
            </div>
          </div>
        </motion.div>

        {/* Quick stats below terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { icon: Code2, label: "Proyectos", value: "5+", color: "text-accent" },
            { icon: Cpu, label: "Tecnologías", value: "10+", color: "text-secondary" },
            { icon: GitBranch, label: "Commits", value: "500+", color: "text-warning" },
            { icon: Terminal, label: "Enfoque", value: "IA/ML", color: "text-accent" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="terminal p-4 text-center">
                <Icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold font-display text-on-surface">{stat.value}</div>
                <div className="text-xs text-on-surface-muted">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#work"
            className="px-6 py-3 bg-accent text-white font-mono font-semibold rounded-lg hover:bg-accent-dark transition-all flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" />
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 font-mono font-semibold rounded-lg hover:border-accent hover:text-accent transition-all"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-on-surface-muted tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
