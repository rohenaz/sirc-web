'use client'

import { useState } from 'react'
import { Monitor, MessageSquare, Download, Settings } from 'lucide-react'

interface AppScreenshotProps {
  className?: string
}

export function AppScreenshot({ className = '' }: AppScreenshotProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // The final image path - place your screenshot here
  const screenshotPath = '/images/app-screenshot.png'

  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect behind the screenshot */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

      {/* Main container with perspective */}
      <div
        className="relative rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl transform perspective-1000"
        style={{
          transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Window chrome / title bar */}
        <div className="flex items-center px-4 py-3 bg-zinc-900 border-b border-zinc-800 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-zinc-800 rounded-md text-xs text-zinc-400 font-mono">
              SIRC - #general @ irc.libera.chat
            </div>
          </div>
          <div className="w-16" /> {/* Spacer for symmetry */}
        </div>

        {/* Screenshot or fallback */}
        {!imageError ? (
          <div className="relative">
            {/* Loading shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-zinc-900 animate-shimmer" />
            )}
            <img
              src={screenshotPath}
              alt="SIRC IRC Client Interface"
              className={`w-full h-auto transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          /* Graceful fallback - a stylized mock interface */
          <div className="bg-zinc-950 p-0">
            {/* Mock IRC interface */}
            <div className="flex h-[400px] md:h-[500px]">
              {/* Sidebar - channel list */}
              <div className="w-48 bg-zinc-900/50 border-r border-zinc-800 p-3 hidden md:block">
                <div className="text-xs text-zinc-500 font-mono mb-2 uppercase tracking-wider">
                  Channels
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-emerald-500/10 text-emerald-400 rounded text-sm font-mono">
                    <MessageSquare size={14} />
                    #general
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 hover:bg-zinc-800 rounded text-sm font-mono transition-colors">
                    <MessageSquare size={14} />
                    #dev
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 hover:bg-zinc-800 rounded text-sm font-mono transition-colors">
                    <MessageSquare size={14} />
                    #bitcoin
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 hover:bg-zinc-800 rounded text-sm font-mono transition-colors">
                    <Download size={14} />
                    XDCC Search
                  </div>
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-6 mb-2 uppercase tracking-wider">
                  Direct Messages
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 hover:bg-zinc-800 rounded text-sm font-mono transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    satchmo
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 hover:bg-zinc-800 rounded text-sm font-mono transition-colors">
                    <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                    anon_42
                  </div>
                </div>
              </div>

              {/* Main chat area */}
              <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 p-4 font-mono text-sm space-y-3 overflow-hidden">
                  <div className="text-zinc-600 text-xs">
                    --- Connected to irc.libera.chat ---
                  </div>
                  <div className="animate-fade-in-up">
                    <span className="text-zinc-500 text-xs">14:32</span>
                    <span className="text-purple-400 ml-2 font-semibold">
                      neo
                    </span>
                    <span className="text-zinc-300 ml-2">
                      anyone here running the new client?
                    </span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-100">
                    <span className="text-zinc-500 text-xs">14:33</span>
                    <span className="text-emerald-400 ml-2 font-semibold">
                      satchmo
                    </span>
                    <span className="text-zinc-300 ml-2">
                      yeah, XDCC integration is sick
                    </span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-200">
                    <span className="text-zinc-500 text-xs">14:33</span>
                    <span className="text-blue-400 ml-2 font-semibold">
                      cypher
                    </span>
                    <span className="text-zinc-300 ml-2">
                      finally a modern UI that doesn't suck
                    </span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-300">
                    <span className="text-zinc-500 text-xs">14:34</span>
                    <span className="text-cyan-400 ml-2 font-semibold">
                      ghost
                    </span>
                    <span className="text-zinc-300 ml-2">
                      the auto-reconnect saved me during that network hiccup
                    </span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-400">
                    <span className="text-zinc-500 text-xs">14:35</span>
                    <span className="text-orange-400 ml-2 font-semibold">
                      root
                    </span>
                    <span className="text-zinc-300 ml-2">
                      inline images preview is clutch
                    </span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-500 flex items-center">
                    <span className="text-zinc-500 text-xs">14:36</span>
                    <span className="text-emerald-400 ml-2 font-semibold">
                      you
                    </span>
                    <span className="text-zinc-400 ml-2">
                      <span className="animate-blink">|</span>
                    </span>
                  </div>
                </div>

                {/* Input area */}
                <div className="p-3 border-t border-zinc-800 bg-zinc-900/30">
                  <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-lg border border-zinc-700/50 focus-within:border-emerald-500/50 transition-colors">
                    <span className="text-emerald-500 font-mono text-sm">
                      {'>'}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm">
                      Type a message...
                    </span>
                  </div>
                </div>
              </div>

              {/* User list */}
              <div className="w-40 bg-zinc-900/30 border-l border-zinc-800 p-3 hidden lg:block">
                <div className="text-xs text-zinc-500 font-mono mb-2 uppercase tracking-wider">
                  Online (24)
                </div>
                <div className="space-y-1 text-sm font-mono">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <span>@</span>chanop
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span>+</span>satchmo
                  </div>
                  <div className="text-zinc-400 pl-4">neo</div>
                  <div className="text-zinc-400 pl-4">cypher</div>
                  <div className="text-zinc-400 pl-4">ghost</div>
                  <div className="text-zinc-400 pl-4">anon_42</div>
                  <div className="text-zinc-500 pl-4">...</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating badges */}
      <div className="absolute -right-4 top-20 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-xl animate-float hidden lg:flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
          <Download className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <div className="text-xs text-zinc-400">XDCC Download</div>
          <div className="text-sm text-white font-mono">ubuntu-24.04.iso</div>
        </div>
      </div>

      <div className="absolute -left-4 bottom-32 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-xl animate-float-delayed hidden lg:flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
          <Settings className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <div className="text-xs text-zinc-400">Auto-reconnect</div>
          <div className="text-sm text-emerald-400 font-mono">Active</div>
        </div>
      </div>
    </div>
  )
}
