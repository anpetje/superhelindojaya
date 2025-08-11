'use client';

import { useEffect } from 'react';

function fireTrackingEvents() {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'pageview',
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }
}

export default function ThankYouEffectClient() {
  useEffect(() => {
    let retries = 10;
    function tryFire() {
      if (
        (typeof window.gtag === 'function' || Array.isArray(window.dataLayer)) &&
        typeof window !== 'undefined'
      ) {
        fireTrackingEvents();
      } else if (retries > 0) {
        retries--;
        setTimeout(tryFire, 200);
      }
    }
    tryFire();
  }, []);

  return null;
}
