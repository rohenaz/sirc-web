'use client'

import { useEffect, useState } from 'react'

export type OS = 'windows' | 'macos' | 'linux' | 'unknown'

export function useOSDetection(): OS {
  const [os, setOS] = useState<OS>('unknown')

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    const platform = window.navigator.platform.toLowerCase()

    if (platform.includes('win') || userAgent.includes('windows')) {
      setOS('windows')
    } else if (
      platform.includes('mac') ||
      userAgent.includes('macintosh') ||
      userAgent.includes('mac os')
    ) {
      setOS('macos')
    } else if (
      platform.includes('linux') ||
      userAgent.includes('linux') ||
      userAgent.includes('x11')
    ) {
      setOS('linux')
    } else {
      setOS('unknown')
    }
  }, [])

  return os
}
