import { useState, useEffect } from 'react';

const BackgroundMusic = () => {
  const [audio] = useState(new Audio('/background-music.mp3')); // You'll need to add your music file
  const [isPlaying, setIsPlaying] = useState(true); // Set default to true

  useEffect(() => {
    audio.loop = true;
    
    // Try to play automatically
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
          setIsPlaying(true);
        })
        .catch(error => {
          // Autoplay was prevented
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio playback failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-control">
      <button 
        onClick={togglePlay}
        className="music-button"
      >
        {isPlaying ? '🔇 Mute' : '🔊 Play Music'}
      </button>
      <div className="music-status">
        {!isPlaying && <div className="music-hint">Click to play background music</div>}
      </div>
    </div>
  );
};

export default BackgroundMusic; 