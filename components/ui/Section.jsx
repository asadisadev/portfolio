import { cn } from "@/lib/utils";
import Reveal from "@/components/animations/Reveal";

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow && (
        <p className="eyebrow mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </Reveal>
  );
}
