import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "WoodeMakers — Wooden Wrist Rest",
  description:
    "Ergonomic solid-wood wrist rest handcrafted in Indonesia. Sizes for 60%, 65%, 75%, TKL, and 100%. Teak & pine options with matte polyurethane finish and anti‑slip base.",
  alternates: {
    languages: {
      en: "/",
      id: "/?lang=id",
    },
  },
  openGraph: {
    title: "WoodeMakers — Wooden Wrist Rest",
    description: "Ergonomic solid-wood wrist rest handcrafted in Indonesia. Sizes for 60%, 65%, 75%, TKL, and 100%.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="a3cd9908-0af8-41ba-bb52-703f6a54ec42"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
