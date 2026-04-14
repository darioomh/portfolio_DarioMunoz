import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Code, Database, Smartphone, MessageSquare, ArrowUpRight } from "lucide-react";
import { PROJECTS, type ProjectData, PROFILE } from "@/src/constants";
import { cn } from "@/src/lib/utils";

function ProjectCard({ project, index, category, key: _key }: { 
  project: ProjectData; 
  index: number; 
  category: string;
  key?: string;
}) {
  const getIcon = () => {
    if (project.title.toLowerCase().includes('chatbot') || project.title.toLowerCase().includes('assistant')) return MessageSquare;
    if (project.title.toLowerCase().includes('api')) return Database;
    if (project.title.toLowerCase().includes('móvil') || project.title.toLowerCase().includes('android')) return Smartphone;
    return Code;
  };

  const Icon = getIcon();

  // Colores aleatorios para el "lenguaje principal"
  const langColors: Record<string, string> = {
    "PYTHON": "bg-blue-500",
    "KOTLIN": "bg-purple-500",
    "TYPESCRIPT": "bg-yellow-500",
    "JAVA": "bg-red-500",
  };

  const mainLang = project.tags[0] || "CODE";
  const langColor = langColors[mainLang] || "bg-gray-500";

  return (
    <motion.a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group block bg-surface border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
    >
      {/* Project header with image */}
      {project.image ? (
        <div className="relative h-40 overflow-hidden border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          
          {/* Icon overlay */}
          <div className="absolute top-3 left-3 p-2 rounded-md bg-surface/90 backdrop-blur-sm border border-white/10">
            <Icon className="w-4 h-4 text-accent" />
          </div>
        </div>
      ) : (
        <div className="h-32 bg-surface-low flex items-center justify-center border-b border-white/10">
          <div className="text-center">
            <Icon className="w-12 h-12 text-accent mx-auto mb-2 opacity-50" />
            <span className="text-xs text-on-surface-muted font-mono">{category === 'professional' ? 'TFG DAM' : 'VIBE CODING'}</span>
          </div>
        </div>
      )}

      {/* Project info */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-mono text-lg font-semibold text-accent group-hover:text-accent-light transition-colors flex items-center gap-2">
          {project.title}
          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>

        {/* Description */}
        <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags as topics */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-0.5 rounded-full bg-accent-dim text-accent text-[10px] font-mono font-medium"
            >
              {tag.toLowerCase()}
            </span>
          ))}
        </div>

        {/* Footer stats */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/10 text-xs text-on-surface-muted font-mono">
          <div className="flex items-center gap-1">
            <div className={cn("w-3 h-3 rounded-full", langColor)} />
            <span>{mainLang.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const [category, setCategory] = useState<"professional" | "vibe">("professional");

  const githubLinks = {
    professional: PROFILE.contact.github,
    vibe: PROFILE.contact.github
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-background" id="work">
      <div className="max-w-6xl mx-auto">
        {/* Header - estilo GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-on-surface-muted">
            <Github className="w-4 h-4" />
            <span>/repositorios-destacados</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-mono text-3xl font-bold text-on-surface mb-2">
                Proyectos <span className="text-accent">Destacados</span>
              </h2>
              <p className="text-on-surface-variant">
                Repositorios más relevantes y activos recientemente
              </p>
            </div>

            {/* Filter tabs - estilo GitHub */}
            <div className="flex gap-1 bg-surface rounded-lg p-1 border border-white/10">
              <motion.div
                layoutId="active-tab"
                className={cn(
                  "absolute rounded-md bg-surface-high",
                  category === "professional" ? "inset-y-1 left-1 right-1/2" : "inset-y-1 left-1/2 right-1"
                )}
              />
              <button
                onClick={() => setCategory("professional")}
                className={cn(
                  "relative z-10 px-4 py-1.5 rounded-md font-mono text-sm transition-colors",
                  category === "professional" ? "text-white font-medium" : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                Profesionales
              </button>
              <button
                onClick={() => setCategory("vibe")}
                className={cn(
                  "relative z-10 px-4 py-1.5 rounded-md font-mono text-sm transition-colors",
                  category === "vibe" ? "text-white font-medium" : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                Vibe Coding
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects grid - estilo GitHub repo list */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS[category].map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project} 
                index={index} 
                category={category}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more - estilo GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a
            href={githubLinks[category]}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-surface border border-white/10 rounded-lg font-mono text-sm text-on-surface-variant hover:text-accent hover:border-accent/50 transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Ver repositorios en github
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
