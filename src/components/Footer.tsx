import { motion } from "motion/react";
import { Link, Mail, Terminal, Github, Linkedin, Twitter } from "lucide-react";
import { PROFILE } from "@/src/constants";

export function Contact() {
  return (
    <section className="py-32 px-12 bg-background" id="contact">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-panel p-16 rounded-3xl text-center border-neon-blue/20"
      >
        <h2 className="font-display text-6xl font-bold mb-6 tracking-tighter">
          <span className="text-neon-blue">Contacto</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-12 max-w-md mx-auto">
          ¿Interesado en colaborar o desarrollar soluciones tecnológicas? Puedes contactar conmigo directamente:
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href={`mailto:${PROFILE.contact.email}`}
            className="w-full md:w-auto px-12 py-5 bg-neon-blue text-background font-display font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all"
          >
            ENVIAR EMAIL
          </a>
          <div className="flex gap-4">
            <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="p-5 glass-panel rounded-xl hover:text-neon-blue transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="p-5 glass-panel rounded-xl hover:text-neon-blue transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-surface-low/50 flex flex-col md:flex-row justify-between items-center px-12 gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
      <div className="text-on-surface-variant/50">
        © {new Date().getFullYear()} DARIO MUÑOZ // DESARROLLO DE SOFTWARE & IA
      </div>
      <div className="flex gap-12">
        <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="text-on-surface-variant/50 hover:text-neon-blue hover:underline transition-all">GITHUB</a>
        <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="text-on-surface-variant/50 hover:text-neon-blue hover:underline transition-all">LINKEDIN</a>
      </div>
      <div className="text-on-surface-variant/30">
        TOLEDO, ESPAÑA
      </div>
    </footer>
  );
}
