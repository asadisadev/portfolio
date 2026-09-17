import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-7 text-[15px]",
  icon: "h-10 w-10",
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]",
  brand:
    "bg-brand text-brand-foreground hover:brightness-110 active:scale-[0.98] shadow-[0_0_30px_-10px_hsl(var(--brand))]",
  outline:
    "border border-border bg-transparent hover:bg-accent text-foreground",
  ghost: "hover:bg-accent text-foreground",
  muted: "bg-muted text-foreground hover:bg-muted/70",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
