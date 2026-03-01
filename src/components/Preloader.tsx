'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          setOpacity(0);
          setTimeout(() => {
            setVisible(false);
            window.dispatchEvent(new Event('preloader-done'));
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={styles.preloader}
      style={{ opacity }}
    >
      <div className={styles['preloader-brand']}>
        <Image src="/images/Logo(B).svg" alt="UltraTechHub" width={120} height={120} className="object-contain rounded-xl" />
        UltraTechHub
      </div>

      <div className={styles['preloader-timer__wr']}>
        <div className={styles['text-16-400-cap']}>LOADING</div>
        <div className={styles['text-60-400-cap-timer']}>
          <span>{count}</span>%
        </div>
      </div>

      <div className={styles['progress-line']} style={{ width: `${count}%` }} />
    </div>
  );
}
