import React, { useEffect } from 'react';
import styles from './Ball.module.scss';

interface BallProps {
  backgroundColor: string;
  ballColor: string;
  isBouncing: boolean;
}

const Ball: React.FC<BallProps> = ({ backgroundColor, ballColor, isBouncing }) => {
  return (
    <div 
      className={styles.background}
      style={{ backgroundColor: backgroundColor }}>
      <div 
        className={styles.ball}
        style={{ 
          backgroundColor: ballColor,
          animationPlayState: isBouncing ? 'running' : 'paused'
           }}></div>
      <div 
        className={styles.shadow}
        style={{ 
          background: `radial-gradient(50% 50%, #000 0%, ${backgroundColor} 100%)`,
          animationPlayState: isBouncing ? 'running' : 'paused'
           }}></div>
    </div>
  );
};

export default Ball;