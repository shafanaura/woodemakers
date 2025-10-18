"use client";

import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";
import en from "@/locales/en.json";
import id from "@/locales/id.json";

export type Locale = "en" | "id";

type Translations = Record<string, any>;

const translations: Record<Locale, Translations> = { en, id };

type I18nContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(obj: Translations, path: string): any {
  return path
    .split(".")
    .reduce(
      (acc: any, part: string) =>
        acc && acc[part] !== undefined ? acc[part] : undefined,
      obj
    );
}

function interpolate(
  input: string,
  params?: Record<string, string | number>
): string {
  if (!params) return input;
  return Object.keys(params).reduce(
    (out, key) => out.replaceAll(`{${key}}`, String(params[key])),
    input
  );
}

async function getUserCountry(): Promise<string | null> {
  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data?.country_code === "string" ? data.country_code : null;
  } catch {
    return null;
  }
}

function detectFromNavigator(): Locale | null {
  if (typeof navigator === "undefined") return null;
  const lang = navigator.language?.toLowerCase() || "";
  if (lang.startsWith("id")) return "id";
  if (lang.startsWith("en")) return "en";
  return null;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isClient, setIsClient] = useState(false);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("lang", next);
        document.documentElement.lang = next;
      }
    } catch {}
  }, []);

  useEffect(() => {
    setIsClient(true);
    let mounted = true;
    async function init() {
      try {
        if (typeof window === "undefined") return;
        const saved = window.localStorage.getItem("lang") as Locale | null;
        if (saved === "en" || saved === "id") {
          if (!mounted) return;
          setLocale(saved);
          return;
        }
        // Try navigator first for speed
        const nav = detectFromNavigator();
        if (nav) {
          if (!mounted) return;
          setLocale(nav);
          return;
        }
        // Fallback to IP-based geolocation
        const country = await getUserCountry();
        const detected: Locale = country === "ID" ? "id" : "en";
        if (!mounted) return;
        setLocale(detected);
      } catch {
        // default stays "en"
      }
    }
    init();
    return () => {
      mounted = false;
    };
  }, [setLocale]);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      if (!isClient) {
        // During SSR, always return English
        const value = getByPath(translations.en, key);
        if (typeof value === "string") return interpolate(value, params);
        return key;
      }
      const value = getByPath(translations[locale], key);
      if (typeof value === "string") return interpolate(value, params);
      // fall back to english if missing
      const fallback = getByPath(translations.en, key);
      if (typeof fallback === "string") return interpolate(fallback, params);
      return key;
    },
    [locale, isClient]
  );

  const ctx: I18nContextValue = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return <I18nContext.Provider value={ctx}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
