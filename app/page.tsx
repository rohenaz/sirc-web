import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Terminal, Share2, ShieldCheck, Zap, Globe, HardDrive, ChevronRight, Code } from "lucide-react";

export default function LandingPage() {
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
          <a href="#" className="hover:text-emerald-400 transition-colors">Docs</a>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" className="font-mono text-xs hover:bg-zinc-900 hover:text-emerald-400">Log In</Button>
          <Button className="bg-white text-black hover:bg-emerald-400 hover:text-black font-semibold transition-all">
            Download Client
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
          v1.0.4 Stable Release
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white bg-clip-text">
          IRC Reimagined for the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Decentralized Era</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A hyper-clean, dark-mode native client for macOS and Windows.
          Engineered for seamless file sharing and built to preserve history.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]">
            <HardDrive className="mr-2 h-5 w-5" /> Download for Windows
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-500">
             Download for Mac
          </Button>
        </div>

        {/* Terminal Mockup */}
        <div className="mt-20 mx-auto max-w-4xl rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur overflow-hidden">
          <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            <div className="ml-4 text-xs text-zinc-500 font-mono">sirc-client — #general — connected</div>
          </div>
          <div className="p-6 font-mono text-sm text-left space-y-2">
            <div className="text-zinc-500">12:04:01 &lt;system&gt; Connected to irc.sirc.network (TLS)</div>
            <div><span className="text-emerald-500 font-bold">&lt;rohenaz&gt;</span> Just pushed the new build. File sharing is instant now.</div>
            <div><span className="text-blue-400 font-bold">&lt;user_01&gt;</span> The UI is incredibly clean. Finally an IRC client that doesn&apos;t look like 1998.</div>
            <div><span className="text-purple-400 font-bold">&lt;bot_x&gt;</span> [SIRC] v1.0.4 ready for download. </div>
            <div className="text-zinc-600 animate-pulse">_</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Share2 className="text-emerald-400" />}
              title="Seamless Transfer"
              description="Direct Client-to-Client (DCC) reimagined. Drag, drop, and transfer huge files without firewall headaches."
            />
            <FeatureCard
              icon={<ShieldCheck className="text-cyan-400" />}
              title="Encrypted by Default"
              description="Enterprise-grade TLS connection management. Your private chats remain private."
            />
            <FeatureCard
              icon={<Zap className="text-amber-400" />}
              title="Ultra-Clean UI"
              description="Shadcn-powered interface. Distraction-free dark mode with customizable syntax highlighting."
            />
          </div>
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
              <Button className="w-full bg-zinc-800 hover:bg-orange-600 hover:text-white text-zinc-300 border border-zinc-700">
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
              <Button className="w-full bg-zinc-800 hover:bg-blue-600 hover:text-white text-zinc-300 border border-zinc-700">
                Contribute
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal size={16} className="text-emerald-600" />
            <span className="font-mono text-zinc-500 text-sm">© 2024 SIRC Systems</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
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
