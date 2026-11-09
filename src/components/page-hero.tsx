import * as React from "react";
import { Eyebrow, Heading } from "./section";
import { ComingSoonBadge } from "./coming-soon";
import { HeroScene } from "./motion/hero-scene";
import { Stagger, StaggerItem } from "./motion/stagger";

/** Light page hero shared by the inner pages: staggered copy, parts in the margins, a car on the road below. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  below,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  /** Call-to-action buttons. */
  children?: React.ReactNode;
  /** Anything under the buttons, such as anchor chips. */
  below?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-clip border-b border-border bg-card">
      <HeroScene tone="light" />
      <div className="container-x relative z-10 pb-28 pt-14 sm:pb-32 sm:pt-20">
        <Stagger>
          <StaggerItem>
            <ComingSoonBadge />
          </StaggerItem>
          <StaggerItem>
            <Eyebrow className="mt-5">{eyebrow}</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <Heading as="h1" className="max-w-3xl">
              {title}
            </Heading>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
          </StaggerItem>
          {children && <StaggerItem className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</StaggerItem>}
          {below && <StaggerItem className="mt-10">{below}</StaggerItem>}
        </Stagger>
      </div>
    </section>
  );
}
