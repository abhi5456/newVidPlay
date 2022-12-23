import { useEffect, useRef, useState } from "react"

const useElementOnScreen = (options: any) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const callbackFunction = (entries: any) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(()=>{
    const current = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if(current) {
        observer.unobserve(current);
      }
    } 
  },[containerRef, options])

  return [containerRef, isVisible]
}

export default useElementOnScreen;