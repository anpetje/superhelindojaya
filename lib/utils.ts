import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateEventId(prefix = 'event') {
  const randomStr = Array.from({ length: 8 }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join('');
  return `${prefix}_${Date.now()}_${randomStr}`;
}
