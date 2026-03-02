'use client';

import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

function isLowEndDevice(): boolean {
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return cores < 4 || memory < 4 || reducedMotion;
}

export default function SplineBackground() {
  const [ready, setReady] = useState(false);
  const [lowEnd, setLowEnd] = useState(false);

  useEffect(() => {
    setLowEnd(isLowEndDevice());
    const handler = () => setReady(true);
    window.addEventListener('preloader-done', handler);
    return () => window.removeEventListener('preloader-done', handler);
  }, []);

  if (!ready || lowEnd) return null;

  return (
    <Spline
      scene="https://prod.spline.design/XWD4iOvdsuyPITav/scene.splinecode"
      className="w-full h-full"
    />
  );
}
