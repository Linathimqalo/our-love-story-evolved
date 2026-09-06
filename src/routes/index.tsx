import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";

import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { Videos } from "@/components/sections/Videos";
import { Qualities } from "@/components/sections/Qualities";
import { Honest } from "@/components/sections/Honest";
import { Relive } from "@/components/sections/Relive";
import { Promises } from "@/components/sections/Promises";
import { Future } from "@/components/sections/Future";
import { Finale } from "@/components/sections/Finale";
import { LoveNotes } from "@/components/atmosphere/LoveNotes";
import { MusicPlayer } from "@/components/MusicPlayer";

const title = "Five Years. A Thousand Memories. And Still You. — For Nelo";
const description =
  "An interactive love letter for Nelo: five years of memories, promises, honesty and petals. Happy 5th anniversary, 12 September 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Index,
});

function Index() {
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    window.setTimeout(() => {
      document.getElementById("journey")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 900);
  };

  return (
    <main className="relative">
      <h1 className="sr-only">Five Years. A Thousand Memories. And Still You. For Nelo.</h1>

      <Hero onStart={start} />

      <AnimatePresence>
        {started ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Timeline />
            <Gallery />
            <Videos />
            <Qualities />
            <Honest />
            <Relive />
            <Promises />
            <Future />
            <Finale />

            <footer className="px-6 py-12 text-center">
              <p className="font-hand text-2xl text-primary">
                Made slowly, and only for you. ❤️
              </p>
            </footer>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <LoveNotes active={started} />
      <MusicPlayer />
    </main>
  );
}
