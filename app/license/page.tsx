import { Terminal } from 'lucide-react'
import Link from 'next/link'

export default function License() {
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
          MIT License
        </h1>
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-400 text-lg mb-8">
            Copyright (c) 2024 SIRC Systems
          </p>

          <section className="mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 font-mono text-sm text-zinc-300 leading-relaxed">
              <p className="mb-4">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p className="mb-4">
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p className="mb-0">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              What This Means
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The MIT License is a permissive free software license. In simple
              terms:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
              <li>
                You can use SIRC for any purpose, including commercial use
              </li>
              <li>You can modify the source code to fit your needs</li>
              <li>You can distribute original or modified copies</li>
              <li>You can incorporate it into proprietary software</li>
              <li>
                The only requirement is including the original copyright and
                license notice
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Third-Party Licenses
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SIRC uses various open-source libraries and dependencies, each
              with their own licenses. For a complete list of third-party
              licenses, please refer to the{' '}
              <a
                href="https://github.com/rohenaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                project repository
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you have questions about licensing, please open an issue on our{' '}
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
