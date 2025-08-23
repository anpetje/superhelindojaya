'use client';

import { useEffect } from 'react';

export default function UtmSourceInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    if (utmSource) {
      localStorage.setItem('utm_source', utmSource);
    }
  }, []);

  return null;
}
