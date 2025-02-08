'use client'
import React, { useEffect, useState } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

const signInWithWallet = async () => {
  const { commandPayload: generateMessageResult, finalPayload } = await MiniKit.commandsAsync.walletAuth({
    nonce: crypto.randomUUID().replace(/-/g, ''),
    expirationTime: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    notBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    statement: 'This is my statement and here is a link https://worldcoin.com/apps',
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-green-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to World Apps</h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
        Discover the innovative applications that bring the world closer together. Explore powerful tools and solutions for a connected future.
      </p>
      <p className="text-xl font-semibold mb-4">
        {isInstalled ? 'MiniKit is installed!' : 'MiniKit is not installed.'}
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300" onClick={signInWithWallet}>
          Auth
        </button>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
