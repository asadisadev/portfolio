"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="faq" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left focus-ring rounded-md"
                >
                  <span className="text-sm font-medium sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border transition-all duration-300",
                      isOpen &&
                        "rotate-45 border-brand/40 bg-brand/10 text-brand",
                    )}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
