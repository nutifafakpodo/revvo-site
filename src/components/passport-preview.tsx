import { BadgeCheck, Bell, Gauge, QrCode, Share2, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { title: "Full service & oil change", where: "Accra Auto Care", when: "12 Aug 2026", km: "84,210 km" },
  { title: "Brake pads (front)", where: "Accra Auto Care", when: "03 May 2026", km: "79,880 km" },
  { title: "Tyre rotation & alignment", where: "Spintex Tyre Centre", when: "21 Jan 2026", km: "74,300 km" },
];

/**
 * Illustrative vehicle passport, modelled on the demo Corolla record. Purely
 * presentational: it shows what a shared passport looks like.
 */
export function PassportPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white text-foreground shadow-float",
        className,
      )}
      aria-label="Example vehicle passport"
    >
      <div className="bg-navy-700 px-5 pb-5 pt-4 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-300">
            Vehicle passport
          </span>
          <div className="flex items-center gap-1.5 text-navy-200">
            <QrCode className="size-4" />
            <Share2 className="size-4" />
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <p className="text-lg font-bold leading-tight">2019 Toyota Corolla</p>
            <p className="text-sm text-navy-200">GLi · 1.8L · Silver</p>
          </div>
          <div className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-sm font-semibold tracking-wider">
            GR-1234-20
          </div>
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-2.5 py-1 text-xs font-semibold text-teal-300">
          <BadgeCheck className="size-3.5" />
          12 verified services · 2 workshops
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border border-b border-border text-center">
        <Stat icon={Wrench} label="Last service" value="Aug 2026" />
        <Stat icon={Gauge} label="Mileage" value="84,210 km" />
        <Stat icon={Bell} label="Next due" value="Nov 2026" />
      </div>

      <ol className="divide-y divide-border">
        {SERVICES.map((s) => (
          <li key={s.title} className="flex gap-3 px-5 py-3.5">
            <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <BadgeCheck className="size-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{s.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                Verified · {s.where}
              </p>
            </div>
            <div className="shrink-0 text-right text-xs text-muted-foreground">
              <p>{s.when}</p>
              <p>{s.km}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="bg-muted px-5 py-3 text-center text-xs text-muted-foreground">
        Owner contact details are never shown on a shared passport.
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="px-2 py-3">
      <Icon className="mx-auto size-4 text-teal-600" />
      <p className="mt-1 text-sm font-semibold">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
