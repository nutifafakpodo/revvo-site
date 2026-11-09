import { BadgeCheck, Wrench } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A phone showing the SMS thread a customer gets after a job: invoice,
 * payment link, paid receipt, next-service reminder. The bubbles arrive one
 * by one on a loop (CSS only, motion-safe).
 */
export function SmsPhone({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-[270px] sm:w-[290px]", className)} aria-hidden="true">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-teal-400/10 blur-2xl" />
      <div className="relative rounded-[2.4rem] border border-white/15 bg-navy-950 p-2.5 shadow-float">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-800">
          <div className="mx-auto mt-2.5 h-5 w-24 rounded-full bg-navy-950" />
          <div className="mt-3 flex items-center gap-3 border-b border-white/10 px-4 pb-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
              <Wrench className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Accra Auto Care</p>
              <p className="flex items-center gap-1 text-[11px] text-navy-200">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full rounded-full bg-teal-400 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-teal-400" />
                </span>
                via Revvo · delivered
              </p>
            </div>
          </div>
          <div className="min-h-[22rem] space-y-2.5 px-3 pb-6 pt-4 text-[13px] leading-snug">
            <Bubble n={1}>
              Hi Ama, your Corolla <span className="font-mono text-teal-300">GR-1234-20</span> is ready. Full
              service and oil change logged at 84,210 km.
            </Bubble>
            <Bubble n={2}>
              Invoice GH₵ 640 · <span className="font-semibold text-teal-300 underline underline-offset-2">Pay by MoMo or card</span>
            </Bubble>
            <Bubble n={3} mine>
              <BadgeCheck className="size-4" /> Paid · receipt on your passport
            </Bubble>
            <Bubble n={4}>Next service due Nov 2026. We will remind you two weeks before.</Bubble>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ n, mine = false, children }: { n: 1 | 2 | 3 | 4; mine?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex",
        mine ? "justify-end" : "justify-start",
        n === 1 && "motion-safe:animate-bubble-1",
        n === 2 && "motion-safe:animate-bubble-2",
        n === 3 && "motion-safe:animate-bubble-3",
        n === 4 && "motion-safe:animate-bubble-4",
      )}
    >
      <p
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5",
          mine
            ? "inline-flex items-center gap-1.5 rounded-br-md bg-teal-500 font-semibold text-white"
            : "rounded-bl-md bg-white/10 text-navy-100",
        )}
      >
        {children}
      </p>
    </div>
  );
}
