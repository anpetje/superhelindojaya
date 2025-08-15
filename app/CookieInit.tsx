// src/app/cookie-init.tsx
'use client';

import { useEffect } from 'react';

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function getQueryParam(param: string) {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function storeFbParams() {
  // Store fbclid as fbc if available
  const fbclid = getQueryParam('fbclid');
  if (fbclid) {
    const fbc = `fb.1.${Date.now()}.${fbclid}`;
    document.cookie = `fbc=${fbc}; path=/; max-age=31536000`;
  }

  // Ensure fbp is set by pixel (if not, set manually for fallback)
  const existingFbp = getCookie('_fbp');
  if (!existingFbp) {
    const fbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 1e10)}`;
    document.cookie = `_fbp=${fbp}; path=/; max-age=31536000`;
  }
}

export default function CookieInit() {
  useEffect(() => {
    storeFbParams();
  }, []);

  return null;
}
