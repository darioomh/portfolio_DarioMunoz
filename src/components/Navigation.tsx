import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Home, User, Briefcase, Cpu, Mail, Download, GraduationCap } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/src/constants";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Logo - estilo developer */}
        <a href="#hero" className="font-mono font-bold text-lg">
          <span className="text-accent">~/</span>
          <span className="text-on-surface">dario</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-on-surface-variant hover:text-accent transition-colors"
            >
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>

        {/* CV Download */}
        <a
          href="/cv-dario-munoz.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="CV_Dario_Munoz.pdf"
          className="bg-accent text-white px-4 py-2 rounded-md font-mono text-sm hover:bg-accent-dark transition-all flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Descargar CV
        </a>
      </div>
    </nav>
  );
}

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("#");

  const icons = [
    { icon: Home, href: "#", label: "INICIO" },
    { icon: User, href: "#story", label: "SOBRE MÍ" },
    { icon: Briefcase, href: "#work", label: "PROYECTOS" },
    { icon: Cpu, href: "#labs", label: "TECNOLOGÍAS" },
    { icon: GraduationCap, href: "#exp", label: "TRAYECTORIA" },
    { icon: Mail, href: "#contact", label: "CONTACTO" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
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
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col items-center gap-4">
      <nav className="flex flex-col gap-1 p-1.5 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-lg">
        {icons.map((item, i) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={i}
              href={item.href}
              className={cn(
                "p-2.5 rounded-md transition-all group relative",
                isActive
                  ? "text-accent bg-accent-dim"
                  : "text-on-surface-variant hover:text-accent hover:bg-surface"
              )}
            >
              <item.icon className="w-4 h-4" />

              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-surface-high border border-white/10 rounded text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                {item.label}
              </div>

              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-accent rounded-full"
                />
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
