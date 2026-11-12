export interface PodcastEpisode {
  id: string;
  episodeNumber: number | string;
  title: string;
  guest: string;
  guestRole: string;
  category: "Investigative & Journalism" | "Supernatural & Spiritual" | "Human Triumph & Sports" | "Food & Culture" | "Media & Business";
  duration: string;
  date: string;
  description: string;
  highlights: string[];
  youtubeUrl: string;
  badge?: string;
  /** YouTube video ID — used to build thumbnail URLs */
  videoId?: string;
  /** Resolved thumbnail URL (maxresdefault or hqdefault fallback) */
  thumbnailUrl?: string;
}

export const podcastInfo = {
  title: "The Viral Podcast PK",
  tagline: "Unfiltered Stories. Investigative Realities. Real Voices.",
  description:
    "Hosted by Dai Ali Daniyal (CEO, Viral Marketing Solution), The Viral Podcast PK is one of Pakistan's most compelling long-form video podcasts — exploring journalism, supernatural encounters, athletic triumphs, cultural truths, and the mechanics of modern virality.",
  youtubeChannelUrl: "https://www.youtube.com/@TheViralPodcastPk",
  youtubeVideosUrl: "https://www.youtube.com/@TheViralPodcastPk/videos",
  host: {
    name: "Dai Ali Daniyal",
    role: "CEO, Viral Marketing Solution & Host",
    bio: "Strategist, interviewer, and media architect. Holding degrees in Business Management and International Business, Dai bridges cultural journalism with raw, unscripted storytelling, giving Pakistan's most intriguing minds an unfiltered mic.",
    avatar: "/10-2.webp",
  },
  studio: {
    location: "Badar Commercial Phase 5, DHA, Karachi, PK",
    specs: [
      "4K Ultra-HD Multi-Angle Cinema Rig",
      "Shure SM7B Broadcast Vocal Microphones",
      "Acoustically Calibrated Soundstage",
      "Dedicated Live In-House Post-Production Suite",
    ],
  },
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep-12-ruqyah-jinn",
    episodeNumber: 12,
    title: "Jinn Stories & Ruqyah Cases (Strictly 18+) | Unexplained Metaphysical Encounters",
    guest: "Mufti Khubaib",
    guestRole: "Spiritual Scholar & Ruqyah Specialist",
    category: "Supernatural & Spiritual",
    duration: "1h 42m",
    date: "November 2026",
    badge: "🔥 Most Watched",
    description:
      "Mufti Khubaib joins Dai Ali Daniyal for a gripping, spine-chilling conversation on real-world paranormal phenomena, verified Ruqyah cases, psychological misdiagnoses, and the boundary between spiritual afflictions and psychiatric medicine.",
    highlights: [
      "True accounts of possessions and psychological vs. spiritual diagnoses.",
      "The mechanics of authentic Islamic Ruqyah and countering charlatans.",
      "Unexplained incidents documented in Karachi and rural Sindh.",
      "Protecting mental well-being and spiritual boundaries.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=02WnoNmy-YU",
    videoId: "02WnoNmy-YU",
    thumbnailUrl: "https://i.ytimg.com/vi/02WnoNmy-YU/hqdefault.jpg",
  },
  {
    id: "ep-03-karachi-neglected-child",
    episodeNumber: 3,
    title: "Karachi, The Neglected Child: Water Mafias, Crime & The Battle for Pakistan's Economic Heart",
    guest: "Faheem Siddique",
    guestRole: "Senior Investigative Journalist (GEO News / FIR)",
    category: "Investigative & Journalism",
    duration: "1h 18m",
    date: "October 2026",
    badge: "⚡ Critical Journalism",
    description:
      "Veteran crime and investigative reporter Faheem Siddique joins the studio to pull back the curtain on Karachi's systemic governance crises, street crime patterns, the tankers mafia, and why the city generating Pakistan's revenue remains fundamentally neglected.",
    highlights: [
      "The ground reality of street snatchings and law enforcement challenges.",
      "How the unregulated water tanker economy drains middle-class households.",
      "Investigative journalism ethics when covering dangerous cartel beats.",
      "Is there hope for structural municipal reform in Karachi?",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=-gZNDOM8xUw",
    videoId: "-gZNDOM8xUw",
    thumbnailUrl: "https://i.ytimg.com/vi/-gZNDOM8xUw/hqdefault.jpg",
  },
  {
    id: "ep-real-jinn-part-2-3",
    episodeNumber: "Special",
    title: "Real Jinn Stories (Parts 2 & 3): Terrifying Encounters We Still Can't Explain",
    guest: "Khubaib Shahid & Witnesses",
    guestRole: "Field Researchers & Eyewitnesses",
    category: "Supernatural & Spiritual",
    duration: "1h 24m",
    date: "October 2026",
    badge: "👀 Viral Sensation",
    description:
      "Following the overwhelming response to Episode 12, Dai Ali Daniyal reconvenes to review disturbing audio tapes, verified witness testimonials, and metaphysical occurrences across ancient properties in Sindh and Punjab.",
    highlights: [
      "Unreleased audio and witness recordings from field investigations.",
      "Why certain architectural layouts attract paranormal disturbances.",
      "Debunking viral internet hoaxes vs. genuine metaphysical anomalies.",
      "The psychological impact on families enduring chronic fear.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=7NVESVTs2i8",
    videoId: "7NVESVTs2i8",
    thumbnailUrl: "https://i.ytimg.com/vi/7NVESVTs2i8/hqdefault.jpg",
  },
  {
    id: "ep-berlin-marathon-pakistan",
    episodeNumber: 7,
    title: "He Ran the Berlin Marathon for Pakistan: The 42.195km Endurance Mindset",
    guest: "Farhan Tariq",
    guestRole: "Endurance Athlete & Marathon Finisher",
    category: "Human Triumph & Sports",
    duration: "58m",
    date: "September 2026",
    badge: "🏆 Inspiring",
    description:
      "How an ordinary Pakistani amateur runner pushed past physical collapse to finish the legendary Berlin Marathon carrying the national green flag. An intense discussion on mental resilience, training in Karachi heat, and fueling athletic dreams.",
    highlights: [
      "The brutal 16-week training cycle: running 80km+ weekly in 38°C humidity.",
      "The 'Wall' at Kilometer 32: Overcoming physical and cognitive exhaustion.",
      "How endurance running completely re-engineers work ethic and discipline.",
      "Building a grassroots marathon culture for Pakistani youth.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=MwDdlM441x0",
    videoId: "MwDdlM441x0",
    thumbnailUrl: "https://i.ytimg.com/vi/MwDdlM441x0/hqdefault.jpg",
  },
  {
    id: "ep-karachi-food-honest-ranking",
    episodeNumber: 9,
    title: "What's Really Worth Eating in Karachi? A Food Reviewer's Brutally Honest Ranking",
    guest: "Bilal 'Bites' Hassan",
    guestRole: "Karachi Food Critic & Cultural Explorer",
    category: "Food & Culture",
    duration: "1h 05m",
    date: "August 2026",
    badge: "🍔 Cultural Hit",
    description:
      "Zero PR spin, zero sponsored praise. A candid, controversial ranking of Karachi's legendary food spots — from Burns Road Nihari and Waheed's Fry Kabab to overrated DHA cafes and the city's midnight biryani hierarchy.",
    highlights: [
      "The undeniable champions of Burns Road vs. Liaquatabad street food.",
      "Why 90% of aesthetic cafes in Clifton serve subpar food.",
      "The economics of high-end dining versus old-city dhaba mastery.",
      "How Karachi food culture unites people across all socioeconomic lines.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=EdEG7bNIuno",
    videoId: "EdEG7bNIuno",
    thumbnailUrl: "https://i.ytimg.com/vi/EdEG7bNIuno/hqdefault.jpg",
  },
  {
    id: "ep-architecture-of-virality",
    episodeNumber: 5,
    title: "The Architecture of Virality: Why Content Spreads & The Future of Media in Pakistan",
    guest: "Armash Ashraf & Dai Ali Daniyal",
    guestRole: "Founding Partners, Viral Marketing Solution",
    category: "Media & Business",
    duration: "1h 12m",
    date: "July 2026",
    badge: "💡 Masterclass",
    description:
      "Host Dai Ali Daniyal sits down with COO Armash Ashraf to break down the scientific algorithms behind viral short-form and long-form video: how audience psychology is shifting in Pakistan and what brands must build to survive.",
    highlights: [
      "Why conventional advertising fails with Pakistani Gen-Z and Millennials.",
      "The rise of long-form podcasts as the ultimate trust-building engine.",
      "How independent creators are outcompeting traditional 24/7 TV news channels.",
      "The blueprint for building a media brand that compounds over decades.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=jDbBD8OvlD4",
    videoId: "jDbBD8OvlD4",
    thumbnailUrl: "https://i.ytimg.com/vi/jDbBD8OvlD4/hqdefault.jpg",
  },
];

