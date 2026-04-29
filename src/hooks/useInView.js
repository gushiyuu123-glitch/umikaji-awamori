import { useEffect, useRef, useState } from "react";

function useInView({
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    if (typeof window === "undefined") return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        if (visible) {
          setIsInView(true);

          if (once) {
            observer.unobserve(target);
          }

          return;
        }

        if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}

export default useInView;