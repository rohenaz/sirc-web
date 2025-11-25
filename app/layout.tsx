import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
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
  ],
  authors: [{ name: 'SIRC Systems' }],
  openGraph: {
    title: 'SIRC - Hello IRC, Meet Bitcoin',
    description:
      'No accounts. No tracking. No corporate overlords. Encrypted chat on the protocol that built the internet.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SIRC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIRC - Hello IRC, Meet Bitcoin',
    description:
      'No accounts. No tracking. No corporate overlords. Encrypted chat on the protocol that built the internet.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  )
}
