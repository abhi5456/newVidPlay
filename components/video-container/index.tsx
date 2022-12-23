import { useRef, useEffect, useState } from "react";
import { useSwiperSlide } from 'swiper/react';
import "video.js/dist/video-js.css";
import styles from "./video-container.module.css";

// import videojs from "video.js";
// import useElementOnScreen from "../../hooks/element-on-screen.component";
// import { useVideoJS } from "react-hook-videojs";
// import { getNextVideo } from "../../core/api/video-api";


export type VideoContainerProps = {
  videoUrl: any;
};

const VideoContainer = ({ videoUrl }: VideoContainerProps) => {
  const [videoClassName, setVideoClassName] = useState(styles.videoNormal)
  const [muted, setMuted] = useState(true);
  const swiperSlide = useSwiperSlide();

  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current; 
    if (video && swiperSlide.isActive) {
      video.addEventListener(
        "loadedmetadata",
        function (e) {
          if (this.videoHeight > this.videoWidth) {
            setVideoClassName(styles.videoRotate)
          } 
        },
        false
      );
    }
    video.load()
  }, [videoUrl, swiperSlide.isActive])
  
  
  const unmute = () => {
    setMuted(current => !current);
  }
  console.log(videoUrl.url, swiperSlide.isActive)

  return (
    <div className={styles.videoContainer} onClick={unmute}>
      {videoUrl && (
        <video 
          loop 
          autoPlay={swiperSlide.isActive ? true : false}
          preload={swiperSlide.isActive ? 'auto' : 'none'}
          muted={muted}
          ref={videoRef}
          className={videoClassName}>
          <source src={encodeURI(videoUrl.url)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoContainer;

// const VideoContainer = (props: VideoContainerProps) => {
//   const { videoUrl } = props;
//   const [videoRotate, setVideoRotate] = useState(false);
//   const [videoClassName, setVideoClassName] = useState(styles.videoNormal);
//   const { Video, player, ready } = useVideoJS(
//     { sources: [{ src: videoUrl.url, type: "video/mp4" }], responsive: true,  }, videoClassName
//   );

//   useEffect(() => {
//     console.log("useffect", ready);
//     if (ready) {
//       const playerId = player.getAttribute("id");
//       const videoId = `${playerId}_html5_api`;
//       console.log(videoId);
//       const video = document.getElementById(videoId) as HTMLVideoElement | null;
//       if (video) {
//         video.addEventListener(
//           "loadedmetadata",
//           function (e) {
//             console.log(this.videoHeight, this.videoWidth);
//             if (this.videoHeight > this.videoWidth) {
//               setVideoRotate(true);
//               player.setAttribute('class',styles.videoRotate)
//             } 
//           },
//           false
//         );
//       }
//     }
//   }, [ready, player]);

  
//   return (
//     <div className={styles.videoContainer}>
//       <Video autoPlay={true} loop={true} muted={true} />
//     </div>
//   );
// };

// export default VideoContainer;

// const VideoContainer = (props: VideoContainerProps) => {
//   const videoRef = useRef<HTMLDivElement>(null);
//   const playerRef = useRef(null);
//   const { video, onReady } = props;

//   const options = {
//     autoplay: true,
//     loop: true,
//     mute: true,
//     // preload: 'auto',
//     // controls: true,
//     // responsive: true,
//     fluid: true,
//     // fill: true,
//     // fullscreen: {
//       // enterOnRotate: true,
//     // alwaysInLandscapeMode: true,
//       // iOS: true,
//     // },
//     // fullscreen: true,
//     sources: [{
//       src: video.url,
//       type: 'video/mp4'
//     }]
//   }

//   useEffect(() => {
//     // Make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
//       const videoElement = document.createElement("video-js");

//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current?.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("player is ready");
//         onReady && onReady(player);
//       }));
//       player.landscapeFullscreen({
//         fullscreen: {
//           enterOnRotate: true,
//           exitOnRotate: true,
//           alwaysInLandscapeMode: true,
//           iOS: true
//         }
//       })

//       // You could update an existing player in the `else` block here
//       // on prop change, for example:
//     } else {
//       const player = playerRef.current;
//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//       player.landscapeFullscreen({
//         fullscreen: {
//           enterOnRotate: true,
//           exitOnRotate: true,
//           alwaysInLandscapeMode: true,
//           iOS: true
//         }
//       })
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [options, videoRef]);

//   useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   console.log("here is the video");
//   return (
//     <div className="video-container">
//       <div data-vjs-player>
//         <div ref={videoRef} />
//       </div>
//     </div>
//   );
// };

// export default VideoContainer;
