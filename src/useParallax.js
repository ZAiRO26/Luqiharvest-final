import { useEffect, useRef, useState } from "react";

// speed: 0.2 = subtle, 0.5 = strong
export default function useParallax(speed = 0.2) {
  const ref = useRef();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only parallax when in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const percent = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset(percent * 100 * speed);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return [ref, offset];
} 