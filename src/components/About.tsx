import { Award, Heart, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Design que harmoniza",
    text: "Sobrancelhas pensadas para valorizar o formato natural do rosto.",
  },
  {
    icon: Heart,
    title: "Cuidado em cada detalhe",
    text: "Um atendimento delicado para cuidar da beleza e do olhar.",
  },
  {
    icon: Sparkles,
    title: "Brow & Lash",
    text: "Serviços de sobrancelhas e extensão de cílios em um só studio.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-gradient-dark py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Sobre</p>
          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Beleza, sobrancelhas e <span className="italic text-gradient-gold">olhar</span>
          </h2>
          <div className="gold-divider mx-auto my-8 w-24" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            O Studio Ana Siqueira tem as sobrancelhas como especialidade principal, com serviços de
            Brow e extensão de cílios para valorizar o olhar com delicadeza e cuidado.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card/40 p-8 text-center backdrop-blur transition-all hover:border-[var(--gold)]/50 hover:shadow-gold"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
