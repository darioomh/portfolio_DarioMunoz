import { motion } from "motion/react";
import { Cpu, Code, Award, Calendar, Briefcase } from "lucide-react";
import { PROFILE } from "@/src/constants";

export function Experience() {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface-low" id="exp">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-on-surface-muted">
            <Briefcase className="w-4 h-4" />
            <span>/trayectoria</span>
          </div>
          <h2 className="font-mono text-3xl font-bold text-on-surface mb-2">
            Trayectoria <span className="text-accent">Profesional</span>
          </h2>
          <p className="text-on-surface-variant">
            Mi experiencia laboral y formación académica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-md bg-accent-dim/50 flex items-center justify-center">
                <Code className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-mono text-xl font-semibold text-on-surface">Formación</h3>
            </div>

            <div className="space-y-3">
              {PROFILE.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface border border-white/10 rounded-lg p-5 hover:border-accent/50 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-on-surface group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-accent shrink-0 flex items-center gap-1 bg-accent-dim/50 px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="text-on-surface-muted text-xs leading-relaxed pt-2 border-t border-white/10">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-md bg-secondary-dim/50 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-mono text-xl font-semibold text-on-surface">Experiencia</h3>
            </div>

            <div className="space-y-3">
              {PROFILE.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface border border-white/10 rounded-lg p-5 hover:border-secondary/50 transition-all border-l-2"
                  style={{ borderLeftColor: "#3fb950" }}
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-semibold text-xl text-on-surface">
                          {exp.role}
                        </h4>
                        <span className="font-mono text-xs text-secondary shrink-0 flex items-center gap-1 bg-secondary-dim/50 px-2 py-1 rounded">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-secondary font-medium text-sm flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-on-surface-variant text-sm flex gap-2">
                          <span className="text-secondary shrink-0 mt-1">▹</span> 
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
