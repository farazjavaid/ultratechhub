'use client';

import { useEffect, useState } from 'react';

const words = ['YOU', 'EVERYONE'];

export function TypewriterWord() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 80);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, wordIndex]);

  return (
    <span>
      <span className="text-white">
        {displayText}
      </span>
      <span className="text-green-400">.</span>
    </span>
  );
}
