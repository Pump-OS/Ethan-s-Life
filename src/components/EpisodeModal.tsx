"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Clock, Hash } from "lucide-react";
import Image from "next/image";
import type { Episode } from "@/data/episodes";

interface EpisodeModalProps {
  episode: Episode | null;
  onClose: () => void;
}

export default function EpisodeModal({ episode, onClose }: EpisodeModalProps) {
  return (
    <AnimatePresence>
      {episode && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.article
            className="card-glow relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/[0.06] bg-surface-200/90 shadow-2xl backdrop-blur-xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Episode ${episode.number}: ${episode.title}`}
          >
            {/* Header image */}
            <div className="relative h-48 overflow-hidden sm:h-56">
              {episode.image ? (
                <>
                  <Image
                    src={episode.image}
                    alt={`Episode ${episode.number}: ${episode.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 32rem"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-surface-200/50 to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 via-surface-200 to-accent-blue/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-transparent to-transparent" />
                </>
              )}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-accent-green backdrop-blur-sm">
                    <Hash className="h-3 w-3" />
                    EP {episode.number}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {episode.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/60 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="space-y-5 p-6 pt-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {episode.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/40">
                  {episode.logline}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-white/60">
                {episode.synopsis}
              </p>

              {/* Themes */}
              <div className="flex flex-wrap gap-2">
                {episode.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/30 uppercase"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={episode.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent-green hover:shadow-[0_0_40px_rgba(0,255,135,0.25)]"
              >
                Watch on YouTube
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
