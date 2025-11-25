import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIRC - Modern IRC Client with XDCC Support | Free Download',
  description:
    'A powerful, modern IRC client built with Wails3. Connect to multiple servers, browse channels in real-time, download files via XDCC, and enjoy a native desktop experience. Open source and cross-platform.',
  keywords: [
    'IRC client',
    'XDCC',
    'file transfer',
    'chat client',
    'IRC',
    'desktop app',
    'Wails',
    'open source',
    'multi-server',
    'channel browser',
  ],
  authors: [{ name: 'SIRC Systems' }],
  openGraph: {
    title: 'SIRC - Modern IRC Client with XDCC Support',
    description:
      'A powerful, modern IRC client for seamless file sharing and IRC communication. Native desktop app for Windows and macOS.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SIRC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIRC - Modern IRC Client with XDCC Support',
    description:
      'A powerful, modern IRC client for seamless file sharing and IRC communication. Native desktop app for Windows and macOS.',
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
