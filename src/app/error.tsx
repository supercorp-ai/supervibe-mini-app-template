'use client'
import { useEffect } from 'react'
import { PageError } from '@/components/PageError'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (
    window.parent.postMessage(
      {
        type: 'child-console-error',
        data: [JSON.stringify({
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
    <PageError
      reset={reset}
    />
  )
}
