import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Home, User, Briefcase, Cpu, Mail, Download, GraduationCap } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/src/constants";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-8 py-4 font-display tracking-tight">
      <div className="text-xl font-bold tracking-tighter text-neon-blue">
        {PROFILE.name.toUpperCase()}
      </div>
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-on-surface-variant hover:text-on-surface transition-colors text-sm font-medium tracking-widest"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a 
        href="/cv-dario-munoz.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        download="CV_Dario_Munoz.pdf"
        className="bg-gradient-to-r from-neon-blue/20 to-neon-blue/40 text-neon-blue border border-neon-blue/30 px-5 py-2.5 rounded-lg font-bold hover:bg-neon-blue hover:text-background transition-all text-[10px] tracking-[0.2em] flex items-center gap-2 group"
      >
        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        DESCARGAR CV
      </a>
    </nav>
  );
}

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("#");

  const icons = [
    { icon: Home, href: "#", label: "INICIO" },
    { icon: User, href: "#story", label: "HISTORIA" },
    { icon: Briefcase, href: "#work", label: "PROYECTOS" },
    { icon: Cpu, href: "#labs", label: "TECNOLOGÍAS" },
    { icon: GraduationCap, href: "#exp", label: "TRAYECTORIA" },
    { icon: Mail, href: "#contact", label: "CONTACTO" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // More generous margin to prevent skipping
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveSection(id ? `#${id}` : "#");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections including the new Trayectoria
    const sections = ["story", "work", "labs", "exp", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("#");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-6 hidden xl:flex">
      <nav className="flex flex-col gap-4 p-2 bg-surface-low/40 backdrop-blur-xl border border-white/5 rounded-2xl">
        {icons.map((item, i) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={i}
              href={item.href}
              className={cn(
                "p-3 rounded-xl transition-all group relative",
                isActive 
                  ? "text-neon-blue bg-neon-blue/10" 
                  : "text-on-surface-variant hover:text-neon-blue hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1 bg-surface-high border border-white/10 rounded text-[10px] font-bold tracking-widest text-neon-blue opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                {item.label}
              </div>

              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-blue rounded-full"
                />
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
