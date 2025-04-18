import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio('/background-music.mp3'));
  const audio = audioRef.current;

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5; // Set initial volume to 50%

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audio.muted = isMuted;
  }, [isMuted]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div className="music-control-container">
      <button
        onClick={toggleMusic}
        className="music-control"
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button
        onClick={toggleMute}
        className="volume-control"
        title={isMuted ? 'Unmute' : 'Mute'}
        aria-label={isMuted ? 'Unmute Music' : 'Mute Music'}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default BackgroundMusic; 