import { motion } from "motion/react";
import { PROFILE } from "@/src/constants";
import { Code2, Brain, Rocket, Target, GitBranch, Terminal } from "lucide-react";

export function About() {
  const stats = [
    { label: "Proyectos", value: "5+", icon: Code2, color: "text-accent" },
    { label: "Tecnologías", value: "10+", icon: Brain, color: "text-secondary" },
    { label: "Experiencia", value: "1 año", icon: Rocket, color: "text-warning" },
    { label: "Enfoque", value: "IA/ML", icon: Target, color: "text-accent" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-surface-low" id="story">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-on-surface-muted">
            <Terminal className="w-4 h-4" />
            <span>/sobre-mi</span>
          </div>
          <h2 className="font-mono text-3xl font-bold text-on-surface mb-2">
            Sobre <span className="text-accent">Mí</span>
          </h2>
          <p className="text-on-surface-variant">
            Desarrollador especializado en Inteligencia Artificial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="terminal p-6 space-y-4">
              <div className="flex items-center gap-2 text-on-surface-muted border-b border-white/10 pb-3">
                <GitBranch className="w-4 h-4 text-secondary" />
                <span className="text-xs">main — perfil.md</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <p className="text-on-surface leading-relaxed">
                  <span className="text-accent">#</span> Desarrollador de aplicaciones multiplataforma 
                  con experiencia en desarrollo backend, frontend y análisis de datos.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Especializado en Java y tecnologías del ecosistema Android y .NET. 
                  Actualmente cursando un Máster en Inteligencia Artificial y Deep Learning, 
                  donde aplico técnicas de Machine Learning y procesamiento de datos para 
                  construir soluciones reales.
                </p>
              </div>
            </div>

            {/* Highlight box */}
            <div className="p-4 bg-surface border border-white/10 rounded-lg">
              <p className="font-mono text-sm text-on-surface-variant">
                <span className="text-secondary">❯</span> Buscando oportunidades 
                para aplicar mis habilidades en proyectos innovadores de IA y 
                desarrollo de software.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface border border-white/10 rounded-lg p-5 hover:border-accent/50 transition-all"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-md bg-accent-dim/50 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-on-surface">
                        {stat.value}
                      </div>
                      <div className="text-xs text-on-surface-muted">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
