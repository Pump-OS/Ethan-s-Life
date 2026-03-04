export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  gradient: string;
  accentColor: string;
  image?: string;
}

export const characters: Character[] = [
  {
    id: "ethan",
    name: "Ethan",
    role: "The Protagonist",
    description:
      "A high school student from a quiet suburb trying to escape an ordinary life. School isn't going well, pressure at home keeps building. Until one night, a message changes everything. Curious, impulsive, and desperate to prove he's capable of something bigger.",
    gradient: "from-accent-green/30 via-transparent to-accent-blue/20",
    accentColor: "#00ff87",
    image: "/images/ethan-portrait.png",
  },
  {
    id: "anonymous",
    name: "Anonymous",
    role: "The Antagonist",
    description:
      "A faceless presence behind the screen. The source of the insider signals, and something more. No name, no face, just messages that always arrive at the right time. Their motives are unclear, but their knowledge is terrifying.",
    gradient: "from-red-500/30 via-transparent to-purple-500/20",
    accentColor: "#ef4444",
  },
  {
    id: "friend",
    name: "The Friend",
    role: "The Ally",
    description:
      "Ethan's closest confidant. The only person he trusts. But in a world where everyone is a suspect, even loyalty has an expiration date.",
    gradient: "from-accent-blue/30 via-transparent to-cyan-500/20",
    accentColor: "#60a5fa",
  },
];
