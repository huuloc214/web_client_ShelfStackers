import { useState, useEffect } from "react";

export default function useBannerSlider(length, interval = 4000) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [length, interval]);

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % length);
  };

  return { current, prevSlide, nextSlide };
}
