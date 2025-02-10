import { Typography, Button } from '@worldcoin/mini-apps-ui-kit-react';

export const PageError = ({
  reset,
}: {
  reset: () => void
}) => (
  <div className="h-screen flex flex-col gap-5 items-center justify-center bg-gray-100">
    <Typography level="3" variant="heading">
      An error occurred. Ask Supervibe to fix it.
    </Typography>
    <Button
      onClick={() => reset()}
    >
      Try again
    </Button>
  </div>
)
