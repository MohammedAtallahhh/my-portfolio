import { useState } from "react";
import { useEffect } from "react";

function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // getting the target element from the ref
    const elem = ref.current;

    const callback = ([entry]) => {
      if (entry.intersectionRatio > (options?.threshold || 0)) {
        observer.unobserve(elem);
      }

      setIsIntersecting(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(elem);

    // Clean up
    return () => {
      observer.unobserve(elem);
    };
  }, []);

  return isIntersecting;
}

export default useIntersectionObserver;
