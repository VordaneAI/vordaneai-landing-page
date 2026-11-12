import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { CursorGlow } from "../components/ui/CursorGlow";
import { SmoothScroll } from "../components/SmoothScroll";
import { site } from "../lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "VORDANE AI | AI Engineering, Agentic AI & AI Security";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: "VORDANE AI",
  keywords: ["VORDANE AI", "Generative AI", "Agentic AI", "AI agents", "enterprise AI", "RAG", "AI security", "AI observability", "FastAPI", "MCP", "AI engineering"],
  alternates: { canonical: "/" },
  openGraph: { title, description: site.description, url: "/", siteName: "VORDANE AI", type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101936",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VORDANE AI",
  url: site.url,
  slogan: site.tagline,
  description: site.description,
  founder: { "@type": "Person", name: site.founder.name, jobTitle: "Founder & CEO", sameAs: [site.founder.linkedin] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only z-[60] rounded-full bg-cyan px-4 py-2 font-semibold text-midnight focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="aurora" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <CursorGlow />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

