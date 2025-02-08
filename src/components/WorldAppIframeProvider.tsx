'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

type Props = { children: ReactNode };

export function WorldAppIframeProvider({ children }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data) return;
      switch (data.type) {
        case 'eval-code': {
          // The parent snippet that sets window.WorldApp + window.webkit
          try {
            eval(data.payload);
            console.log('[Child] snippet injected');
            setReady(true);
          } catch (err) {
            console.error('[Child] snippet error =>', err);
          }
          break;
        }
        case 'minikit-response': {
          // The parent is forwarding an event from the real native environment
          console.log('[Child] got minikit-response =>', data.event, data.data);
          // e.g. data.event === 'MiniAppWalletAuth'
          MiniKit.trigger(data.event, data.data);
          break;
        }
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  if (!ready) {
    return <div>Loading WorldApp environment…</div>;
  }

  return <>{children}</>;
}
