import { ContentLayout } from '@/components/content-layout'

export default function License() {
  return (
    <ContentLayout>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        MIT License
      </h1>
      <div className="prose prose-invert prose-zinc max-w-none">
        <p className="text-zinc-400 text-lg mb-8">
          Copyright (c) 2025 SIRC Systems
        </p>

        <section className="mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 font-mono text-sm text-zinc-300 leading-relaxed">
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="mb-4">
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p className="mb-0">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
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
            <li>You can use SIRC for any purpose, including commercial use</li>
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
            SIRC uses various open-source libraries and dependencies, each with
            their own licenses. For a complete list of third-party licenses,
            please refer to the{' '}
            <a
              href="https://github.com/rohenaz/sirc"
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
              href="https://github.com/rohenaz/sirc"
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
    </ContentLayout>
  )
}
