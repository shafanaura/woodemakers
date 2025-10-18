import Image from "next/image";
import {
  FaShoppingBag,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { LanguageSwitch } from "@/components/language-switch";
import { SocialLink } from "@/components/ui/social-link";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const socialLinks = [
    {
      href: "https://api.whatsapp.com/send?phone=6285117732112",
      icon: <FaWhatsapp className="h-5 w-5" />,
      label: "WhatsApp",
    },
    {
      href: "https://instagram.com/woode.makers",
      icon: <FaInstagram className="h-5 w-5" />,
      label: "Instagram",
    },
    {
      href: "https://tiktok.com/@woode.makers",
      icon: <FaTiktok className="h-5 w-5" />,
      label: "TikTok",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61579343714661",
      icon: <FaFacebook className="h-5 w-5" />,
      label: "Facebook",
    },
    {
      href: "https://www.youtube.com/@woodemakers",
      icon: <FaYoutube className="h-5 w-5" />,
      label: "YouTube",
    },
  ];

  const navigationLinks = [
    { href: "#features", label: t("common.features") },
    { href: "#variants", label: t("common.variants") },
    { href: "#pricing", label: t("common.pricing") },
    { href: "#buy", label: t("common.whereToBuy") },
    { href: "#faq", label: t("common.faq") },
  ];

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-6">
          {/* Main Footer Content - Horizontal Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Navigation Links */}
            <nav aria-label="Footer" className="flex-1">
              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="text-foreground hover:underline cursor-pointer"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Center: Language Switch */}
            <div className="flex-shrink-0">
              <LanguageSwitch />
            </div>

            {/* Right: Social Media Links */}
            <nav aria-label="Social" className="flex-1">
              <ul className="flex items-center justify-center lg:justify-end gap-4">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <SocialLink
                      href={link.href}
                      icon={link.icon}
                      label={link.label}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom: Brand and Copyright */}
          <div className="flex justify-center">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Image
                src="/images/logo-filled.svg"
                alt="WoodeMakers logo"
                width={20}
                height={20}
              />
              © {new Date().getFullYear()} {t("common.brand")} —{" "}
              {t("common.madeInIndonesia")}
              <svg
                viewBox="0 0 3 2"
                width="14"
                height="10"
                aria-label="Indonesia flag"
              >
                <rect width="3" height="1" fill="#EA1D25" />
                <rect y="1" width="3" height="1" fill="#ffffff" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
