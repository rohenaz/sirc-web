"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Terminal, Share2, ShieldCheck, Zap, Globe, HardDrive, ChevronRight, Code, Server, List, Download, Users, FileText, Rocket, PackageOpen, Lock, Laptop, RefreshCw, Settings, Key, Image, UserSearch } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DepositModal } from "@/components/deposit-modal";
import { WaitlistSignup } from "@/components/waitlist-signup";

const isWaitlistMode = process.env.NEXT_PUBLIC_WAITLIST_MODE === 'true';

// Bitcoin addresses for each bounty
const BOUNTY_ADDRESSES = {
  bsvLogging: "1BitcoinEaterAddressDontSendf59kuE", // Replace with actual address
  xdccIndexing: "1BitcoinEaterAddressDontSendf59kuE", // Replace with actual address
};

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<'bsvLogging' | 'xdccIndexing' | null>(null);
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-900/20 border border-emerald-500/50 rounded flex items-center justify-center text-emerald-500">
            <Terminal size={18} />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-white">SIRC<span className="text-emerald-500">_</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="#roadmap" className="hover:text-emerald-400 transition-colors">Roadmap</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
        </div>
        <div className="flex gap-4">
          <Button className="bg-white text-black hover:bg-emerald-400 hover:text-black font-semibold transition-all">
            {isWaitlistMode ? 'Join Waitlist' : 'Download Client'}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32 px-6 max-w-7xl mx-auto text-center">
        <Badge variant="outline" className="mb-6 border-emerald-500/30 text-emerald-400 bg-emerald-950/10 px-4 py-1 rounded-full font-mono text-xs">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {isWaitlistMode ? 'Coming Soon' : 'New Release Available'}
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white bg-clip-text">
          IRC Reimagined for the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Decentralized Era</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A hyper-clean, dark-mode native client for macOS and Windows.
          Engineered for seamless file sharing and built to preserve history.
        </p>

        {isWaitlistMode ? (
          <WaitlistSignup variant="hero" />
        ) : (
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]">
              <HardDrive className="mr-2 h-5 w-5" /> Download for Windows
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-500">
               Download for Mac
            </Button>
          </div>
        )}

        {/* Terminal Mockup */}
        <div className="mt-20 mx-auto max-w-4xl rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur overflow-hidden">
          <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            <div className="ml-4 text-xs text-zinc-500 font-mono">sirc-client — #general — connected</div>
          </div>
          <div className="p-6 font-mono text-sm text-left space-y-2">
            <div className="text-zinc-500">12:04:01 &lt;system&gt; Connected to irc.libera.chat (TLS)</div>
            <div className="text-zinc-500">12:04:02 &lt;system&gt; NickServ: You are now identified</div>
            <div><span className="text-emerald-500 font-bold">&lt;satchmo&gt;</span> Auto-reconnect saved me during that network blip. Rejoined all channels automatically.</div>
            <div><span className="text-blue-400 font-bold">&lt;user_01&gt;</span> The inline image preview is so clean. No more clicking random links.</div>
            <div className="text-zinc-600 animate-pulse">_</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-zinc-400">Everything you need for modern IRC communication</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<RefreshCw className="text-emerald-400" />}
              title="Smart Auto-Reconnect"
              description="Automatic reconnection with exponential backoff when connections drop. Rejoins all your channels seamlessly."
            />
            <FeatureCard
              icon={<Settings className="text-blue-400" />}
              title="Comprehensive Settings"
              description="6 organized categories for notifications, connection, interface, chat, downloads, and security preferences."
            />
            <FeatureCard
              icon={<Key className="text-purple-400" />}
              title="NickServ Authentication"
              description="Automatic identification with NickServ on connect. Configure different passwords for each network."
            />
            <FeatureCard
              icon={<Image className="text-cyan-400" />}
              title="Inline Image Preview"
              description="Images display directly in chat with lazy loading. No more clicking random links to see shared media."
            />
            <FeatureCard
              icon={<UserSearch className="text-green-400" />}
              title="Visual WHOIS"
              description="Professional WHOIS display with organized sections. See user info, channels, idle time, and more at a glance."
            />
            <FeatureCard
              icon={<ShieldCheck className="text-amber-400" />}
              title="Encrypted Connections"
              description="Enterprise-grade TLS encryption for all connections. Your private chats remain private."
            />
          </div>
        </div>
      </section>

      {/* Who is SIRC For? Section */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who is SIRC For?</h2>
          <p className="text-zinc-400">Built for power users who demand more from their IRC client</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UseCaseCard
            title="File Sharers"
            description="Download media, books, and software via XDCC with built-in queue management."
            icon={<PackageOpen className="text-emerald-400" size={32} />}
          />
          <UseCaseCard
            title="Community Managers"
            description="Moderate multiple IRC channels from one interface with advanced user management."
            icon={<Users className="text-blue-400" size={32} />}
          />
          <UseCaseCard
            title="Developers"
            description="Connect to project IRC channels with protocol-level debugging and logging."
            icon={<Laptop className="text-purple-400" size={32} />}
          />
          <UseCaseCard
            title="Privacy Advocates"
            description="Open-source alternative to Discord/Slack for communities that value privacy."
            icon={<Lock className="text-cyan-400" size={32} />}
          />
        </div>
      </section>


      {/* Roadmap Funding Section */}
      <section id="roadmap" className="relative z-10 py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community Funded Roadmap</h2>
          <p className="text-zinc-400">Donate to unlock advanced features. Features are released to the public repo once funded.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Goal 1: BSV Logging */}
          <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 border-orange-500/20 mb-2">Blockchain Integration</Badge>
                <Globe className="text-zinc-600" />
              </div>
              <CardTitle className="text-xl text-white">On-Chain IRC Logging</CardTitle>
              <CardDescription>Immutable history storage on Bitcoin SV (BSV). Never lose a conversation log again.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm font-mono text-zinc-300">
                <span>Raised: $3,420</span>
                <span>Goal: $5,000</span>
              </div>
              <Progress value={68} className="h-2 bg-zinc-800 [&>*]:bg-orange-500" />
              <p className="text-xs text-zinc-500 pt-2">124 Contributors</p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => setActiveModal('bsvLogging')}
                className="w-full bg-zinc-800 hover:bg-orange-600 hover:text-white text-zinc-300 border border-zinc-700"
              >
                Contribute (BSV)
              </Button>
            </CardFooter>
          </Card>

          {/* Goal 2: XDCC Indexing */}
          <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-2">Search Engine</Badge>
                <Code className="text-zinc-600" />
              </div>
              <CardTitle className="text-xl text-white">XDCC Indexing Suite</CardTitle>
              <CardDescription>Integration with SunXDCC & SkullXDCC. Search and download packets directly from the client UI.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm font-mono text-zinc-300">
                <span>Raised: $1,200</span>
                <span>Goal: $8,000</span>
              </div>
              <Progress value={15} className="h-2 bg-zinc-800 [&>*]:bg-blue-500" />
              <p className="text-xs text-zinc-500 pt-2">42 Contributors</p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => setActiveModal('xdccIndexing')}
                className="w-full bg-zinc-800 hover:bg-blue-600 hover:text-white text-zinc-300 border border-zinc-700"
              >
                Contribute
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400">Everything you need to know about SIRC</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="bg-zinc-950 border border-zinc-800 rounded-xl mb-4 px-6">
            <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
              What is IRC?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              IRC (Internet Relay Chat) is a real-time text messaging protocol. It&apos;s been the backbone of online communities since 1988, offering decentralized, privacy-focused communication.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-zinc-950 border border-zinc-800 rounded-xl mb-4 px-6">
            <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
              What is XDCC?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              XDCC is a file-sharing protocol built on IRC. It allows users to download files from bots using simple commands. SIRC makes this process seamless with a modern interface.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-zinc-950 border border-zinc-800 rounded-xl mb-4 px-6">
            <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
              Is SIRC free?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Yes! SIRC is completely free to download and use. We&apos;re funded through community contributions for advanced features on our roadmap.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-zinc-950 border border-zinc-800 rounded-xl mb-4 px-6">
            <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
              Which IRC networks are supported?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              SIRC supports all standard IRC networks including Libera.Chat, EFnet, DALnet, Undernet, and any custom IRC server you want to connect to.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-zinc-950 border border-zinc-800 rounded-xl mb-4 px-6">
            <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
              Is my data private?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Absolutely. SIRC uses TLS encryption for all connections, and all chat data stays on your device. We don&apos;t collect or store any of your conversations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="bg-zinc-950 border border-zinc-800 rounded-xl mb-4 px-6">
            <AccordionTrigger className="text-white hover:text-emerald-400 hover:no-underline">
              How do I report bugs or request features?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Visit our GitHub repository to submit issues, request features, or contribute to development. We&apos;re actively maintained and love community feedback.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-900/20 border border-emerald-500/50 rounded flex items-center justify-center text-emerald-500">
                  <Terminal size={18} />
                </div>
                <span className="font-mono text-xl font-bold tracking-tighter text-white">SIRC</span>
              </div>
              <p className="text-sm text-zinc-500">Modern IRC client for the decentralized era.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3 text-sm">Product</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#roadmap" className="hover:text-emerald-400 transition-colors">Roadmap</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3 text-sm">Connect</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="https://github.com/rohenaz" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
                <li><a href="https://x.com/wildsatchmo" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">X / Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="/license" className="hover:text-emerald-400 transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8 bg-zinc-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-mono text-zinc-500 text-sm">© 2025 SIRC Systems. All rights reserved.</span>
            </div>
            <div className="flex gap-6 text-sm text-zinc-600">
              <a href="https://github.com/rohenaz" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
              <a href="https://x.com/wildsatchmo" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">X</a>
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
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-colors group">
      <div className="mb-4 p-3 bg-zinc-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 border border-zinc-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function UseCaseCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-all group text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

