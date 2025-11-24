import { Terminal } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-400 text-lg mb-8">
            Last updated: November 24, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SIRC is committed to protecting your privacy. This Privacy Policy
              explains how we handle your information when you use our IRC
              client application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Collection
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SIRC is a client-side application that does not collect, store, or
              transmit any personal data to our servers. All your data remains
              on your device.
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
              <li>
                We do not collect usernames, passwords, or authentication
                credentials
              </li>
              <li>We do not log or store your IRC conversations</li>
              <li>We do not track your browsing or usage patterns</li>
              <li>We do not use analytics or tracking services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Local Data Storage
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SIRC stores configuration files locally on your device, including:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
              <li>Server connection settings</li>
              <li>User preferences and UI customization</li>
              <li>Chat logs (if enabled by you)</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-4">
              This data never leaves your device unless you explicitly choose to
              back it up or transfer it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Third-Party Connections
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              When you connect to IRC servers, your communications are governed
              by the privacy policies of those servers. SIRC uses TLS encryption
              for all connections when available, but we cannot control how
              third-party IRC servers handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Updates to This Policy
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us
              through our{' '}
              <a
                href="https://github.com/rohenaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                GitHub repository
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
