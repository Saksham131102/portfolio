"use client";
import { FaSpotify } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TogglePlay from "./TogglePlay";
import tracks from "./data";
import { useRef, useState } from "react";

const FavouriteJems = () => {
  const [playing, setPlaying] = useState<boolean[]>(
    Array(tracks.length).fill(false)
  );
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(tracks.map(() => null));
  const handleToggle = (index: number) => {
    const newPlayingState = playing.map((play, i) =>
      i === index ? !play : play
    );

    // Pause all other audios
    audioRefs.current.forEach((audioRef, i) => {
      if (i !== index && audioRef) {
        audioRef.pause();
        newPlayingState[i] = false;
        audioRef.currentTime = 0;
      }
    });

    // Toggle play/pause for the selected audio
    if (audioRefs.current[index]) {
      if (newPlayingState[index]) {
        audioRefs.current[index]?.play();
      } else {
        audioRefs.current[index]?.pause();
      }
    }

    setPlaying(newPlayingState);
  };
  return (
    <div className="text-[#B3B3B3] dark:text-[#ededed] text-sm">
      <div className="font-ibm-plex-mono">favourite jems</div>
      {tracks.map((track, index) => (
        <div
          key={index}
          className="flex justify-between mt-4 bg-[#292929] dark:bg-transparent dark:border dark:border-gray-800 rounded-xl"
        >
          <div className="flex m-2 gap-2">
            <Avatar className="w-16 h-16 m-auto rounded-lg">
              <AvatarImage src={track.cover} />
              <AvatarFallback>Profile Image</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <div className="text-white text-base">{track.name}</div>
              <div className="text-[#8e8e92]">{track.artist}</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <a
              href={track.link}
              className="flex justify-end m-1 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify className="text-xl text-white" />
            </a>
            <div className="flex justify-end m-2">
              <TogglePlay
                isPlaying={playing[index]}
                handleToggle={() => handleToggle(index)}
                audioRef={(el: HTMLAudioElement) =>
                  (audioRefs.current[index] = el)
                }
                audioSrc={track.audio}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouriteJems;
