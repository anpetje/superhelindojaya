'use client';

import { useEffect } from 'react';

export default function ThankYouEffectClient() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'pageview',
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }, []);

  return null;
}
