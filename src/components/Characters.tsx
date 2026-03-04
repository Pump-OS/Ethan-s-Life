"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { characters } from "@/data/characters";

export default function Characters() {
  return (
    <section
      id="characters"
      className="relative py-24 sm:py-32"
      aria-label="Characters"
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
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-blue/60 uppercase">
            The Cast
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Characters
          </h2>
        </motion.div>

        {/* Character cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {characters.map((char, i) => (
            <motion.article
              key={char.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-glow group relative overflow-hidden rounded-3xl border border-white/[0.04] bg-surface-200/40 backdrop-blur-sm"
            >
              {/* Portrait */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                {char.image ? (
                  <>
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-surface-200/40 to-transparent" />
                    {/* Colored tint overlay */}
                    <div
                      className="absolute inset-0 mix-blend-color opacity-10"
                      style={{ backgroundColor: char.accentColor }}
                    />
                  </>
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${char.gradient}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-surface-200/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="absolute h-32 w-32 rounded-full opacity-15 blur-2xl"
                        style={{ backgroundColor: char.accentColor }}
                      />
                      <span
                        className="relative text-8xl font-black select-none opacity-20"
                        style={{ color: char.accentColor }}
                      >
                        ?
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className="text-[10px] font-bold tracking-[0.3em] uppercase"
                    style={{ color: char.accentColor + "99" }}
                  >
                    {char.role}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {char.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 pt-2">
                <p className="text-sm leading-relaxed text-white/40">
                  {char.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
