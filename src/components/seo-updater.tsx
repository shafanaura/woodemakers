"use client";

import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

export default function SeoUpdater() {
  const { t, locale } = useI18n();

  useEffect(() => {
    const title = t("seo.title");
    const description = t("seo.description");

    if (title) document.title = title;
    // standard description
    upsertMeta("meta[name='description']", {
      name: "description",
      content: description,
    });
    // Open Graph
    upsertMeta("meta[property='og:title']", {
      property: "og:title",
      content: t("seo.ogTitle"),
    });
    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content: t("seo.ogDescription"),
    });
    // language on html element handled by provider
  }, [t, locale]);

  return null;
}
