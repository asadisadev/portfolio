"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Website",
  "Web Application",
  "AI Application",
  "Backend/API",
  "Bug Fix",
  "Feature Development",
  "Other",
];

const budgets = [
  "Under $300",
  "$300–$750",
  "$750–$1,500",
  "$1,500+",
  "Not Sure",
];

const timelines = ["ASAP", "1–2 weeks", "1 month", "2–3 months", "Flexible"];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-ring";

function Field({ label, htmlFor, children, required }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label} {required && <span className="text-brand">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-brand/30 bg-brand/5 p-8 text-center"
          >
            <CheckCircle2 className="mx-auto h-10 w-10 text-brand" />
            <h3 className="mt-4 text-lg font-semibold">
              Inquiry received — thank you!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I&apos;ll review your project details and get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-brand hover:opacity-80 focus-ring rounded-md"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="email" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Company / Organization" htmlFor="company">
              <input
                id="company"
                name="company"
                placeholder="Optional"
                className={inputClass}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Project Type" htmlFor="projectType" required>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className={cn(inputClass, "appearance-none")}
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Budget" htmlFor="budget">
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className={cn(inputClass, "appearance-none")}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Timeline" htmlFor="timeline">
              <select
                id="timeline"
                name="timeline"
                defaultValue=""
                className={cn(inputClass, "appearance-none")}
              >
                <option value="" disabled>
                  Select a timeline
                </option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Project Description" htmlFor="description" required>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                placeholder="Tell me about your project, goals and any key features..."
                className={cn(inputClass, "resize-none")}
              />
            </Field>

            <Field label="Reference / Existing Website" htmlFor="reference">
              <input
                id="reference"
                name="reference"
                placeholder="https://"
                className={inputClass}
              />
            </Field>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              variant="brand"
              size="lg"
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Project Inquiry
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              I typically respond within 1–2 business days.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
