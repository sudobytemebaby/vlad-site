import { browser } from '$app/environment';

function getInitialTheme(): 'light' | 'dark' {
  if (!browser) return 'light';
  return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
}

function applyTheme(value: 'light' | 'dark') {
  if (!browser) return;
  localStorage.setItem('theme', value);
  if (value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

let current = $state<'light' | 'dark'>(getInitialTheme());

if (browser) {
  applyTheme(current);
}

export const theme = {
  get current() {
    return current;
  },
  set current(value: 'light' | 'dark') {
    current = value;
    applyTheme(value);
  },
  toggleTheme() {
    current = current === 'light' ? 'dark' : 'light';
    applyTheme(current);
  },
  setTheme(value: 'light' | 'dark') {
    current = value;
    applyTheme(value);
  },
};
