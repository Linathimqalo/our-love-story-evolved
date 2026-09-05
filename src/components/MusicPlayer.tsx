import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { site } from "@/data/anniversary";

/**
 * Optional, never autoplaying. She presses play; browsers stay happy.
 * Replace the track at public/audio/song.mp3 (see src/data/anniversary.ts).
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [open, setOpen] = useState(false);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      setMissing(true);
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6">
      <audio
        ref={audioRef}
        src={site.musicSrc}
        loop
        preload="none"
        onError={() => setMissing(true)}
      />
      <motion.div layout className="glass flex items-center gap-2 rounded-full p-2 pr-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Music settings"
          aria-expanded={open}
          className="grid size-9 place-items-center rounded-full text-primary transition-colors hover:bg-secondary"
        >
          <Music className="size-4" />
        </button>

        {open ? (
          <div className="flex items-center gap-2 pl-1">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute" : "Mute"}
              className="grid size-9 place-items-center rounded-full text-primary transition-colors hover:bg-secondary"
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              aria-label="Volume"
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
            />
          </div>
        ) : null}
      </motion.div>

      {open ? (
        <p className="mt-2 max-w-[15rem] px-2 text-xs text-muted-foreground">
          {missing ? "Add your song at public/audio/song.mp3" : site.musicTitle}
        </p>
      ) : null}
    </div>
  );
}
