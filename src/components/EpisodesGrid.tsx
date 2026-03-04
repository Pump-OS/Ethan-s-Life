"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import Image from "next/image";
import { episodes } from "@/data/episodes";
import type { Episode } from "@/data/episodes";
import EpisodeModal from "./EpisodeModal";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function EpisodesGrid() {
  const [selected, setSelected] = useState<Episode | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <section
      id="episodes"
      className="relative py-24 sm:py-32"
      aria-label="Episodes"
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
          <span className="text-xs font-semibold tracking-[0.3em] text-accent-green/60 uppercase">
            Season 1
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The Episodes
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/40">
            Five episodes. Five minutes. One story that pulls you in and
            doesn&apos;t let go.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep, i) => (
            <motion.button
              key={ep.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelected(ep)}
              className="card-glow group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.04] bg-surface-200/60 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.08] hover:bg-surface-300/60 hover:shadow-[0_20px_60px_-15px_rgba(0,255,135,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              aria-label={`Episode ${ep.number}: ${ep.title}. ${ep.logline}`}
            >
              {/* Thumbnail */}
              {ep.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={ep.image}
                    alt={`Episode ${ep.number}: ${ep.title}`}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      ep.blur === "heavy"
                        ? "blur-[20px] scale-110 brightness-50"
                        : ep.blur === "light"
                          ? "blur-[10px] scale-105 brightness-[0.6]"
                          : ""
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-surface-200/30 to-transparent" />
                  {ep.blur && ep.blur !== "none" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-surface-300 to-surface-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                {/* Episode number + duration */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-white/20 uppercase">
                    EP {String(ep.number).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-white/20">
                    <Clock className="h-3 w-3" />
                    {ep.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-accent-green">
                  {ep.title}
                </h3>

                {/* Logline */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/35">
                  {ep.logline}
                </p>

                {/* Watch indicator */}
                {ep.released && (
                  <div className="flex items-center gap-2 text-xs font-medium text-white/20 transition-colors group-hover:text-accent-green/60">
                    <Play className="h-3 w-3" />
                    <span>Watch now</span>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <EpisodeModal episode={selected} onClose={handleClose} />
    </section>
  );
}
