export interface Episode {
  id: number;
  season: number;
  number: number;
  title: string;
  logline: string;
  duration: string;
  synopsis: string;
  themes: string[];
  watchUrl: string;
  image?: string;
  released?: boolean;
  /** "none" | "light" | "heavy" — controls spoiler blur on the card */
  blur?: "none" | "light" | "heavy";
}

export const episodes: Episode[] = [
  {
    id: 1,
    season: 1,
    number: 1,
    title: "The Notification",
    logline:
      "Ethan's life feels stuck. Until a late-night message leads him to a group that knows what's about to explode.",
    duration: "~1 min",
    synopsis:
      "Caught between school pressure and family expectations, Ethan scrolls through his phone late at night. A message leads him to a mysterious anonymous group. Inside, a single coin name that's about to pump. For the first time, Ethan sees a way out.",
    themes: ["pressure", "opportunity", "escape"],
    watchUrl: "https://youtube.com/shorts/GrHjKaFrQrQ",
    image: "/images/ethan-transaction.png",
    released: true,
  },
  {
    id: 2,
    season: 1,
    number: 2,
    title: "First Signal",
    logline:
      "The first trade hits. Ethan realizes information itself can be sold. He builds his own channel.",
    duration: "~1 min",
    synopsis:
      "After making his first money from the insider tip, Ethan sees the bigger picture: information is the real product. He creates his own private channel, reselling signals to others chasing the next pump. The plan works. Until a message appears from the same anonymous source. And this time, it isn't a signal.",
    themes: ["ambition", "greed", "confidence"],
    watchUrl: "https://youtube.com/shorts/lhqwAfBHVes",
    image: "/images/ethan-laptop.png",
    released: true,
  },
  {
    id: 3,
    season: 1,
    number: 3,
    title: "Exposure",
    logline:
      "The game gets bigger than expected. Someone is watching. And Ethan is no longer in control.",
    duration: "~1 min",
    synopsis:
      "Ethan's channel grows fast, but so does the attention. Private details start surfacing. The anonymous source tightens its grip. What started as easy money is becoming a trap with no exit.",
    themes: ["exposure", "paranoia", "control"],
    watchUrl: "#",
    image: "/images/ethan-window.png",
    blur: "light",
  },
  {
    id: 4,
    season: 1,
    number: 4,
    title: "Control",
    logline:
      "Ethan fights back. But the game was never his to win.",
    duration: "~1 min",
    synopsis:
      "Desperate to regain control, Ethan devises a counter-plan. But the anonymous figure is always one step ahead, turning every move into a trap. The addiction to control becomes the real enemy.",
    themes: ["addiction", "control", "desperation"],
    watchUrl: "#",
    image: "/images/ethan-portrait.png",
    blur: "heavy",
  },
  {
    id: 5,
    season: 1,
    number: 5,
    title: "Unmasked",
    logline:
      "The truth comes out. And nothing will ever be the same.",
    duration: "~1 min",
    synopsis:
      "In a devastating finale, identities collide. The anonymous figure steps out of the shadows, and Ethan must confront the one truth he's been running from: this was never about the money.",
    themes: ["revelation", "identity", "consequence"],
    watchUrl: "#",
    image: "/images/ethan-phone.png",
    blur: "heavy",
  },
];
