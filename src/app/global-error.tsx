'use client'
import { useEffect } from 'react'
import { Typography, Button } from '@worldcoin/mini-apps-ui-kit-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    window.parent.postMessage(
      {
        type: 'child-console-error',
        message: [JSON.stringify({
          message: error.message,
          stack: error.stack,
          name: error.name,
          digest: error.digest,
        })],
      },
      '*'
    )
  }, [error])

  return (
    <html>
      <body>
        <Typography variant="heading">
          An error occurred
        </Typography>
        <Button
          onClick={() => reset()}
        >
          Try again
        </Button>
      </body>
    </html>
  )
}
