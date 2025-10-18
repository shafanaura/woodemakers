import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { ButtonEnhanced } from "./button-enhanced";
import ImageLightbox from "@/components/image-lightbox";
import { FaShoppingBag, FaStore, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface VariantCardProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buyOptions: {
    shopee: string;
    tokopedia: string;
    tiktok: string;
    whatsapp: string;
  };
  translations: {
    shopee: string;
    tokopedia: string;
    tiktok: string;
    whatsapp: string;
  };
}

export function VariantCard({
  name,
  description,
  imageSrc,
  imageAlt,
  buyOptions,
  translations,
}: VariantCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader className="space-y-2">
        <ImageLightbox
          src={
            imageSrc ||
            "/placeholder.svg?height=600&width=600&query=wooden wrist rest variant"
          }
          alt={imageAlt}
          caption={name}
          sizes="(max-width: 768px) 100vw, 25vw"
          aspectClass="aspect-square"
        />
        <CardTitle className="text-base">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex w-full flex-col gap-2">
          <ButtonEnhanced
            variant="outline"
            size="sm"
            className="w-full gap-2 bg-transparent justify-center cursor-pointer"
            asChild
          >
            <a
              href={buyOptions.shopee}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${name} on Shopee`}
            >
              <FaShoppingBag className="h-4 w-4" /> {translations.shopee}
            </a>
          </ButtonEnhanced>
          <ButtonEnhanced
            variant="outline"
            size="sm"
            className="w-full gap-2 bg-transparent justify-center cursor-pointer"
            asChild
          >
            <a
              href={buyOptions.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${name} on Tokopedia`}
            >
              <FaStore className="h-4 w-4" /> {translations.tokopedia}
            </a>
          </ButtonEnhanced>
          <ButtonEnhanced
            variant="outline"
            size="sm"
            className="w-full gap-2 bg-transparent justify-center cursor-pointer"
            asChild
          >
            <a
              href={buyOptions.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${name} on TikTok Shop`}
            >
              <FaTiktok className="h-4 w-4" /> {translations.tiktok}
            </a>
          </ButtonEnhanced>
          <ButtonEnhanced
            variant="outline"
            size="sm"
            className="w-full gap-2 bg-transparent justify-center cursor-pointer"
            asChild
          >
            <a
              href={buyOptions.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${name} via WhatsApp`}
            >
              <FaWhatsapp className="h-4 w-4" /> {translations.whatsapp}
            </a>
          </ButtonEnhanced>
        </div>
      </CardFooter>
    </Card>
  );
}
