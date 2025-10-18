import { Card, CardContent } from "./card";

interface TestimonialCardProps {
  name: string;
  variant: string;
  quote: string;
  source: string;
  avatarSrc?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  variant,
  quote,
  source,
  avatarSrc = "/minimal-user-headshot.jpg",
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={`min-w-[280px] md:min-w-[360px] snap-start ${className || ""}`}
    >
      <CardContent className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <img
            src={avatarSrc}
            alt={`Profile photo of ${name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{variant}</p>
          </div>
        </div>
        <blockquote className="text-sm leading-relaxed text-foreground">
          &quot;{quote}&quot;
        </blockquote>
        <p className="mt-3 text-[11px] text-muted-foreground">{source}</p>
      </CardContent>
    </Card>
  );
}
