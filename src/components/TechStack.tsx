import { motion } from "motion/react";
import { BrainCircuit, Code2, Database, Server, Smartphone, Wrench, FolderOpen } from "lucide-react";
import { PROFILE } from "@/src/constants";

const categories = [
  { key: "languages", label: "Lenguajes", icon: Code2 },
  { key: "backend", label: "Backend", icon: Server },
  { key: "android", label: "Android", icon: Smartphone },
  { key: "dotnet", label: ".NET", icon: Code2 },
  { key: "dataIA", label: "Data & IA", icon: BrainCircuit },
  { key: "tools", label: "Herramientas", icon: Wrench },
  { key: "architecture", label: "Arquitectura", icon: Database },
];

export function TechStack() {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface" id="labs">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-on-surface-muted">
            <FolderOpen className="w-4 h-4" />
            <span>/stack-tecnológico</span>
          </div>
          <h2 className="font-mono text-3xl font-bold text-on-surface mb-2">
            Stack <span className="text-accent">Tecnológico</span>
          </h2>
          <p className="text-on-surface-variant">
            Tecnologías y herramientas que utilizo en mis proyectos
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const items = PROFILE.techStack[cat.key as keyof typeof PROFILE.techStack] || [];
            
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-low border border-white/10 rounded-lg p-5 hover:border-accent/50 transition-all"
              >
                <div className="space-y-4">
                  {/* Category header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="w-8 h-8 rounded-md bg-accent-dim/50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="font-mono font-semibold text-on-surface">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Tech items */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-surface text-on-surface text-xs font-mono border border-white/10 hover:border-accent/50 hover:text-accent transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
