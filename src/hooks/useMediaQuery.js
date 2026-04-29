import { useEffect, useState } from "react";

function getMatches(query) {
  if (typeof window === "undefined") return false;
  if (typeof window.matchMedia !== "function") return false;

  return window.matchMedia(query).matches;
}

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.matchMedia !== "function") return;

    const media = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event?.matches ?? media.matches);
    };

    setMatches(media.matches);

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange);

      return () => {
        media.removeEventListener("change", handleChange);
      };
    }

    media.addListener(handleChange);

    return () => {
      media.removeListener(handleChange);
    };
  }, [query]);

  return matches;
}