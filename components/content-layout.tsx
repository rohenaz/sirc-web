import { Terminal } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Footer } from '@/components/footer'

interface ContentLayoutProps {
  children: ReactNode
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-zinc-800/50 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-900/20 border border-emerald-500/50 rounded flex items-center justify-center text-emerald-500">
            <Terminal size={18} />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            SIRC<span className="text-emerald-500">_</span>
          </span>
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {children}
      </div>

      <Footer />
    </main>
  )
}
