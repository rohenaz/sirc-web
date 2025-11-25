'use client'

import {
  Code,
  Download,
  Github,
  Globe,
  HardDrive,
  Image,
  Key,
  Laptop,
  Lock,
  MessageSquare,
  Network,
  PackageOpen,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  Star,
  Terminal,
  Users,
  UserSearch,
  Wallet,
  Zap,
} from 'lucide-react'
import type React from 'react'
import { useState } from 'react'
import { AnimatedCard, AnimatedSection } from '@/components/animated-section'
import { AppScreenshot } from '@/components/app-screenshot'
import { DepositModal } from '@/components/deposit-modal'
import { FloatingOrbs } from '@/components/floating-orbs'
import { TerminalDemo } from '@/components/terminal-demo'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { WaitlistSignup } from '@/components/waitlist-signup'
import { useOSDetection } from '@/lib/use-os-detection'

const isWaitlistMode = process.env.NEXT_PUBLIC_WAITLIST_MODE === 'true'

// Bitcoin addresses for each bounty
const BOUNTY_ADDRESSES = {
  bsvLogging: '1BitcoinEaterAddressDontSendf59kuE', // Replace with actual address
  xdccIndexing: '1BitcoinEaterAddressDontSendf59kuE', // Replace with actual address
  walletIntegration: '1BitcoinEaterAddressDontSendf59kuE', // Replace with actual address
  p2pOverlay: '1BitcoinEaterAddressDontSendf59kuE', // Replace with actual address
}

export default function LandingPage() {
  const os = useOSDetection()
  const [activeModal, setActiveModal] = useState<
    'bsvLogging' | 'xdccIndexing' | 'walletIntegration' | 'p2pOverlay' | null
  >(null)

  // Download URLs (placeholder - update with actual binary URLs)
  const downloadUrls = {
    windows: '#download-windows',
    macos: '#download-macos',
  }

  const handleDownload = () => {
    if (os === 'windows' && downloadUrls.windows) {
      window.location.href = downloadUrls.windows
    } else if (os === 'macos' && downloadUrls.macos) {
      window.location.href = downloadUrls.macos
    }
  }

  const getDownloadButtonText = () => {
    if (os === 'windows') return 'Download for Windows'
    if (os === 'macos') return 'Download for Mac'
    return 'Download Client'
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <FloatingOrbs />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-zinc-800/50 backdrop-blur-md bg-zinc-950/50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
            <Terminal size={20} />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            SIRC<span className="text-emerald-400 animate-blink">_</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#features"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#preview"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Preview
          </a>
          <a
            href="#roadmap"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            FAQ
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="https://github.com/rohenaz/sirc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <Button
            onClick={!isWaitlistMode ? handleDownload : undefined}
            className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
          >
            {isWaitlistMode ? 'Join Waitlist' : getDownloadButtonText()}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <Badge
            variant="outline"
            className="mb-8 border-emerald-500/30 text-emerald-400 bg-emerald-950/20 px-4 py-1.5 rounded-full font-mono text-xs backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {isWaitlistMode ? 'Coming Soon' : 'Now Available'}
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white animate-fade-in-up animation-delay-100">
          Hello IRC, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient">
            Meet Bitcoin
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          No accounts. No tracking. No corporate overlords. Just pure, encrypted
          chat on the protocol that built the internet.
        </p>

        <div className="animate-fade-in-up animation-delay-300">
          {isWaitlistMode ? (
            <WaitlistSignup variant="hero" />
          ) : (
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {/* Primary button - detected OS or Windows as fallback */}
              <Button
                size="lg"
                onClick={() => {
                  const primaryUrl =
                    os === 'macos' ? downloadUrls.macos : downloadUrls.windows
                  window.location.href = primaryUrl
                }}
                className="h-14 px-8 text-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <HardDrive className="mr-2 h-5 w-5" />
                {os === 'macos' ? 'Download for Mac' : 'Download for Windows'}
              </Button>
              {/* Secondary button - alternate OS */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const secondaryUrl =
                    os === 'macos' ? downloadUrls.windows : downloadUrls.macos
                  window.location.href = secondaryUrl
                }}
                className="h-14 px-8 text-lg border-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-emerald-500/50 transition-all duration-300"
              >
                {os === 'macos' ? 'Download for Windows' : 'Download for Mac'}
              </Button>
            </div>
          )}
        </div>

        {/* Terminal Demo */}
        <div className="animate-fade-in-up animation-delay-400">
          <TerminalDemo />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 border-y border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0}>
              <StatCard
                icon={<Shield className="text-emerald-400" size={24} />}
                value="TLS 1.3"
                label="Encrypted"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <StatCard
                icon={<Zap className="text-cyan-400" size={24} />}
                value="<50ms"
                label="Latency"
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <StatCard
                icon={<Download className="text-purple-400" size={24} />}
                value="XDCC"
                label="Native Support"
              />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <StatCard
                icon={<Star className="text-orange-400" size={24} />}
                value="100%"
                label="Free & Open"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="relative z-10 py-28 bg-zinc-900/20 border-b border-zinc-800/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-4 border-zinc-700 text-zinc-400 bg-zinc-900/50"
            >
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Old Protocol, New Tricks
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              All the reliability of IRC with none of the 90s jank
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard index={0}>
              <FeatureCard
                icon={<RefreshCw className="text-emerald-400" />}
                title="Never Miss a Message"
                description="Connection dropped? Already reconnected. Your channels are waiting exactly where you left them."
              />
            </AnimatedCard>
            <AnimatedCard index={1}>
              <FeatureCard
                icon={<Settings className="text-blue-400" />}
                title="Your Client, Your Rules"
                description="Tweak everything. Notifications, themes, keybinds, downloads. Make it yours."
              />
            </AnimatedCard>
            <AnimatedCard index={2}>
              <FeatureCard
                icon={<Key className="text-purple-400" />}
                title="One-Click Identity"
                description="Auto-authenticate with NickServ the moment you connect. Set it once, forget it forever."
              />
            </AnimatedCard>
            <AnimatedCard index={3}>
              <FeatureCard
                icon={<Image className="text-cyan-400" />}
                title="See What They Share"
                description="Images render inline. No sketchy link clicking. No opening random URLs in your browser."
              />
            </AnimatedCard>
            <AnimatedCard index={4}>
              <FeatureCard
                icon={<UserSearch className="text-green-400" />}
                title="Know Who You're Talking To"
                description="Clean WHOIS cards show you everything at a glance. Channels, idle time, connection info."
              />
            </AnimatedCard>
            <AnimatedCard index={5}>
              <FeatureCard
                icon={<ShieldCheck className="text-amber-400" />}
                title="Encrypted by Default"
                description="TLS everywhere. Your conversations stay between you and the server. Period."
              />
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* App Screenshot Preview */}
      <section id="preview" className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-zinc-700 text-zinc-400 bg-zinc-900/50"
            >
              Preview
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              See It in Action
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              A modern interface that IRC veterans and newcomers alike will love
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <AppScreenshot className="max-w-5xl mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Who is SIRC For? Section */}
      <section className="relative z-10 py-28 bg-zinc-900/20 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-4 border-zinc-700 text-zinc-400 bg-zinc-900/50"
            >
              Community
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Built for People Who Get It
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              If you know why IRC still matters, you're in the right place
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard index={0}>
              <UseCaseCard
                title="XDCC Veterans"
                description="Proper download management without the ancient UI. Queue up, sit back, grab everything."
                icon={<PackageOpen className="text-emerald-400" size={32} />}
              />
            </AnimatedCard>
            <AnimatedCard index={1}>
              <UseCaseCard
                title="Channel Ops"
                description="Run your community without Big Tech watching over your shoulder. Your rules, your space."
                icon={<Users className="text-blue-400" size={32} />}
              />
            </AnimatedCard>
            <AnimatedCard index={2}>
              <UseCaseCard
                title="Devs & Hackers"
                description="Where the real conversations happen. Freenode veterans and Libera refugees welcome."
                icon={<Laptop className="text-purple-400" size={32} />}
              />
            </AnimatedCard>
            <AnimatedCard index={3}>
              <UseCaseCard
                title="Privacy Maximalists"
                description="No email signup. No phone verification. No algorithm deciding what you see."
                icon={<Lock className="text-cyan-400" size={32} />}
              />
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Roadmap Funding Section */}
      <section id="roadmap" className="relative z-10 py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-4 border-zinc-700 text-zinc-400 bg-zinc-900/50"
            >
              Roadmap
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Fund What Gets Built
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              No VCs. No corporate roadmap. The community decides what ships
              next.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goal 1: BSV Logging */}
            <AnimatedCard index={0}>
              <Card className="bg-zinc-900/80 border-zinc-800 hover:border-orange-500/30 transition-all duration-300 hover-lift backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="bg-orange-500/10 text-orange-500 border-orange-500/20 mb-2"
                    >
                      Blockchain Integration
                    </Badge>
                    <Globe className="text-zinc-600" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    On-Chain IRC Logging
                  </CardTitle>
                  <CardDescription>
                    Immutable history storage on Bitcoin SV (BSV). Never lose a
                    conversation log again.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm font-mono text-zinc-300">
                    <span>Raised: $3,420</span>
                    <span>Goal: $5,000</span>
                  </div>
                  <Progress
                    value={68}
                    className="h-2 bg-zinc-800 [&>*]:bg-gradient-to-r [&>*]:from-orange-500 [&>*]:to-orange-400"
                  />
                  <p className="text-xs text-zinc-500 pt-2">124 Contributors</p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setActiveModal('bsvLogging')}
                    className="w-full bg-zinc-800 hover:bg-orange-600 hover:text-white text-zinc-300 border border-zinc-700 transition-all duration-300"
                  >
                    Contribute (BSV)
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            {/* Goal 2: XDCC Indexing */}
            <AnimatedCard index={1}>
              <Card className="bg-zinc-900/80 border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover-lift backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-2"
                    >
                      Search Engine
                    </Badge>
                    <Code className="text-zinc-600" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    XDCC Indexing Suite
                  </CardTitle>
                  <CardDescription>
                    Index XDCC messages and make them searchable. Search and
                    download packets directly from the client UI.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm font-mono text-zinc-300">
                    <span>Raised: $1,200</span>
                    <span>Goal: $8,000</span>
                  </div>
                  <Progress
                    value={15}
                    className="h-2 bg-zinc-800 [&>*]:bg-gradient-to-r [&>*]:from-blue-500 [&>*]:to-blue-400"
                  />
                  <p className="text-xs text-zinc-500 pt-2">42 Contributors</p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setActiveModal('xdccIndexing')}
                    className="w-full bg-zinc-800 hover:bg-blue-600 hover:text-white text-zinc-300 border border-zinc-700 transition-all duration-300"
                  >
                    Contribute
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            {/* Goal 3: BRC-100 Wallet Integration */}
            <AnimatedCard index={2}>
              <Card className="bg-zinc-900/80 border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover-lift backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-2"
                    >
                      BRC-100
                    </Badge>
                    <Wallet className="text-zinc-600" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Wallet Integration
                  </CardTitle>
                  <CardDescription>
                    Send crypto directly in IRC with wallet-centric commands.
                    Pay anyone in any cryptocurrency, starting with BSV support.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm font-mono text-zinc-300">
                    <span>Raised: $0</span>
                    <span>Goal: $6,000</span>
                  </div>
                  <Progress
                    value={0}
                    className="h-2 bg-zinc-800 [&>*]:bg-gradient-to-r [&>*]:from-emerald-500 [&>*]:to-emerald-400"
                  />
                  <p className="text-xs text-zinc-500 pt-2">0 Contributors</p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setActiveModal('walletIntegration')}
                    className="w-full bg-zinc-800 hover:bg-emerald-600 hover:text-white text-zinc-300 border border-zinc-700 transition-all duration-300"
                  >
                    Contribute (BSV)
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            {/* Goal 4: Open Source P2P Overlay */}
            <AnimatedCard index={3}>
              <Card className="bg-zinc-900/80 border-zinc-800 hover:border-purple-500/30 transition-all duration-300 hover-lift backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-500 border-purple-500/20 mb-2"
                    >
                      Open Source
                    </Badge>
                    <Network className="text-zinc-600" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    P2P Data Overlay
                  </CardTitle>
                  <CardDescription>
                    Open source the peer-to-peer overlay infrastructure for
                    on-chain data. Generic, reusable stack for the community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm font-mono text-zinc-300">
                    <span>Raised: $0</span>
                    <span>Goal: $10,000</span>
                  </div>
                  <Progress
                    value={0}
                    className="h-2 bg-zinc-800 [&>*]:bg-gradient-to-r [&>*]:from-purple-500 [&>*]:to-purple-400"
                  />
                  <p className="text-xs text-zinc-500 pt-2">0 Contributors</p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setActiveModal('p2pOverlay')}
                    className="w-full bg-zinc-800 hover:bg-purple-600 hover:text-white text-zinc-300 border border-zinc-700 transition-all duration-300"
                  >
                    Contribute (BSV)
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative z-10 py-28 bg-zinc-900/20 border-t border-zinc-800/50"
      >
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-zinc-700 text-zinc-400 bg-zinc-900/50"
            >
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Questions? Answers.
            </h2>
            <p className="text-zinc-400 text-lg">
              The stuff people actually ask us
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
                  What is IRC?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  IRC (Internet Relay Chat) is a real-time text messaging
                  protocol. It's been the backbone of online communities since
                  1988, offering decentralized, privacy-focused communication.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
                  What is XDCC?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  XDCC is a file-sharing protocol built on IRC. It allows users
                  to download files from bots using simple commands. SIRC makes
                  this process seamless with a modern interface.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
                  Is SIRC free?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Yes! SIRC is completely free to download and use. We're funded
                  through community contributions for advanced features on our
                  roadmap.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
                  Which IRC networks are supported?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  SIRC supports all standard IRC networks including Libera.Chat,
                  EFnet, DALnet, Undernet, and any custom IRC server you want to
                  connect to.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
                  Is my data private?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Absolutely. SIRC uses TLS encryption for all connections, and
                  all chat data stays on your device. We don't collect or store
                  any of your conversations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
                  How do I report bugs or request features?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Visit our{' '}
                  <a
                    href="https://github.com/rohenaz/sirc"
                    className="text-emerald-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub repository
                  </a>{' '}
                  to submit issues, request features, or contribute to
                  development. We're actively maintained and love community
                  feedback.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-28 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-3xl" />

              <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-2xl p-12 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Reconnect?
                </h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                  Join thousands of users who've rediscovered the power of IRC
                  with a modern interface.
                </p>

                {isWaitlistMode ? (
                  <WaitlistSignup variant="inline" />
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={() => {
                        const primaryUrl =
                          os === 'macos'
                            ? downloadUrls.macos
                            : downloadUrls.windows
                        window.location.href = primaryUrl
                      }}
                      className="h-14 px-8 text-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                    >
                      <HardDrive className="mr-2 h-5 w-5" />
                      Download Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() =>
                        window.open(
                          'https://github.com/rohenaz/sirc',
                          '_blank'
                        )
                      }
                      className="h-14 px-8 text-lg border-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-16 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400">
                  <Terminal size={20} />
                </div>
                <span className="font-mono text-xl font-bold tracking-tighter text-white">
                  SIRC
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Modern IRC client for the decentralized era. Built with privacy
                and performance in mind.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm">Product</h3>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li>
                  <a
                    href="#features"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#preview"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Preview
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm">
                Resources
              </h3>
              <ul className="space-y-3 text-sm text-zinc-500">
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
              <h3 className="font-semibold text-white mb-4 text-sm">Legal</h3>
              <ul className="space-y-3 text-sm text-zinc-500">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-zinc-500 text-sm">
                &copy; 2025 SIRC Systems. All rights reserved.
              </span>
            </div>
            <div className="flex gap-6 text-sm text-zinc-600">
              <a
                href="https://github.com/rohenaz/sirc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <Github size={16} />
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

      {/* Deposit Modals */}
      <DepositModal
        open={activeModal === 'bsvLogging'}
        onOpenChange={(open) => setActiveModal(open ? 'bsvLogging' : null)}
        address={BOUNTY_ADDRESSES.bsvLogging}
        featureName="On-Chain IRC Logging"
      />
      <DepositModal
        open={activeModal === 'xdccIndexing'}
        onOpenChange={(open) => setActiveModal(open ? 'xdccIndexing' : null)}
        address={BOUNTY_ADDRESSES.xdccIndexing}
        featureName="XDCC Indexing Suite"
      />
      <DepositModal
        open={activeModal === 'walletIntegration'}
        onOpenChange={(open) =>
          setActiveModal(open ? 'walletIntegration' : null)
        }
        address={BOUNTY_ADDRESSES.walletIntegration}
        featureName="BRC-100 Wallet Integration"
      />
      <DepositModal
        open={activeModal === 'p2pOverlay'}
        onOpenChange={(open) => setActiveModal(open ? 'p2pOverlay' : null)}
        address={BOUNTY_ADDRESSES.p2pOverlay}
        featureName="P2P Data Overlay"
      />
    </main>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-white font-mono mb-1">
        {value}
      </div>
      <div className="text-sm text-zinc-500">{label}</div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover-lift group backdrop-blur-sm h-full">
      <div className="mb-4 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 border border-zinc-700/50">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  )
}

function UseCaseCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover-lift group text-center backdrop-blur-sm h-full">
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-zinc-800/50 rounded-lg group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 border border-zinc-700/50">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
