import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Reveal } from "@/components/Reveal";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Location />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
