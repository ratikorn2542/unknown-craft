'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const themes = [
    { value: 'light', emoji: '☀️', label: 'Light Mode' },
    { value: 'dark', emoji: '🌙', label: 'Dark Mode' },
    { value: 'colorful', emoji: '✨', label: 'Colorful Mode' },
  ];

  const currentIndex = themes.findIndex((t) => t.value === theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <button
      onClick={() => setTheme(nextTheme.value)}
      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-110"
      aria-label={`Switch to ${nextTheme.label}`}
    >
      <span className="text-lg">{nextTheme.emoji}</span>
    </button>
  );
}
