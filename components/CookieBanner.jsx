'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    // Trigger Cookiebot consent update if needed
    if (window.CookieConsent) {
      window.CookieConsent.show();
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-700 z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-300 flex-1">
          Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Sagledom se sa našom politikom privatnosti i upotrebom kolačića.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition border border-zinc-600 rounded hover:border-zinc-400"
          >
            Odbij
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-[#00A3FF] hover:bg-[#0087cc] transition rounded"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  );
}
