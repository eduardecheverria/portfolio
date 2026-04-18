import { useEffect, useState } from 'react';

function format(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function useClock() {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(format(new Date()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
