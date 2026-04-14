import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, MapPin, ArrowRight, Terminal } from "lucide-react";
import { PROFILE } from "@/src/constants";

export function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Terminal style contact box */}
          <div className="terminal">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-low border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="font-mono text-xs text-on-surface-muted">
                dario@portfolio ~ /contacto
              </div>
              <div></div>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8">
              <div className="text-center space-y-6">
                <div className="font-mono text-sm text-on-surface-muted">
                  <span className="text-accent">#</span> ¿Interesado en colaborar?
                </div>
                
                <h2 className="font-mono text-3xl md:text-4xl font-bold text-on-surface">
                  Contacta <span className="text-accent">Conmigo</span>
                </h2>
                
                <p className="text-on-surface-variant max-w-md mx-auto">
                  Estoy abierto a nuevas oportunidades y proyectos. 
                  Puedes contactarme directamente:
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <a
                    href={`mailto:${PROFILE.contact.email}`}
                    className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-mono font-semibold rounded-md hover:bg-accent-dark transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Email
                  </a>
                  
                  <div className="flex gap-3">
                    <a 
                      href={PROFILE.contact.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3 bg-surface-low border border-white/10 rounded-md hover:border-accent/50 hover:text-accent transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={PROFILE.contact.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3 bg-surface-low border border-white/10 rounded-md hover:border-accent/50 hover:text-accent transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>{PROFILE.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{PROFILE.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-surface-low">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="font-mono font-bold text-lg">
            <span className="text-accent">~/</span>
            <span className="text-on-surface">dario</span>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-on-surface-muted">
            © {new Date().getFullYear()} Darío Muñoz. Todos los derechos reservados.
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-sm">
            <a 
              href={PROFILE.contact.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-on-surface-variant hover:text-accent transition-color flex items-center gap-2 font-mono"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href={PROFILE.contact.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-on-surface-variant hover:text-accent transition-color flex items-center gap-2 font-mono"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
