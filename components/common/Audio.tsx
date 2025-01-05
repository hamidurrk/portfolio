"use client"; 

import React, { useState, useRef } from "react"; 
import { isSmallScreen } from "pages";
import styles from "./Audio.module.scss";

const Audio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        if (!audioRef.current.src) {
          audioRef.current.src = "audio/something.mp3";
          audioRef.current.preload = "none";
          audioRef.current.autoplay = false;
          audioRef.current.volume = 0.1;
          audioRef.current.loop = true;
          audioRef.current.muted = false;
        }
        audioRef.current.load();
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`${styles.audioContainer}`}
      style={{ backgroundColor: isSmallScreen() ? "transparent" : "#573217" }}>
      <ul className={`${styles.loaderList}`}>
        <li>
          <div 
          className={`link ${styles.loader} ${styles.vinyl}`}
          style={{ 
            animationPlayState: isPlaying ? 'running' : 'paused'
             }}
          onClick={handlePlayPause} 
          ></div>
        <audio ref={audioRef} />
        </li>
      </ul>

    </div>
  );
};

export default Audio;