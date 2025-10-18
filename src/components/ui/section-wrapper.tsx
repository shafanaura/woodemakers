import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  background?: "default" | "secondary" | "muted";
  padding?: "sm" | "md" | "lg" | "xl";
}

const backgroundVariants = {
  default: "bg-background",
  secondary: "bg-secondary",
  muted: "bg-muted",
};

const paddingVariants = {
  sm: "py-8",
  md: "py-14",
  lg: "py-16 md:py-20",
  xl: "py-20 md:py-24",
};

export function SectionWrapper({
  children,
  className,
  id,
  ariaLabel,
  background = "default",
  padding = "md",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        backgroundVariants[background],
        paddingVariants[padding],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}
