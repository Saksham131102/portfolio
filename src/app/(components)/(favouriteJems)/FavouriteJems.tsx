"use client";
import { FaSpotify } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import tracks from "./data";
import { useRef, useState } from "react";

// Animated equalizer bars shown when a track is playing
function EqualizerBars() {
  return (
    <span
      className="flex items-end gap-[2px] h-4"
      aria-label="Playing"
      title="Now playing"
    >
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-[#1DB954] animate-equalizer"
          style={{
            animationDelay: `${i * 0.12}s`,
            animationDuration: `${0.6 + i * 0.1}s`,
          }}
        />
      ))}
    </span>
  );
}

const FavouriteJems = () => {
  const [playing, setPlaying] = useState<boolean[]>(
    Array(tracks.length).fill(false)
  );
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(
    tracks.map(() => null)
  );

  const handleToggle = (index: number) => {
    const newPlayingState = playing.map((play, i) =>
      i === index ? !play : false
    );

    // Pause all other audios and reset them
    audioRefs.current.forEach((audioRef, i) => {
      if (i !== index && audioRef) {
        audioRef.pause();
        audioRef.currentTime = 0;
      }
    });

    // Toggle play/pause for the selected audio
    const audio = audioRefs.current[index];
    if (audio) {
      if (newPlayingState[index]) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    setPlaying(newPlayingState);
  };

  return (
    <div className="pt-16">
      {/* Section label */}
      <div className="text-sm text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono mb-4">
        favourite jems
      </div>

      {/* Track list card */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-transparent">
        {tracks.map((track, index) => {
          const isPlaying = playing[index];
          return (
            <div key={index}>
              {/* Divider between rows */}
              {index !== 0 && (
                <div className="border-t border-gray-100 dark:border-gray-800 mx-4" />
              )}
              <div
                className={`flex items-center justify-between gap-3 px-4 py-3 transition-colors duration-200 group ${
                  isPlaying
                    ? "bg-gray-50 dark:bg-white/[0.04]"
                    : "hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                }`}
              >
                {/* Left: album art + track info */}
                <div className="flex items-center gap-3 min-w-0">
                  {/* Album art with playing overlay */}
                  <div className="relative shrink-0">
                    <Avatar className="w-11 h-11 rounded-lg">
                      <AvatarImage src={track.cover} className="object-cover" />
                      <AvatarFallback className="rounded-lg text-xs">
                        {track.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {isPlaying && (
                      <div className="absolute inset-0 rounded-lg bg-black/40 flex items-center justify-center">
                        <EqualizerBars />
                      </div>
                    )}
                  </div>

                  {/* Track info */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex gap-2">
                      <span
                        className={`text-sm font-medium truncate ${
                          isPlaying
                            ? "text-[#1DB954]"
                            : "text-gray-900 dark:text-[#ededed]"
                        }`}
                      >
                        {track.name}
                      </span>
                      {isPlaying && (
                        <span className="hidden sm:flex">
                          <EqualizerBars />
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#8e8e92] dark:text-[#8e8e92] truncate">
                      {track.artist}
                    </span>
                  </div>
                </div>

                {/* Right: controls */}
                <div className="flex items-center gap-2.5 shrink-0">
                  {/* Spotify open link */}
                  <a
                    href={track.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open on Spotify"
                    className="text-[#8e8e92] hover:text-[#1DB954] transition-colors duration-200"
                  >
                    <FaSpotify className="text-lg" />
                  </a>

                  {/* Play / Pause button */}
                  <button
                    onClick={() => handleToggle(index)}
                    title={isPlaying ? "Pause" : "Play"}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isPlaying
                        ? "bg-[#1DB954] text-white shadow-md shadow-[#1DB954]/30"
                        : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-[#ededed] hover:bg-gray-200 dark:hover:bg-white/20"
                    }`}
                  >
                    {isPlaying ? (
                      <FaPause className="text-[10px]" />
                    ) : (
                      <FaPlay className="text-[10px] pl-[1px]" />
                    )}
                  </button>
                </div>

                {/* Hidden audio element */}
                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el;
                  }}
                  src={track.audio}
                  onEnded={() => {
                    setPlaying((prev) =>
                      prev.map((_, i) => (i === index ? false : _))
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteJems;
