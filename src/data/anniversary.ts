/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE.
 *  This is the single place to change photos, videos, dates,
 *  captions, messages and music for the whole website.
 *
 *  Photos:  drop files into  src/assets/  then import them at the
 *           top of this file and use the imported name.
 *  Videos:  drop .mp4 files into  public/videos/  and reference
 *           them as "/videos/my-video.mp4", or paste any URL.
 *  Music:   drop an audio file into  public/audio/song.mp3
 * ─────────────────────────────────────────────────────────────
 */

import placeholder1 from "@/assets/placeholder-1.jpg";
import placeholder2 from "@/assets/placeholder-2.jpg";
import placeholder3 from "@/assets/placeholder-3.jpg";

export const PLACEHOLDER_PHOTOS = [placeholder1, placeholder2, placeholder3];

export const site = {
  partnerName: "Nelo",
  anniversaryDate: "12 September 2026",
  dateStamp: "12 • 09 • 2026",
  years: 5,
  /** Replace with your own track: public/audio/song.mp3 */
  musicSrc: "/audio/song.mp3",
  musicTitle: "Our song (replace me)",
};

export const hero = {
  kicker: "Five years.",
  headline: "And somehow, it's still you.",
  date: site.anniversaryDate,
  greeting: "Happy 5th Anniversary, Nelo. ❤️",
  cta: "Start Our Story",
};

export type TimelineYear = {
  label: string;
  title: string;
  /** e.g. "2021 — 2022" — edit freely */
  period: string;
  message: string;
  moments: string[];
  /** Replace with your own imported photos */
  photos: string[];
  /** Optional: "/videos/year-1.mp4" or a URL */
  video?: string;
};

export const timeline: TimelineYear[] = [
  {
    label: "Year 1",
    title: "The Beginning",
    period: "2021 — 2022",
    message:
      "PLACEHOLDER: Write about the beginning here. The first conversations, the first time you knew this was going to matter.",
    moments: ["Our first ____", "The night we ____", "The day I realised ____"],
    photos: [placeholder1, placeholder3],
  },
  {
    label: "Year 2",
    title: "Becoming Us",
    period: "2022 — 2023",
    message:
      "PLACEHOLDER: The year we stopped being two people figuring it out and started being an us.",
    moments: ["The trip to ____", "Our first ____ together", "That inside joke about ____"],
    photos: [placeholder2, placeholder1],
  },
  {
    label: "Year 3",
    title: "Growing Together",
    period: "2023 — 2024",
    message: "PLACEHOLDER: The year we grew — separately and together. Write about it here.",
    moments: ["When you ____", "The hard week we got through", "____"],
    photos: [placeholder3, placeholder2],
  },
  {
    label: "Year 4",
    title: "Everything In Between",
    period: "2024 — 2025",
    message:
      "PLACEHOLDER: The ordinary days. The ones nobody photographs but I remember anyway.",
    moments: ["Ordinary ____", "The ____ we still laugh about", "____"],
    photos: [placeholder1, placeholder2],
  },
  {
    label: "Year 5",
    title: "Still Choosing You",
    period: "2025 — 2026",
    message: "PLACEHOLDER: Five years in, and here's what I know now that I didn't then.",
    moments: ["____", "____", "And now this."],
    photos: [placeholder3, placeholder1],
    // video: "/videos/year-5.mp4",
  },
];

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  /** handwritten-style caption on the polaroid */
  hand?: string;
};

export const gallery: Photo[] = [
  {
    src: placeholder1,
    alt: "Placeholder photo of soft pink roses",
    caption: "PLACEHOLDER: That day I realised how much of my life I wanted you to be part of.",
    date: "Add a date",
    hand: "us, always",
  },
  {
    src: placeholder2,
    alt: "Placeholder photo of two ice creams at sunset",
    caption: "PLACEHOLDER: I'd still share my ice cream with you. Probably.",
    date: "Add a date",
    hand: "ice cream o'clock",
  },
  {
    src: placeholder3,
    alt: "Placeholder photo of a field of pink wildflowers",
    caption: "PLACEHOLDER: Write the memory that belongs to this photo.",
    date: "Add a date",
    hand: "this one's my favourite",
  },
  {
    src: placeholder2,
    alt: "Placeholder photo",
    caption: "PLACEHOLDER: Another memory goes here.",
    date: "Add a date",
    hand: "still laughing",
  },
  {
    src: placeholder3,
    alt: "Placeholder photo",
    caption: "PLACEHOLDER: And one more.",
    date: "Add a date",
  },
  {
    src: placeholder1,
    alt: "Placeholder photo",
    caption: "PLACEHOLDER: Swap all of these for our real photos.",
    date: "Add a date",
    hand: "to be continued",
  },
];

export type VideoMemory = {
  title: string;
  caption: string;
  /** "/videos/clip.mp4" or any direct video URL */
  src: string;
  /** optional poster image */
  poster?: string;
};

export const videos: VideoMemory[] = [
  {
    title: "PLACEHOLDER: The one where we ____",
    caption: "Drop your clip in public/videos/ and point src at it.",
    src: "/videos/memory-1.mp4",
    poster: placeholder1,
  },
  {
    title: "PLACEHOLDER: That night in ____",
    caption: "Replace this caption with what actually happened.",
    src: "/videos/memory-2.mp4",
    poster: placeholder2,
  },
  {
    title: "PLACEHOLDER: Us being ridiculous",
    caption: "There is definitely footage of this somewhere.",
    src: "/videos/memory-3.mp4",
    poster: placeholder3,
  },
];

export const loveNotes = [
  "You're still my favourite person.",
  "I'd choose you again.",
  "Five years and you still make my heart stupid.",
  "You're ridiculously beautiful.",
  "Thank you for being you.",
  "I love the way you care about things.",
  "Your ambition makes me proud.",
  "You have no idea how much you mean to me.",
  "Also, you're very cute. This is an objective fact.",
  "I still get nervous before I see you. Five years.",
  "You make ordinary days feel like something.",
];

export const qualities = [
  {
    title: "Your kindness",
    body: "You care deeply about people, sometimes even when you probably shouldn't have to.",
  },
  { title: "Your passion", body: "When you care about something, you really CARE." },
  {
    title: "Your ambition",
    body: "I love watching you dream about the future and then actually try to build it.",
  },
  { title: "Your heart", body: "You have a softness in you that I hope life never takes away." },
  {
    title: "Your strength",
    body: "You've handled more than you probably give yourself credit for.",
  },
  { title: "Your weirdness", body: "Because obviously I have to mention this." },
  { title: "Your smile", body: "Still unfair. Still distracting." },
];

export const honest = {
  heading: "And because I love you, I need to be honest.",
  paragraphs: [
    "I know our story hasn't been perfect.",
    "I've made mistakes.",
    "There have been moments where I didn't show you the love, patience, understanding or care that you deserved.",
    "I know I've hurt you in ways I wish I could take back.",
    "I can't rewrite those moments.",
    "And I don't want to pretend they didn't happen just because today is supposed to be romantic.",
    "What I can do is acknowledge them.",
    "Learn from them.",
    "And keep trying to become better.",
    "Not because I'm trying to become perfect.",
    "But because you deserve a partner who keeps choosing growth.",
    "You have loved me through versions of myself that weren't always easy to love.",
    "And I don't take that for granted.",
    "I love you.",
    "And I want the person standing beside you for the next five years to be a better man than the one who stood beside you for the first five.",
  ],
  closing: "I'm still learning how to love you better. But I'm grateful I get to.",
};

export const relive = {
  heading: "If I could go back...",
  paragraphs: [
    "I wouldn't change every mistake.",
    "Some of them taught me things I needed to learn.",
    "But I would relive the laughter.",
    "The stupid conversations.",
    "The random adventures.",
    "The quiet moments.",
    "The days where absolutely nothing happened but I was still happy because you were there.",
    "I'd relive meeting you.",
    "I'd relive falling for you.",
    "And I'd choose you again.",
  ],
  cta: "I'd choose you again",
  floating: [
    "the laughter",
    "stupid conversations",
    "random adventures",
    "quiet moments",
    "meeting you",
    "falling for you",
    "nothing days",
    "your voice notes",
  ],
};

export const promises = [
  { no: "01", title: "Keep Choosing You", body: "Even when things aren't easy." },
  { no: "02", title: "Keep Growing", body: "Because loving you means becoming better too." },
  { no: "03", title: "Keep Laughing", body: "Especially at things that absolutely aren't funny." },
  { no: "04", title: "Keep Dreaming", body: "I want to see everything you become." },
  { no: "05", title: "Keep Building", body: "Not just memories. A life." },
];

export const future = {
  heading: "Our story isn't finished.",
  paragraphs: [
    "We've already lived five years of this story.",
    "There are still so many places we haven't been.",
    "Things we haven't tried.",
    "Memories we haven't made.",
    "Arguments we haven't had about what we're having for dinner.",
    "Ice creams we haven't shared.",
    "And an unreasonable number of llamas we haven't encountered.",
  ],
  closing: "So here's to the next chapter.",
};

export const finale = {
  lines: [
    "Nelo.",
    "Five years ago, I didn't know how much my life was about to change.",
    "Five years later...",
    "I still love you.",
    "Happy 5th Anniversary.",
    "I choose you.",
  ],
  dateStamp: site.dateStamp,
  cta: "One last thing...",
  hidden: [
    "Whatever happens in the years ahead, I hope you always know this:",
    "You have been one of the most important parts of my life.",
    "Thank you for every laugh, every conversation, every memory, every challenge, every lesson, every hug, every ridiculous moment and every ordinary day that became special simply because you were there.",
    "I love you, Nelo.",
    "Happy five years. ❤️",
  ],
};

export const easterEggs = {
  llama: "Even after five years, you're still my favourite llama-loving human.",
  llamaLetter: "A llama came all this way just to say: he's obsessed with you.",
  iceCream: "You found the ice cream. Obviously I knew you'd find it.",
  flower: "You made it bloom. Of course you did.",
  dontClick: { label: "Definitely don't click this.", reveal: "I told you not to." },
  finalCheese: { first: "Okay, I'm done being romantic now.", second: "Just kidding. I love you." },
};
