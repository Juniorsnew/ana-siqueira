import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551935972893?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Studio%20Ana%20Siqueira.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_12px_28px_-10px_oklch(0.45_0.04_25_/_0.35)] transition-transform hover:scale-110 animate-float"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export { WHATSAPP_URL };
