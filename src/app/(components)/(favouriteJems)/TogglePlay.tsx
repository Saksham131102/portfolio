import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

interface TogglePlayProps {
  isPlaying: boolean;
  handleToggle: () => void;
  audioRef: (instance: HTMLAudioElement) => void;
  audioSrc: string;
}

const TogglePlay = ({
  isPlaying,
  handleToggle,
  audioRef,
  audioSrc,
}: TogglePlayProps) => {
  return (
    <div>
      <Button onClick={handleToggle} className="bg-white rounded-full p-[10px]">
        {isPlaying ? (
          <FaPause className="text-xl text-black" />
        ) : (
          <FaPlay className="text-xl pl-1 text-black" />
        )}
      </Button>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default TogglePlay;
