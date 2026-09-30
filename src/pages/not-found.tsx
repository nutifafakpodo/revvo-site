import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Heading, Section } from "@/components/section";
import { usePageMeta } from "@/lib/seo";

export default function NotFound() {
  usePageMeta("Page not found", "That page does not exist.");
  return (
    <Section className="py-32 text-center">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <Heading as="h1" className="mt-3">Nothing parked here.</Heading>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        <ArrowLeft /> Back to home
      </ButtonLink>
    </Section>
  );
}
