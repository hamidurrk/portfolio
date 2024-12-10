"use client"; // Enables client-side rendering for this component

import React, { useState, useRef, useEffect, createRef } from "react"; // Import React hooks
import Button, { ButtonTypes } from "../common/button";
import { PlayIcon, PauseIcon } from "lucide-react"; 
import AudioPlayer from 'react-h5-audio-player';
import styles from "./Audio.module.scss";

const Audio = () => {
  const audioRef = useRef<AudioPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.audio.current.src = "audio/something.mp3";
      audioRef.current.audio.current.autoplay = true;
      audioRef.current.audio.current.volume = 0.1;
      audioRef.current.audio.current.loop = true;
      audioRef.current.audio.current.muted = false;
      audioRef.current.audio.current.preload = "auto";
      audioRef.current.audio.current.play();
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audio.current.pause();
      } else {
        audioRef.current.audio.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`${styles.audioContainer}`}>
      <AudioPlayer
        ref={audioRef}
        src="audio/something.mp3"
        autoPlay={true}
        volume={0.5}
        style={{ display: 'none' }} 
      />
      <div 
        onClick={handlePlayPause} 
        className={`link ${styles.playButton}`}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>

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