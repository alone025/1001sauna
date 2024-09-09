import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setShowPlayIcon(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  const handleProgressClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (videoRef.current) {
      const progressBar = event.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = event.clientX - rect.left;
      const clickPercentage = clickPosition / rect.width;
      videoRef.current.currentTime =
        clickPercentage * videoRef.current.duration;
      setProgress(clickPercentage * 100);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowPlayIcon(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnd);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      setShowPlayIcon(false);
    }
  }, [isPlaying]);

  return (
    <div className="relative max-w-[712px] sm:rounded-2xl overflow-hidden mx-auto">
      <div className="relative">
        <video
          ref={videoRef}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          onTimeUpdate={handleProgress}
          className="w-full sm:rounded-lg"
          onClick={handleVideoClick}
        ></video>
        {showPlayIcon && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            onClick={togglePlayPause}
          >
            {/* <FaPlay className="text-white text-6xl" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M40.0003 73.3333C58.4098 73.3333 73.3337 58.4095 73.3337 40C73.3337 21.5905 58.4098 6.66663 40.0003 6.66663C21.5908 6.66663 6.66699 21.5905 6.66699 40C6.66699 58.4095 21.5908 73.3333 40.0003 73.3333Z"
                fill="#F44747"
              />
              <path
                d="M33.333 26.6667L53.333 40.0001L33.333 53.3334V26.6667Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      {!showPlayIcon && (
        <div className="flex absolute z-10 bottom-3 px-3 w-full justify-between items-center mt-4">
          <button
            onClick={toggleMute}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-500 transition"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <div
            className="flex-grow h-2 bg-gray-300 rounded-full mx-4 overflow-hidden cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button
            onClick={isPlaying ? handleStop : togglePlayPause}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-red-500 transition"
          >
            {isPlaying ? <FaPause />: <FaPlay />}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
