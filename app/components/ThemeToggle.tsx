'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-ink-secondary hover:bg-bg-raised hover:text-ink-primary transition-all duration-150 w-full"
    >
      {isDark ? (
        <>
          <Sun size={15} strokeWidth={1.75} />
          <span>Light mode</span>
        </>
      ) : (
        <>
          <Moon size={15} strokeWidth={1.75} />
          <span>Dark mode</span>
        </>
      )}
    </button>
  );
}
