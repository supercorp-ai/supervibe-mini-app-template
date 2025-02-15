import { useState, useEffect } from "react"

const getMiniKitUser = () => {
  if (typeof window === 'undefined') return null
  if (!window.MiniKit) return null

  return window.MiniKit.user ?? null
}

export const useMiniKitUser = () => {
  const [miniKitUser, setMiniKitUser] = useState(getMiniKitUser());

  useEffect(() => {
    const interval = setInterval(() => {
      setMiniKitUser(getMiniKitUser());
    }, 500)

    return () => clearInterval(interval);
  }, []);

  return {
    miniKitUser,
  };
};
