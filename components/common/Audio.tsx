"use client"; // Enables client-side rendering for this component

import React, { useState, useRef, useEffect, createRef } from "react"; // Import React hooks
import Button, { ButtonTypes } from "../common/button";
import { PlayIcon, PauseIcon } from "lucide-react"; 
import AudioPlayer from 'react-h5-audio-player';
import { isSmallScreen } from "pages";
import styles from "./Audio.module.scss";

const Audio = () => {
  const audioRef = useRef<AudioPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.audio.current.src = "audio/something.mp3";
  //     audioRef.current.audio.current.autoplay = false;
  //     audioRef.current.audio.current.volume = 0.1;
  //     audioRef.current.audio.current.loop = true;
  //     audioRef.current.audio.current.muted = false;
  //     audioRef.current.audio.current.preload = "none"; 
  //   }
  // }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audio.current.pause();
      } else {
        if (!audioRef.current.audio.current.src) {
          audioRef.current.audio.current.src = "audio/something.mp3";
          audioRef.current.audio.current.preload = "none";
          audioRef.current.audio.current.autoplay = false;
          audioRef.current.audio.current.volume = 0.1;
          audioRef.current.audio.current.loop = true;
          audioRef.current.audio.current.muted = false;
        }
        audioRef.current.audio.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`${styles.audioContainer}`}
      style={{ backgroundColor: isSmallScreen() ? "transparent" : "#573217" }}>
      <AudioPlayer
        ref={audioRef}
        src="audio/something.mp3"
        autoPlay={false}
        volume={0.5}
        style={{ display: 'none' }} 
      />

      <ul className={`${styles.loaderList}`}>
        <li>
          <div 
          className={`link ${styles.loader} ${styles.vinyl}`}
          style={{ 
            animationPlayState: isPlaying ? 'running' : 'paused'
             }}
          onClick={handlePlayPause} 
          ></div>
        </li>
      </ul>

    </div>
  );
};

export default Audio;