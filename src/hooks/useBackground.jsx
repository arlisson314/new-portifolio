import { useEffect, useState } from 'react';

export default function useBackground() {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    function geradorDeCores() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);

      const color = `rgb(${r}, ${g}, ${b})`;
      setBgColor(color);
    }

    const handleBg = setInterval(geradorDeCores, 2000);

    return () => {
      clearInterval(handleBg);
    };
  }, []);

  return bgColor;
}
