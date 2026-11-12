import { products, services, site } from "../lib/content";
import { LinkedinIcon } from "./ui/BrandIcons";
import { Logo } from "./ui/Logo";

const techHighlights = ["Python, Rust & FastAPI", "OpenAI, Claude, Gemini", "LangChain, MCP, Google ADK", "AWS Bedrock, Azure AI Foundry", "PostgreSQL, Qdrant, BigQuery, OpenSearch", "Docker & Kubernetes", "AWS, Azure, Google Cloud", "vLLM & SGLang"];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan">{title}</h3>
      <ul className="space-y-2.5 text-sm text-cloud/70">{children}</ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0c1329] px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="VORDANE AI, back to top"><Logo size={44} /></a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cloud/70">
              VORDANE AI engineers Generative AI, agentic systems and enterprise AI infrastructure, and builds its own products for AI observability, HR and document processing.
            </p>
            <p className="mt-5 font-display text-lg font-semibold text-gradient">{site.tagline}</p>

            <div className="glass mt-8 max-w-sm rounded-2xl p-5">
              <p className="font-display font-semibold text-white">{site.founder.name}</p>
              <p className="text-xs uppercase tracking-widest text-cyan">{site.founder.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-cloud/70">{site.founder.bio}</p>
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan"
              >
                <LinkedinIcon size={18} /> Connect on LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          <Col title="Products">
            {products.map((p) => (
              <li key={p.id}>
                <a href="#products" className="transition-colors hover:text-white">{p.name}</a>
              </li>
            ))}
          </Col>

          <Col title="Services">
            {services.map((s) => (
              <li key={s.n}><a href="#services" className="transition-colors hover:text-white">{s.title}</a></li>
            ))}
          </Col>

          <Col title="Technology Expertise">
            {techHighlights.map((t) => (
              <li key={t}><a href="#technology" className="transition-colors hover:text-white">{t}</a></li>
            ))}
          </Col>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-cloud/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} VORDANE AI. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-[0.25em]">Observe &middot; Govern &middot; Secure</p>
        </div>
      </div>
    </footer>
  );
}


