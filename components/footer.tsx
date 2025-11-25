import { Terminal } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 bg-zinc-950 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-900/20 border border-emerald-500/50 rounded flex items-center justify-center text-emerald-500">
                <Terminal size={18} />
              </div>
              <span className="font-mono text-xl font-bold tracking-tighter text-white">
                SIRC
              </span>
            </div>
            <p className="text-sm text-zinc-500">
              Modern IRC client for the decentralized era.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Product</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a
                  href="/#features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#roadmap"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a
                  href="/docs"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rohenaz/sirc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/wildsatchmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/license"
                  className="hover:text-emerald-400 transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mb-8 bg-zinc-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-mono text-zinc-500 text-sm">
              © 2025 SIRC Systems. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a
              href="https://github.com/rohenaz/sirc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/wildsatchmo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
