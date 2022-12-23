import { useRef, useEffect } from "react";
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';
import { VIDEO_LIST } from '../../core/api/video-api';
import VideoContainer from '../video-container';
// import videojs from "video.js";

const VideoSlider = () => {
  const slides = VIDEO_LIST;
  const playerRef = useRef(null);
  
  return (
    <Swiper 
      modules={[Virtual]} 
      slidesPerView={1} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((video, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <VideoContainer videoUrl={video} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default VideoSlider;