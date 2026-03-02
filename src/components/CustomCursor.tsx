'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number | null>(null);
  const ringSizeRef = useRef(40);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const DOT_HALF = 6; // 12px / 2

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX - DOT_HALF}px, ${e.clientY - DOT_HALF}px, 0)`;
      dot.style.opacity = '1';
      ringEl.style.opacity = '1';
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ringEl.style.opacity = '0';
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        ringEl.style.width = '60px';
        ringEl.style.height = '60px';
        ringSizeRef.current = 60;
      } else {
        ringEl.style.width = '40px';
        ringEl.style.height = '40px';
        ringSizeRef.current = 40;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.2;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.2;
      const half = ringSizeRef.current / 2;
      ringEl.style.transform = `translate3d(${ring.current.x - half}px, ${ring.current.y - half}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('pointerover', onPointerOver);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('pointerover', onPointerOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot — instant follow, replaces default cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          willChange: 'transform',
        }}
      />

      {/* Ring — smooth lerp tailing */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.6)',
          background: 'transparent',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'width 0.2s ease, height 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
