import { cn } from "@/lib/utils";

interface SizeGuideItemProps {
  title: string;
  description: string;
  className?: string;
}

export function SizeGuideItem({
  title,
  description,
  className,
}: SizeGuideItemProps) {
  return (
    <div className={cn("rounded-lg border p-4", className)}>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  );
}
