import { useState, useEffect } from "react"
import { MiniKit } from '@worldcoin/minikit-js';

export const useMiniKitUser = () => {
  const [miniKitUser, setMiniKitUser] = useState(MiniKit.user ?? null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiniKitUser(MiniKit.user ?? null);
    }, 500)

    return () => clearInterval(interval);
  }, []);

  return {
    miniKitUser,
  };
};
