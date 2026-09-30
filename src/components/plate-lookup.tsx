import { useState } from "react";
import { Search } from "lucide-react";
import { plateLookupUrl } from "@/lib/links";
import { cn } from "@/lib/utils";

/**
 * Plate search that hands off to the consumer app's vehicle lookup.
 */
export function PlateLookup({
  className,
  dark = false,
  size = "md",
}: {
  className?: string;
  dark?: boolean;
  size?: "md" | "lg";
}) {
  const [plate, setPlate] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = plate.trim();
    if (!value) {
      setError("Enter a number plate to look up a vehicle.");
      return;
    }
    setError(null);
    window.location.assign(plateLookupUrl(value));
  };

  return (
    <form onSubmit={submit} className={cn("w-full max-w-md", className)} noValidate>
      <label htmlFor="plate" className="sr-only">
        Number plate
      </label>
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border p-1.5",
          dark ? "border-white/15 bg-white/10" : "border-border bg-card shadow-card",
        )}
      >
        <input
          id="plate"
          name="plate"
          value={plate}
          onChange={(e) => {
            setPlate(e.target.value.toUpperCase());
            if (error) setError(null);
          }}
          placeholder="e.g. GR-1234-20"
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          className={cn(
            "min-w-0 flex-1 bg-transparent px-3 font-mono text-base tracking-wider outline-none",
            size === "lg" ? "h-11" : "h-10",
            dark ? "text-white placeholder:text-navy-200/70" : "text-foreground placeholder:text-muted-foreground",
          )}
          data-testid="input-plate"
        />
        <button
          type="submit"
          className={cn(
            "inline-flex shrink-0 items-center gap-2 rounded-lg bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-teal-600",
            size === "lg" ? "h-11" : "h-10",
          )}
          data-testid="button-plate-lookup"
        >
          <Search className="size-4" />
          <span className="hidden sm:inline">Look up</span>
        </button>
      </div>
      {error && (
        <p className={cn("mt-2 text-sm", dark ? "text-amber-500" : "text-red-600")} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
