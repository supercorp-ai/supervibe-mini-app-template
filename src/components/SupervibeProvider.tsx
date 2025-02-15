'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import { Typography } from '@worldcoin/mini-apps-ui-kit-react';
import { Spinner } from '@/components/Spinner';

// const isInIframe = () => {
//   if (typeof window === 'undefined') return false;
//
//   return window.self !== window.top;
// }

export const SupervibeProvider = ({ children }: { children: ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data) return;
      switch (data.type) {
        case 'supervibe-init': {
          try {
            eval(data.code);
            console.log('[Child] Supervibe init success');
            setReady(true);
          } catch (err) {
            console.error('[Child] Supervibe init error =>', err);
          }
          break;
        }

        case 'supervibe-eval': {
          try {
            eval(data.code);
            console.log('[Child] Supervibe eval success');
            setReady(true);
          } catch (err) {
            console.error('[Child] Supervibe eval error =>', err);
          }
          break;
        }
      }
    }

    window.addEventListener('message', onMessage);
    window.parent.postMessage({ type: 'supervibe-load' }, '*');

    return () => window.removeEventListener('message', onMessage);
  }, []);

  if (!ready) {
    return (
      <div className="h-screen flex flex-col gap-5 items-center justify-center bg-gray-200">
        <Spinner />
        <Typography level="3" variant="heading">
          Loading your Mini App
        </Typography>
      </div>
    )
  }

  return <>{children}</>;
}
