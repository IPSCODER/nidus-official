'use client';

import { useEffect } from 'react';

const ThemeToggle = () => {

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}, []);

const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};


  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-border bg-background px-3 py-2 text-sm hover:bg-muted transition"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
