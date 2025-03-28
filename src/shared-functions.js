import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
  
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
  
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => window.removeEventListener("change", listener);
    }, [matches, query]);
  
    return matches;
  }

  export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }