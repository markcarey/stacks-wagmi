'use client'

import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { createPublicClient, http } from 'viem'
import { config } from '../wagmi'
import {  createConfig } from 'wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>
}
