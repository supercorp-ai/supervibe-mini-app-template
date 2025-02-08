import { useMiniKitUser } from '@/hooks/miniKit/useMiniKitUser'

export const CurrentWallet = () => {
  const { miniKitUser } = useMiniKitUser()

  return (
    <div>
      <h3>Current Wallet</h3>
      <div>{JSON.stringify(miniKitUser, null, 2)}</div>
    </div>
  )
}
