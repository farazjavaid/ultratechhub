'use client';

import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handler = () => setReady(true);
    window.addEventListener('preloader-done', handler);
    return () => window.removeEventListener('preloader-done', handler);
  }, []);

  if (!ready) return null;

  return (
    <Spline
      scene="https://prod.spline.design/XWD4iOvdsuyPITav/scene.splinecode"
      className="w-full h-full"
    />
  );
}
