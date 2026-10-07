import { WHATSAPP_URL } from "./WhatsAppFloat";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-rose py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--rose)] opacity-75 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--gold)]/20 bg-card/75 p-12 text-center backdrop-blur md:p-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Vamos conversar</p>
          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Seu olhar, ainda mais <span className="italic text-gradient-gold">especial</span>
          </h2>
          <div className="gold-divider mx-auto my-8 w-24" />
          <p className="mx-auto max-w-xl text-muted-foreground">
            Agende seu atendimento de Brow ou Lash pelo WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-gold mt-10 inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-medium uppercase tracking-widest hover:scale-[1.02]"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
