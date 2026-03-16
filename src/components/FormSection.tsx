import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const FormSection = () => {
  return (
    <section id="diagnostico" className="py-[15vh] px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-wide text-primary uppercase">Começar agora</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1]">
            Solicite seu diagnóstico
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e nossa equipe entrará em contato com um diagnóstico personalizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-8 md:p-12"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs tracking-wide text-muted-foreground uppercase mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-wide text-muted-foreground uppercase mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wide text-muted-foreground uppercase mb-2">
                E-mail corporativo
              </label>
              <input
                type="email"
                placeholder="email@empresa.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wide text-muted-foreground uppercase mb-2">
                Principal desafio no RH
              </label>
              <textarea
                rows={4}
                placeholder="Descreva brevemente os processos que gostaria de otimizar..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-foreground text-background font-display font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] w-full justify-center"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;
