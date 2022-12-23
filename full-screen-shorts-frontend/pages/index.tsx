import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import VideoContainer from '../components/video-container/video-container.component'
import { getNextVideo } from '../core/api/video-api'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [video, setVideo] = useState({ url: '', id: 0})

  useEffect(() => {
    setVideo(getNextVideo(0))
  }, [])
  
  const onClick = (event: any) => {
    const nextVideo = getNextVideo(video.id);
    console.log('onClick', nextVideo)
    setVideo(nextVideo)
  }

  return (
    <div className={styles.container}>
      <div onClick={onClick}>
        <VideoContainer video={video}/>
      </div>
    </div>
  )
}
