'use client';

import { MiniKit } from '@worldcoin/minikit-js';
import { ReactNode, useEffect, useState } from 'react';

export const MiniKitProvider = ({ children }: { children: ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    MiniKit.install();
    console.log(MiniKit.isInstalled());
    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
};
