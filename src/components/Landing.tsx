'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';
import { Typography, Button } from '@worldcoin/mini-apps-ui-kit-react';
import { CurrentWallet } from '@/components/CurrentWallet';

const signInWithWallet = async () => {
  const { commandPayload: generateMessageResult, finalPayload } =
    await MiniKit.commandsAsync.walletAuth({
      nonce: crypto.randomUUID().replace(/-/g, ''),
      expirationTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      notBefore: new Date(Date.now() - 24 * 60 * 60 * 1000),
      statement: `RND just to show modal every time: ${crypto.randomUUID().replace(/-/g, '')}. Some example statement with a link https://worldcoin.com/apps`,
    });

  console.log({ generateMessageResult, finalPayload });
};

export const Landing = () => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    MiniKit.install();
    setIsInstalled(MiniKit.isInstalled());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.png"
          alt="Placeholder"
          width={96}
          height={96}
        />
      </div>
      <Typography
        variant="heading"
        className="mb-4 text-center"
        level="4"
      >
        This is a Mini App, built by Supervibe
      </Typography>
      <Typography variant="subtitle" className="mb-8 text-center max-w-xl">
        Not very interesting yet, but vibe code until it becomes something
      </Typography>
      <Typography variant="body" className="mb-4 text-center">
        {isInstalled ? 'MiniKit is installed!' : 'MiniKit is not installed.'}
      </Typography>
      <CurrentWallet />
      <div className="flex space-x-4 mt-4">
        <Button variant="primary" onClick={signInWithWallet}>
          Test wallet auth
        </Button>
      </div>
    </div>
  );
};
