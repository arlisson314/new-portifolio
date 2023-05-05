import { useState, useEffect } from 'react';

export default function useSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function handleResize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize > 800;
}
