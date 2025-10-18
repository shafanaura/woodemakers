import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-1">
        <div className="mb-2 h-8 w-8 text-primary">
          {Icon ? (
            <Icon className="h-8 w-8" />
          ) : (
            <img
              src={
                imageSrc ||
                "/placeholder.svg?height=32&width=32&query=feature%20icon"
              }
              alt={imageAlt}
              className="h-8 w-8"
            />
          )}
        </div>
        <CardTitle className="text-base mb-1">{title}</CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardHeader>
    </Card>
  );
}
