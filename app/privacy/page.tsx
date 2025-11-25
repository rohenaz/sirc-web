import { ContentLayout } from '@/components/content-layout'

export default function PrivacyPolicy() {
  return (
    <ContentLayout>
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
            explains how we handle your information when you use our IRC client
            application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Data Collection
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            SIRC is a client-side application that does not collect, store, or
            transmit any personal data to our servers. All your data remains on
            your device.
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
            When you connect to IRC servers, your communications are governed by
            the privacy policies of those servers. SIRC uses TLS encryption for
            all connections when available, but we cannot control how
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
