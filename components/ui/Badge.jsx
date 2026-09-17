import { cn } from "@/lib/utils";

export default function Badge({ children, className, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "border-border bg-muted/50 text-muted-foreground",
        variant === "brand" && "border-brand/30 bg-brand/10 text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
