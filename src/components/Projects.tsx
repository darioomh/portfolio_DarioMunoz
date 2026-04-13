import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Terminal, ChevronRight, Code, Database, Smartphone, MessageSquare } from "lucide-react";
import { PROJECTS, type ProjectData } from "@/src/constants";
import { cn } from "@/src/lib/utils";

function ProjectCard({ project, index, category }: { project: ProjectData; index: number; category: string }) {
  const getIcon = () => {
    if (project.title.toLowerCase().includes('chatbot') || project.title.toLowerCase().includes('assistant')) return MessageSquare;
    if (project.title.toLowerCase().includes('api')) return Database;
    if (project.title.toLowerCase().includes('móvil') || project.title.toLowerCase().includes('android')) return Smartphone;
    return Code;
  };

  const Icon = getIcon();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-surface-low rounded-xl border border-white/5 hover:border-neon-blue/40 transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      <a 
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-20"
        aria-label={`Ver repositorio de ${project.title}`}
      />
      
      {/* Project Visual Header */}
      <div className="aspect-video overflow-hidden relative bg-surface-high flex items-center justify-center border-b border-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full transition-all duration-700 group-hover:scale-105",
              project.image.includes('logo.clearbit.com') 
                ? "object-contain p-12 opacity-80 group-hover:opacity-100" 
                : "object-cover opacity-50 group-hover:opacity-70"
            )}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative group-hover:bg-neon-blue/5 transition-colors duration-500">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3a494b 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="relative">
              <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full" />
              <Icon className="w-16 h-16 text-neon-blue relative z-10" />
            </div>
            
            <div className="mt-4 font-mono text-[10px] text-on-surface-variant/50 tracking-[0.3em] uppercase">
              {category === 'professional' ? 'PROYECTO TFG DAM' : 'CHATBOT'}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-low via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex gap-2 mb-6 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-neon-blue/5 text-neon-blue/70 border border-neon-blue/20 text-[9px] px-2.5 py-1 rounded font-bold tracking-widest uppercase">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-neon-blue transition-colors">
          {project.title}
        </h3>
        
        <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow font-light">
          {project.description}
        </p>
        
        <div className="flex gap-4 pt-6 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant group-hover:text-neon-blue transition-colors group/link">
            <Github className="w-4 h-4" />
            REPOSITORIO_GIT
            <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [category, setCategory] = useState<"professional" | "vibe">("professional");

  const githubLinks = {
    professional: "https://github.com/darioomh",
    vibe: "https://github.com/munozherrerodario-alt"
  };

  return (
    <section className="py-32 px-12" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-neon-blue text-sm tracking-[0.3em] uppercase"
          >
            Portfolio_Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-6xl font-bold tracking-tighter mt-4 mb-6"
          >
            Proyectos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-on-surface-variant max-w-2xl mx-auto text-lg"
          >
            Una combinación de desarrollo profesional y experimentación en inteligencia artificial
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-surface-low p-1.5 rounded-2xl border border-white/5 flex relative">
            <motion.div
              layoutId="active-bg"
              className="absolute inset-y-1.5 rounded-xl bg-neon-blue shadow-[0_0_20px_rgba(0,242,255,0.3)]"
              initial={false}
              animate={{
                x: category === "professional" ? 0 : "100%",
                width: "50%"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setCategory("professional")}
              className={cn(
                "relative z-10 px-8 py-3 rounded-xl font-display font-bold text-sm tracking-widest transition-colors duration-300",
                category === "professional" ? "text-background" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              PROFESIONALES
            </button>
            
            <button
              onClick={() => setCategory("vibe")}
              className={cn(
                "relative z-10 px-8 py-3 rounded-xl font-display font-bold text-sm tracking-widest transition-colors duration-300",
                category === "vibe" ? "text-background" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              VIBE CODING
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS[category].map((project, index) => (
              <div key={project.title} className="h-full">
                <ProjectCard project={project} index={index} category={category} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a 
            href={githubLinks[category]} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-on-surface-variant hover:text-neon-blue transition-colors font-display text-sm tracking-[0.2em] group"
          >
            VER TODOS LOS REPOSITORIOS ({category === 'professional' ? 'DARIOOMH' : 'MUNOZHERRERODARIO-ALT'})
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
