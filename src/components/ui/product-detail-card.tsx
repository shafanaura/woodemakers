import { ImageLightbox } from "@/components/image-lightbox";
import { cn } from "@/lib/utils";

interface ProductDetailCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function ProductDetailCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: ProductDetailCardProps) {
  return (
    <article
      className={cn(
        "border bg-card text-card-foreground overflow-hidden rounded-lg",
        className
      )}
    >
      <div className="overflow-hidden">
        <ImageLightbox
          src={
            imageSrc ||
            "/placeholder.svg?height=720&width=960&query=wood product detail"
          }
          alt={imageAlt}
          caption={title}
          sizes="(max-width:768px) 100vw, 33vw"
          aspectClass="aspect-square"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </article>
  );
}
