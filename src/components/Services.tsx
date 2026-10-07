import designSobrancelhas from "@/assets/design-sobrancelhas.png";
import designHenna from "@/assets/design-henna.png";
import designTintura from "@/assets/design-tintura.png";
import extensaoCilios from "@/assets/extensao-cilios.png";

const services = [
  {
    image: designSobrancelhas,
    name: "Design de Sobrancelhas",
    description:
      "Design personalizado para valorizar o formato natural das sobrancelhas e harmonizar o olhar.",
    duration: "30 minutos",
    price: "R$ 25,00",
    bookingUrl: "https://web.miaapp.com.br/p/studio-ana-siqueira/44cyQxtPA70/6p16e685yb0",
  },
  {
    image: designHenna,
    name: "Design com Henna",
    description: "Design de sobrancelhas com aplicação de henna para realçar e definir o olhar.",
    duration: "50 minutos",
    price: "R$ 35,00",
    bookingUrl: "https://web.miaapp.com.br/p/studio-ana-siqueira/44cyQxtPA70/mv7jyv4mq4mo",
  },
  {
    image: designTintura,
    name: "Design com Tintura",
    description: "Design de sobrancelhas com tintura para realçar a cor e a definição dos fios.",
    duration: "50 minutos",
    price: "R$ 50,00",
    bookingUrl: "https://web.miaapp.com.br/p/studio-ana-siqueira/44cyQxtPA70/bjiqpk8gb62c",
  },
  {
    image: extensaoCilios,
    name: "Extensão de Cílios",
    description:
      "Extensão de cílios para destacar o olhar com um resultado delicado e sofisticado.",
    duration: "2 horas",
    price: "R$ 100,00",
    bookingUrl: "https://web.miaapp.com.br/p/studio-ana-siqueira/44cyQxtPA70/7j32nh41cmo9",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Portfólio</p>
          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Serviços e <span className="italic text-gradient-gold">valores</span>
          </h2>
          <div className="gold-divider mx-auto my-8 w-24" />
          <p className="text-muted-foreground">
            Serviços de Brow como especialidade principal e extensão de cílios como complemento.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="group overflow-hidden rounded-2xl border border-[var(--rose)]/70 bg-card shadow-card transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-medium text-foreground">{s.name}</h3>
                  <div className="mt-1 h-px w-10 bg-[var(--gold)]" />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>

                <div className="mt-5 space-y-2 border-t border-border pt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="uppercase tracking-wider text-muted-foreground">Duração</span>
                    <span className="font-medium text-foreground/70">{s.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="uppercase tracking-wider text-muted-foreground">Preço</span>
                    <span className="text-lg font-semibold text-[var(--gold-deep)]">{s.price}</span>
                  </div>
                </div>

                <a
                  href={s.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gold mt-6 flex w-full items-center justify-center rounded-full py-3 text-xs font-medium uppercase tracking-widest"
                >
                  Agendar este serviço
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
