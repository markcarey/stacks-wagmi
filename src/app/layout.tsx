import { Providers } from './providers'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { createPublicClient, http } from 'viem'

 
export const metadata = {
  title: 'wagmi',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
