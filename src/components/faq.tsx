import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {FAQ.map((item) => (
        <details key={item.q} className="group px-6 py-5" data-testid="faq-item">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
