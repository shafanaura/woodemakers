import Image from "next/image"
import { ShopeeIcon, WhatsAppIcon, InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon } from "./icons"

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Image src="/images/logo-filled.svg" alt="WoodeMakers logo" width={20} height={20} />©{" "}
            {new Date().getFullYear()} WoodeMakers — Made in Indonesia
            <svg viewBox="0 0 3 2" width="14" height="10" aria-label="Indonesia flag">
              <rect width="3" height="1" fill="#EA1D25" />
              <rect y="1" width="3" height="1" fill="#ffffff" />
            </svg>
          </p>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <a className="text-foreground hover:underline" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="text-foreground hover:underline" href="#variants">
                  Variants
                </a>
              </li>
              <li>
                <a className="text-foreground hover:underline" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-foreground hover:underline" href="#buy">
                  Where to Buy
                </a>
              </li>
              <li>
                <a className="text-foreground hover:underline" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Social" className="mt-2 md:mt-0">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="https://id.shp.ee/zU7Ft7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shopee - Dark Two Tone"
                  className="text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <ShopeeIcon className="h-5 w-5" />
                  <span className="sr-only">Shopee</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285117732112"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/woode.makers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <InstagramIcon className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@woode.makers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <TikTokIcon className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/woode.makers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@woodemakers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-foreground hover:text-primary rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <YouTubeIcon className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
