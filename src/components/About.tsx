import { motion } from "motion/react";
import { PROFILE } from "@/src/constants";
import { Terminal, Code2, Cpu, History, ChevronRight, Binary } from "lucide-react";

export function About() {
  return (
    <section className="py-32 px-12 bg-surface-low relative overflow-hidden" id="story">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Interactive Code Editor View */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-neon-blue/10 blur-[100px] rounded-full opacity-50" />
            
            <div className="relative bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-white/30 tracking-widest uppercase">
                  <Binary className="w-3 h-3 text-neon-blue" />
                  <span>src/profile/dario.ts</span>
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-10 font-mono text-sm leading-relaxed">
                <div className="flex gap-4 mb-6">
                  <span className="text-neon-purple italic">from</span>
                  <span className="text-neon-blue">dario_core</span>
                  <span className="text-neon-purple italic">import</span>
                  <span className="text-neon-blue">SoftwareEngineer, AISpecialist</span>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-neon-purple italic">class</span>
                    <span className="text-neon-green">DarioMunoz</span>
                    <span className="text-white/60">(SoftwareEngineer, AISpecialist):</span>
                  </div>
                  
                  <div className="pl-8 flex gap-4">
                    <span className="text-neon-blue">role</span>
                    <span className="text-white/60">=</span>
                    <span className="text-[#ce9178]">"Software & IA"</span>
                  </div>

                  <div className="pl-8 flex gap-4">
                    <span className="text-neon-blue">stack</span>
                    <span className="text-white/60">=</span>
                    <span className="text-white/60">[</span>
                    <span className="text-[#ce9178]">"Python"</span>
                    <span className="text-white/60">,</span>
                    <span className="text-[#ce9178]">"FastAPI"</span>
                    <span className="text-white/60">,</span>
                    <span className="text-[#ce9178]">"Kotlin"</span>
                    <span className="text-white/60">]</span>
                  </div>

                  <div className="pl-8 flex gap-4">
                    <span className="text-neon-purple italic">def</span>
                    <span className="text-neon-green">get_vision</span>
                    <span className="text-white/60">(self):</span>
                  </div>
                  <div className="pl-16 flex gap-4">
                    <span className="text-neon-purple italic">return</span>
                    <span className="text-[#ce9178]">"Building intelligent systems"</span>
                  </div>
                  
                  <div className="text-white/60"># System initialized</div>
                </div>

                {/* Interactive Terminal Prompt */}
                <div className="mt-12 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3 text-neon-green mb-3">
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-widest">SYSTEM_READY</span>
                    <span className="w-2 h-4 bg-neon-green animate-pulse" />
                  </div>
                  <div className="text-[10px] text-white/20 font-mono italic">
                    {">"} Initializing dario_profile.py...<br/>
                    {">"} Status: Ready to build.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9]"
              >
                Desarrollador <br/>
                <span className="text-neon-blue">Software & IA</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative pl-10 border-l-2 border-neon-blue/20"
            >
              <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed font-light italic">
                Especializado en la creación de soluciones robustas que integran el desarrollo de aplicaciones modernas con el poder de la Inteligencia Artificial. Mi enfoque combina la precisión de la ingeniería de software con la adaptabilidad del aprendizaje automático.
              </p>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-neon-blue rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
