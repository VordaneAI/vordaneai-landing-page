"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { interestOptions } from "../../lib/content";
import { INTEREST_EVENT } from "../../lib/interest";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const field =
  "w-full rounded-xl border border-white/12 bg-midnight/60 px-4 py-3 text-[16px] sm:text-sm text-white placeholder:text-cloud/40 transition focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30";

function Field({ id, label, children, required }: { id: string; label: string; children: ReactNode; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-cloud/85">
        {label}
        {required && <span className="text-cyan" aria-hidden> *</span>}
      </label>
      {children}
    </div>
  );
}

export function Contact() {
  const [interest, setInterest] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = window.sessionStorage.getItem("vordane:interest");
    if (saved) setInterest(saved);
    const on = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener(INTEREST_EVENT, on);
    return () => window.removeEventListener(INTEREST_EVENT, on);
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fd),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) {
        throw new Error(json.message ?? "Something went wrong. Please try again.");
      }
      setState("ok");
      form.reset();
      setInterest("");
      window.sessionStorage.removeItem("vordane:interest");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(137,128,245,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(99,230,232,0.14),transparent_55%)]" aria-hidden />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title={<>Have an AI Idea? <span className="text-gradient">Let&rsquo;s Engineer It.</span></>}
          subtitle="Whether you&rsquo;re building your first AI-powered product or scaling an existing platform, VORDANE AI can help turn your vision into reality."
          align="center"
        />

        <Reveal delay={0.1}>
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={submit} className="glass rounded-3xl p-5 sm:p-8 lg:p-10" noValidate={false} aria-describedby="form-status">
            <input type="hidden" name="access_key" value="2d56403c-ac2c-485c-9f27-a6c0b0860176" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" required>
                <input id="name" name="name" required maxLength={120} autoComplete="name" placeholder="Your full name" className={field} />
              </Field>
              <Field id="email" label="Business email" required>
                <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" placeholder="you@company.com" className={field} />
              </Field>
              <Field id="company" label="Company">
                <input id="company" name="company" maxLength={160} autoComplete="organization" placeholder="Company name" className={field} />
              </Field>
              <Field id="interest" label="Service of interest">
                <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className={`${field} appearance-none`}>
                  <option value="">Select an option</option>
                  {interestOptions.map((o: string) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="mt-5">
              <Field id="message" label="Project description" required>
                <textarea id="message" name="message" required rows={5} maxLength={4000} placeholder="Tell us about your goals, users and any existing systems." className={`${field} resize-y`} />
              </Field>
            </div>
            {/* honeypot */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
              <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" disabled={state === "sending"} className="w-full sm:w-auto">
                {state === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {state === "sending" ? "Submitting..." : "Submit Form"}
              </Button>
              <div id="form-status" role="status" aria-live="polite" className="min-h-6 text-sm">
                <AnimatePresence mode="wait">
                  {state === "ok" && (
                    <motion.p key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-cyan font-medium">
                      <CheckCircle2 size={18} /> Thanks, your message has been sent. We&rsquo;ll be in touch.
                    </motion.p>
                  )}
                  {state === "error" && (
                    <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-start gap-2 text-cloud">
                      <AlertCircle size={18} className="mt-0.5 shrink-0 text-violet" /> {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
