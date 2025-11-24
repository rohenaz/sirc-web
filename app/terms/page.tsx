import { Terminal } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
          <span className="font-mono text-xl font-bold tracking-tighter text-white">SIRC<span className="text-emerald-500">_</span></span>
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-400 text-lg mb-8">Last updated: November 24, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              By downloading, installing, or using SIRC, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">License</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SIRC is open-source software distributed under the MIT License. You are free to use, modify, and distribute the software in accordance with the license terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Use of Service</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You agree to use SIRC in compliance with all applicable laws and regulations. You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
              <li>Your conduct on IRC networks and channels</li>
              <li>Any data you transmit or receive through the application</li>
              <li>Compliance with the terms of service of IRC servers you connect to</li>
              <li>Respecting the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Prohibited Activities</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You may not use SIRC to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malware, viruses, or other harmful code</li>
              <li>Engage in harassment, abuse, or illegal activities</li>
              <li>Attempt to gain unauthorized access to systems or networks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SIRC is provided "as is" without any warranties, express or implied. We do not guarantee that the software will be error-free, secure, or continuously available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              To the maximum extent permitted by law, SIRC and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Continued use of SIRC after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us through our{" "}
              <a href="https://github.com/rohenaz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                GitHub repository
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
