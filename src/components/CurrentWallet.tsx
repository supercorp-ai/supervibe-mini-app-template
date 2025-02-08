import { useMiniKitUser } from '@/hooks/miniKit/useMiniKitUser'
import { Typography } from '@worldcoin/mini-apps-ui-kit-react';

export const CurrentWallet = () => {
  const { miniKitUser } = useMiniKitUser()

  return (
    <div
      className="text-center"
    >
      <Typography variant="heading" level="3">Current Wallet</Typography>
      <div>{miniKitUser ? JSON.stringify(miniKitUser, null, 2) : 'None'}</div>
    </div>
  )
}
