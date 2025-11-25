import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://sirc.chat',
  ),
  title: 'SIRC - Hello IRC, Meet Bitcoin',
  description:
    'No accounts. No tracking. No corporate overlords. SIRC is encrypted IRC chat on the protocol that built the internet. XDCC downloads, auto-reconnect, and privacy by default.',
  keywords: [
    'IRC client',
    'XDCC',
    'encrypted chat',
    'private messaging',
    'decentralized',
    'open source',
    'privacy',
    'no tracking',
    'desktop app',
    'file sharing',
    'Bitcoin',
    'BSV',
  ],
  authors: [{ name: 'SIRC Systems' }],
  creator: 'SIRC Systems',
  openGraph: {
    title: 'SIRC - Hello IRC, Meet Bitcoin',
    description:
      'No accounts. No tracking. No corporate overlords. Encrypted chat on the protocol that built the internet.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SIRC',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIRC - Hello IRC, Meet Bitcoin',
    description:
      'No accounts. No tracking. No corporate overlords. Encrypted chat on the protocol that built the internet.',
    creator: '@wildsatchmo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
