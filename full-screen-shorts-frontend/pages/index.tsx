import React, { useState, useEffect } from 'react';
import VideoSlider from '../components/video-slider';
// import { getNextVideo } from '../core/api/video-api'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [video, setVideo] = useState({ url: '', id: 0})

  // useEffect(() => {
  //   setVideo(getNextVideo(0))
  // }, [])
  
  return (
    <div className={styles.container}>
      <VideoSlider />
    </div>
  )
}
