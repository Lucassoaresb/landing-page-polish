import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-[15vh] px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-secondary font-mono text-xs tracking-wide text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Diagnóstico de Reengenharia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-foreground"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Reengenharia no RH
          <br />
          <span className="text-muted-foreground">com precisão.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          Descubra quais processos do seu RH podem ganhar eficiência com automação, IA e integração de sistemas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.24 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-foreground text-background font-display font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]"
          >
            Quero meu diagnóstico
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#beneficios"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-muted-foreground font-display font-medium text-sm hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            Ver benefícios
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
