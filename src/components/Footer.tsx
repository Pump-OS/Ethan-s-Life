"use client";

import { motion } from "framer-motion";
import { Youtube, Mail } from "lucide-react";
import XIcon from "./XIcon";
import type { ComponentType } from "react";

interface Social {
  icon?: ComponentType<{ className?: string }>;
  customIcon?: boolean;
  label: string;
  href: string;
}

const socials: Social[] = [
  { customIcon: true, label: "X", href: "https://x.com/Ethan_Series" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Ethans_Life_channel" },
  { icon: Mail, label: "Email", href: "mailto:ethanslife@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-16" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white">
              Ethan&apos;s Life
            </h3>
            <p className="mt-1 text-xs text-white/30">
              A short series about ambition, easy money, and the price of wanting more.
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social media links" className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white/30 transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white/60"
                aria-label={social.label}
              >
                {social.customIcon ? (
                  <XIcon className="h-4 w-4" />
                ) : social.icon ? (
                  <social.icon className="h-4 w-4" />
                ) : null}
              </a>
            ))}
          </nav>

          {/* CA */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/20 uppercase">
              CA
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText("GTkE59uuP3SLoXZKm9RVYTa2zLkagmjanP3P1oSVpump");
              }}
              className="rounded-lg bg-white/[0.03] px-4 py-2 font-mono text-[11px] text-white/30 transition-all duration-300 hover:bg-white/[0.06] hover:text-white/50 active:scale-95"
              title="Click to copy"
            >
              GTkE59uuP3SLoXZKm9RVYTa2zLkagmjanP3P1oSVpump
            </button>
          </div>

          {/* CTA */}
          <a
            href="https://x.com/Ethan_Series"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-2.5 text-xs font-semibold text-white/50 transition-all duration-300 hover:bg-accent-green/10 hover:text-accent-green"
          >
            <XIcon className="h-3.5 w-3.5" />
            Follow for Season 2 updates
          </a>

          {/* Copyright */}
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Ethan&apos;s Life. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
