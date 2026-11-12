import {
  Activity,
  AudioLines,
  Bot,
  Boxes,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Factory,
  Gem,
  FileText,
  GitBranch,
  Globe,
  Headset,
  Layers,
  MessageCircle,
  MessagesSquare,
  Network,
  PhoneCall,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Video,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  siAnthropic,
  siDocker,
  siFastapi,
  siGooglecloud,
  siGooglegemini,
  siKubernetes,
  siLangchain,
  siModelcontextprotocol,
  siOpensearch,
  siPostgresql,
  siPython,
  siQdrant,
  siRust,
  siGooglebigquery,
  siVllm,
} from "simple-icons";

/* ------------------------------------------------------------------ */
/* Site config                                                         */
/* Official company channels are intentionally `null` until supplied.  */
/* Set a value here and the UI will automatically render a real link.  */
/* ------------------------------------------------------------------ */
export const site = {
  name: "VORDANE AI",
  url: "https://vordane.ai", // used for metadata only; update to the production domain
  tagline: "Observe. Govern. Secure.",
  description:
    "VORDANE AI is an AI engineering company building Generative AI, Agentic AI, enterprise AI solutions, AI security and observability products, and production backend systems.",
  channels: {
    email: null as string | null, // e.g. "hello@yourdomain.com"
    linkedin: null as string | null, // company LinkedIn page
  },
  founder: {
    name: "Naren Rajendra",
    role: "Founder & CEO, Vordane AI",
    bio: "Founder and CEO of Vordane AI, building intelligent AI platforms, autonomous agents, and enterprise automation solutions. My focus is turning complex business challenges into scalable, intelligent technology that drives real-world impact.",
    linkedin: "https://www.linkedin.com/in/naren-rajendra-s-732869392/",
  },
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
];

/* ------------------------------ Products ------------------------------ */
export type Feature = { label: string; status?: "available" | "roadmap" };
export type Product = {
  id: "vyroniq" | "ai-hrflow" | "pdf-parser";
  name: string;
  kicker: string;
  summary: string;
  interest: string;
  features: Feature[];
  note?: string;
};

export const products: Product[] = [
  {
    id: "vyroniq",
    name: "VYRONIQ",
    kicker: "Agent observability & evaluation",
    summary:
      "An observability, security and behavioral evaluation platform for autonomous AI agents. It continuously monitors agent behavior, scores goal alignment, analyzes decisions and surfaces deviations, so agents operate as intended.",
    interest: "Product: VYRONIQ",
    features: [
      { label: "AI agent behavior monitoring", status: "available" },
      { label: "Goal alignment evaluation across 7 axes", status: "available" },
      { label: "Decision analysis with local decision models", status: "available" },
      { label: "Agent execution traces and span trees", status: "available" },
      { label: "Deviation and unsafe tool-use detection", status: "available" },
      { label: "Real-time event interception & policy enforcement", status: "roadmap" },
    ],
    note: "Interception is on the public roadmap and is not yet available.",
  },
  {
    id: "ai-hrflow",
    name: "AI-HRFlow",
    kicker: "AI-powered HR solution",
    summary:
      "An AI-powered HR solution that applies intelligent automation to people-operations workflows, reducing manual effort for HR teams while keeping people in the loop.",
    interest: "Product: AI-HRFlow",
    features: [
      { label: "AI-assisted HR workflow automation" },
      { label: "Designed for human-in-the-loop decisions" },
      { label: "Built on the VORDANE AI engineering stack" },
    ],
  },
  {
    id: "pdf-parser",
    name: "PDF Parser",
    kicker: "Document processing",
    summary:
      "A document processing and PDF parsing solution that turns unstructured PDFs into clean, machine-readable content, ready for search, analytics and AI pipelines.",
    interest: "Product: PDF Parser",
    features: [
      { label: "PDF content extraction and parsing" },
      { label: "Structured output for downstream systems" },
      { label: "Foundation for RAG and document-intelligence ingestion" },
    ],
  },
];

/* ------------------------------ Solutions ------------------------------ */
export type Solution = {
  id: "multimodal" | "agents" | "voice" | "whatsapp";
  title: string;
  blurb: string;
  icon: LucideIcon;
  points: { label: string; icon: LucideIcon }[];
};

export const solutions: Solution[] = [
  {
    id: "multimodal",
    title: "Multimodal AI Chat",
    blurb: "Conversational applications that understand every kind of content your business holds.",
    icon: Sparkles,
    points: [
      { label: "Chat with videos", icon: Video },
      { label: "Chat with PDFs and documents", icon: FileText },
      { label: "Chat with plain text", icon: MessagesSquare },
      { label: "Chat with audio", icon: AudioLines },
      { label: "Multimodal conversational experiences", icon: Layers },
      { label: "Knowledge-grounded AI assistants", icon: BrainCircuit },
    ],
  },
  {
    id: "agents",
    title: "Custom AI Agents",
    blurb: "Agents that act inside your business, safely connected to your systems and supervised by your people.",
    icon: Bot,
    points: [
      { label: "Integrated with business APIs", icon: Globe },
      { label: "Connected to internal systems and databases", icon: Database },
      { label: "MCP-based integrations", icon: Network },
      { label: "Automated business workflows", icon: Workflow },
      { label: "Multi-agent orchestration", icon: GitBranch },
      { label: "Human-in-the-loop workflows", icon: ShieldCheck },
    ],
  },
  {
    id: "voice",
    title: "AI Call Center Agents",
    blurb: "Voice agents that handle customer conversations at scale and plug into the systems behind them.",
    icon: Headset,
    points: [
      { label: "Intelligent voice-based customer support", icon: Headset },
      { label: "AI-powered inbound and outbound calling", icon: PhoneCall },
      { label: "Automated customer interactions", icon: Bot },
      { label: "Voice-based information retrieval", icon: Search },
      { label: "Business system integrations", icon: Network },
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp AI Agents",
    blurb: "Meet customers where they already are, with agents that support, qualify and engage.",
    icon: MessageCircle,
    points: [
      { label: "Intelligent WhatsApp customer support", icon: MessageCircle },
      { label: "Automated conversations", icon: MessagesSquare },
      { label: "Lead qualification", icon: Zap },
      { label: "Customer engagement workflows", icon: Workflow },
      { label: "Integration with custom APIs and business systems", icon: Network },
    ],
  },
];

/* ------------------------------ Services ------------------------------ */
export const services = [
  {
    n: "01",
    title: "AI Application Development",
    desc: "Custom AI applications, custom models based on choice, fine-tuning on domain-specific data for niche use cases, LLM integrations, intelligent chatbots, multimodal applications, and business automation.",
    icon: Sparkles,
  },
  {
    n: "02",
    title: "Agentic AI Solutions",
    desc: "Autonomous agents, multi-agent systems, MCP integrations, custom API integrations, and intelligent workflow automation.",
    icon: Bot,
  },
  {
    n: "03",
    title: "RAG & Enterprise AI",
    desc: "Enterprise knowledge assistants, document intelligence, fine-tuning on domain-specific data for niche enterprise use cases, semantic search, vector databases, and production-ready RAG pipelines.",
    icon: Search,
  },
  {
    n: "04",
    title: "AI Security & Observability",
    desc: "AI agent monitoring, goal alignment evaluation, security assessments, prompt injection detection, and runtime behavior analysis.",
    icon: ShieldCheck,
  },
  {
    n: "05",
    title: "Backend & API Engineering",
    desc: "Scalable Python backends, FastAPI applications, microservices, authentication, authorization, database engineering, and event-driven architectures.",
    icon: ServerCog,
  },
  {
    n: "06",
    title: "AI Infrastructure & Deployment",
    desc: "Self-hosted LLMs, GPU inference, model serving, Docker, Kubernetes, cloud infrastructure, and AI application deployment.",
    icon: Cpu,
  },
];

/* ------------------------------ Technology ------------------------------ */
export type Tech = { name: string; path?: string; fallback?: LucideIcon; image?: string; wide?: boolean };
export const techGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Languages & Backend",
    items: [
      { name: "Python", path: siPython.path },
      { name: "Rust", path: siRust.path },
      { name: "FastAPI", path: siFastapi.path },
    ],
  },
  {
    title: "Foundation Models",
    items: [
      { name: "OpenAI", fallback: Sparkles },
      { name: "Claude", path: siAnthropic.path },
      { name: "Gemini", path: siGooglegemini.path },
    ],
  },
  {
    title: "Agentic Frameworks",
    items: [
      { name: "LangChain", path: siLangchain.path },
      { name: "MCP", path: siModelcontextprotocol.path },
      { name: "Google ADK", fallback: Boxes },
      { name: "AWS Bedrock", image: "/aws-bedrock.png" },
      { name: "Azure AI Foundry", fallback: Factory },
    ],
  },
  {
    title: "Data & Search",
    items: [
      { name: "PostgreSQL", path: siPostgresql.path },
      { name: "Qdrant", path: siQdrant.path },
      { name: "OpenSearch", path: siOpensearch.path },
      { name: "BigQuery", path: siGooglebigquery.path },
    ],
  },
  {
    title: "Cloud & Containers",
    items: [
      { name: "Docker", path: siDocker.path },
      { name: "Kubernetes", path: siKubernetes.path },
      { name: "AWS", fallback: Cloud },
      { name: "Azure", fallback: Cloud },
      { name: "Google Cloud", path: siGooglecloud.path },
    ],
  },
  {
    title: "LLM Inference",
    items: [
      { name: "vLLM", path: siVllm.path },
      { name: "SGLang", fallback: Zap },
    ],
  },
];

/* ------------------------------ Why / Process ------------------------------ */
export const whyPoints = [
  { title: "Engineering-first approach", desc: "We start from system design and reliability, not demos. Every AI feature is built like production software.", icon: Boxes },
  { title: "Production-focused AI", desc: "Evaluation, monitoring and guardrails are part of the build, so what ships keeps working.", icon: Activity },
  { title: "Custom-built architectures", desc: "No templates. Architectures are shaped around your data, workflows and constraints.", icon: Layers },
  { title: "Secure and scalable systems", desc: "Authentication, authorization and AI-specific security are designed in from day one.", icon: ShieldCheck },
  { title: "Seamless integration, high ROI", desc: "AI that plugs into your existing infrastructure, so value arrives without a rebuild.", icon: Network },
  { title: "Measurable business outcomes", desc: "We define success metrics up front and engineer toward them.", icon: Zap },
];

export const processSteps = [
  { n: "01", title: "Discover", desc: "Understand business requirements and challenges." },
  { n: "02", title: "Architect", desc: "Design the right AI and software architecture." },
  { n: "03", title: "Engineer", desc: "Build, integrate, and test the solution." },
  { n: "04", title: "Deploy", desc: "Launch scalable, production-ready systems." },
  { n: "05", title: "Optimize", desc: "Continuously monitor, evaluate, and improve." },
];

export const interestOptions = [
  ...services.map((s) => `Service: ${s.title}`),
  ...solutions.map((s) => `Solution: ${s.title}`),
  ...products.map((p) => p.interest),
  "Something else",
];


