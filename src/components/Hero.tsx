import logoAnaSiqueira from "@/assets/logo-ana-siqueira.png";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-rose">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--rose)] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--gold-soft)] opacity-20 blur-3xl" />

      <div className="container relative mx-auto grid min-h-screen items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="order-2 animate-fade-up text-center lg:order-1 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-card/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)] backdrop-blur">
            <Sparkles className="h-3 w-3" />
            Brow & Lash
          </div>

          <h1 className="text-5xl font-light leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Design de sobrancelhas para <span className="italic text-gradient-gold">valorizar</span>{" "}
            o seu olhar
          </h1>

          <div className="gold-divider my-8 mx-auto w-32 lg:mx-0" />

          <p className="mx-auto max-w-md text-base text-muted-foreground lg:mx-0 lg:text-lg">
            Sobrancelhas como especialidade principal, com extensão de cílios como complemento para
            realçar sua beleza.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#servicos"
              className="group button-gold inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium uppercase tracking-widest transition-transform hover:scale-[1.02]"
            >
              Ver serviços
            </a>
            <a
              href="#sobre"
              className="text-sm uppercase tracking-widest text-foreground/70 transition-colors hover:text-[var(--gold)]"
            >
              Sobre o studio →
            </a>
          </div>
        </div>

        {/* Brand mark */}
        <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
          <div className="relative flex w-full max-w-[520px] items-center justify-center p-4 md:p-8">
            <div className="absolute inset-8 rounded-full bg-[var(--gold-soft)] opacity-20 blur-3xl" />
            <img
              src={logoAnaSiqueira}
              alt="Studio Ana Siqueira — Beleza, Brow & Lash Boutique"
              className="relative h-auto w-full max-w-[420px] object-contain drop-shadow-[0_20px_35px_rgba(128,88,42,0.16)]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
