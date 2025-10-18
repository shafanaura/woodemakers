import { useI18n, Locale } from "@/lib/i18n";

interface LanguageButtonProps {
  locale: Locale;
  currentLocale: Locale;
  onClick: () => void;
  children: React.ReactNode;
}

function LanguageButton({
  locale,
  currentLocale,
  onClick,
  children,
}: LanguageButtonProps) {
  const isActive = locale === currentLocale;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`text-xs underline-offset-2 hover:underline cursor-pointer transition-all duration-200 ${
        isActive ? "font-semibold" : "opacity-80 hover:opacity-100"
      }`}
    >
      {children}
    </button>
  );
}

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const onClick = (next: Locale) => () => setLocale(next);

  return (
    <div className={className} role="group" aria-label="Language switcher">
      <LanguageButton
        locale="en"
        currentLocale={locale}
        onClick={onClick("en")}
      >
        EN
      </LanguageButton>
      <span className="mx-1">|</span>
      <LanguageButton
        locale="id"
        currentLocale={locale}
        onClick={onClick("id")}
      >
        ID
      </LanguageButton>
    </div>
  );
}

export default LanguageSwitch;
