import { MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-display text-2xl italic text-gradient-gold">Studio Ana Siqueira</p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-[var(--gold)]" />
              Rio Claro — SP
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] transition-all hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          <div className="gold-divider w-32" />

          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
