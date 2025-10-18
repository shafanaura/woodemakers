import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
  iconClassName?: string;
}

export function SocialLink({
  href,
  icon,
  label,
  className,
  iconClassName,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer",
        className
      )}
    >
      <span className={cn("h-5 w-5", iconClassName)}>{icon}</span>
      <span className="sr-only">{label}</span>
    </a>
  );
}
