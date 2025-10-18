import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", centered ? "text-center" : "", className)}>
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight md:text-3xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-2 text-muted-foreground", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
