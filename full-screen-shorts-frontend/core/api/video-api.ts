export const VIDEO_LIST = [
  {
    url : '/videos/h2.mov',
    id : 0
  },
  {
    url : '/videos/h.mov',
    id : 1
  },
  {
    url : '/videos/h3.mov',
    id : 2
  },
  {
    url : '/videos/Harmony launches on Binance.mov',
    id : 3
  },
  {
    url : '/videos/Harmony launches.mov',
    id : 4
  },
  {
    url : '/videos/lisbon.mov',
    id : 5
  },
]

export const getNextVideo = (id: number) => {
  if (VIDEO_LIST.length > id+1) {
    return VIDEO_LIST[id+1]
  } 
  return VIDEO_LIST[0]
}

