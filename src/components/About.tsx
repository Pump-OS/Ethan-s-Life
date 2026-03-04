"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      aria-label="About the series"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The Story
          </h2>
        </motion.div>

        {/* Featured still + synopsis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-white/[0.04] bg-surface-200/30"
        >
          <div className="grid md:grid-cols-2">
            {/* Cinematic still */}
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[360px]">
              <Image
                src="/images/ethan-classroom.png"
                alt="Ethan receiving a failing grade in class"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-200/80 max-md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-200/80 to-transparent md:hidden" />
            </div>

            {/* Synopsis text */}
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
              <p className="text-base leading-relaxed text-white/50 sm:text-lg">
                <span className="font-medium text-white/70">
                  Ethan&apos;s Life
                </span>{" "}
                is a short cinematic drama about a teenager trying to escape an
                ordinary life and prove he&apos;s capable of something bigger.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/35 sm:text-base">
                School isn&apos;t going well. Pressure at home keeps building.
                One night, Ethan gains access to an anonymous group where
                insiders leak coins before they explode. A little money. A
                little confidence. A little control.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/35 sm:text-base">
                But when he decides to resell that information and build his own
                channel, the game becomes bigger than he expected.
              </p>
              <p className="mt-3 text-sm font-medium italic text-white/25 sm:text-base">
                And someone is watching.
              </p>
              <div className="mt-6 h-px w-16 bg-accent-green/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
