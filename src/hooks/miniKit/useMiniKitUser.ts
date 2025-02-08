import { useState, useEffect } from "react"

export const useMiniKitUser = () => {
  const [miniKitUser, setMiniKitUser] = useState(window.MiniKit?.user ?? null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiniKitUser(window.MiniKit?.user ?? null);
    }, 500)

    return () => clearInterval(interval);
  }, []);

  return {
    miniKitUser,
  };
};
