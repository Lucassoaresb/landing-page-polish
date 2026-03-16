import { motion } from "framer-motion";
import { Zap, GitBranch, BarChart3, Settings2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: BarChart3,
    title: "Diagnóstico de processos",
    description: "Análise detalhada dos fluxos atuais do seu RH para identificar gargalos e ineficiências.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Zap,
    title: "Mapa de automação",
    description: "Identificação das oportunidades de automação com maior impacto operacional.",
    span: "col-span-1",
  },
  {
    icon: Settings2,
    title: "Quick wins",
    description: "Ações rápidas que geram resultado imediato sem grandes investimentos.",
    span: "col-span-1",
  },
  {
    icon: GitBranch,
    title: "Integração de ferramentas",
    description: "Sugestões de integração entre os sistemas que o seu RH já utiliza.",
    span: "col-span-1 md:col-span-2",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-[15vh] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-wide text-primary uppercase">Benefícios</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1]">
            O que você vai receber
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className={`${b.span} group relative rounded-xl border border-border bg-card p-8 hover:border-foreground/10 transition-colors`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <b.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
