import { motion } from "motion/react";
import { Cpu, Code } from "lucide-react";
import { PROFILE } from "@/src/constants";

export function Experience() {
  return (
    <section className="py-32 px-12" id="exp">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-bold mb-20 text-center"
        >
          Trayectoria <span className="text-neon-blue">Profesional</span>
        </motion.h2>

        <div className="space-y-16 relative">
          <div className="absolute left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-neon-blue via-white/10 to-transparent" />
          
          {/* Educación Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 mb-12"
          >
            <h3 className="text-2xl font-bold font-display mb-8 text-neon-purple flex items-center gap-3">
              <Code className="w-6 h-6" /> Formación Académica
            </h3>
            <div className="space-y-8">
              {PROFILE.education.map((edu, i) => (
                <div key={i} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-neon-purple bg-background z-10" />
                  <div className="bg-surface-low/50 p-6 rounded-xl border border-white/5 group-hover:border-neon-purple/30 transition-all">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="text-lg font-bold font-display">{edu.degree}</h4>
                      <span className="font-mono text-xs text-neon-purple">{edu.period}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm">{edu.institution}</p>
                    {edu.description && (
                      <p className="mt-4 text-on-surface-variant/70 text-xs leading-relaxed border-t border-white/5 pt-4 italic">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experiencia Section */}
          <h3 className="text-2xl font-bold font-display mb-8 text-neon-blue flex items-center gap-3">
            <Cpu className="w-6 h-6" /> Experiencia Profesional
          </h3>
          
          {PROFILE.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-24 group"
            >
              <div className="absolute left-0 top-2 w-16 h-16 rounded-lg glass-panel flex items-center justify-center border-neon-blue/50 z-10 group-hover:bg-neon-blue group-hover:text-background transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="bg-surface-low p-8 rounded-xl border border-white/5 group-hover:border-neon-blue/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold font-display">{exp.role}</h3>
                  <span className="font-mono text-xs text-neon-blue">{exp.period}</span>
                </div>
                <p className="text-neon-green font-bold text-sm mb-4">{exp.company}</p>
                <ul className="text-on-surface-variant text-sm space-y-3 font-light">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-neon-blue">▹</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
