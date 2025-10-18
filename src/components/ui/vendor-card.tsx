import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { ButtonEnhanced } from "./button-enhanced";
import { FaShoppingBag, FaStore, FaTiktok } from "react-icons/fa";

interface VendorCardProps {
  name: string;
  href: string;
  logoSrc: string;
  alt: string;
  description: string;
  buttonText: string;
}

export function VendorCard({
  name,
  href,
  logoSrc,
  alt,
  description,
  buttonText,
}: VendorCardProps) {
  const getIcon = () => {
    switch (name) {
      case "Shopee":
        return <FaShoppingBag className="h-4 w-4" />;
      case "Tokopedia":
        return <FaStore className="h-4 w-4" />;
      case "TikTok Shop":
        return <FaTiktok className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="items-center">
        <div className="mx-auto aspect-square w-20 overflow-hidden rounded-md bg-muted/40">
          <img
            src={
              logoSrc ||
              "/placeholder.svg?height=128&width=128&query=marketplace logo"
            }
            alt={alt}
            className="h-full w-full object-contain"
          />
        </div>
        <CardTitle className="mt-3 text-base text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 text-center text-sm text-muted-foreground">
        {description}
      </CardContent>
      <CardFooter>
        <ButtonEnhanced
          asChild
          className="w-full gap-2 justify-center cursor-pointer"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy on ${name}`}
          >
            {getIcon()}
            {buttonText}
          </a>
        </ButtonEnhanced>
      </CardFooter>
    </Card>
  );
}
