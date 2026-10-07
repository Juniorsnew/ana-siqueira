import { MapPin, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="localizacao" className="bg-gradient-dark py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Localização</p>
            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Atendimento em <span className="italic text-gradient-gold">Rio Claro</span>
            </h2>
            <div className="gold-divider mx-auto my-8 w-24" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-medium">Endereço</h3>
              <p className="mt-2 text-muted-foreground">
                Av. 12, 242 - Centro
                <br />
                Rio Claro - SP, 13500-460
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Clock className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-medium">Agendamento</h3>
              <p className="mt-2 text-muted-foreground">
                Agende seu atendimento
                <br />
                pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
