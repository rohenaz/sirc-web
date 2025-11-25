'use client'

import { useEffect, useState } from 'react'

interface Message {
  time: string
  user: string
  color: string
  text: string
  isSystem?: boolean
}

const DEMO_MESSAGES: Message[] = [
  {
    time: '23:42:01',
    user: 'system',
    color: 'text-zinc-500',
    text: 'Connected via TLS 1.3',
    isSystem: true,
  },
  {
    time: '23:42:15',
    user: 'neo',
    color: 'text-purple-400',
    text: 'discord went down again lol',
  },
  {
    time: '23:42:23',
    user: 'satchmo',
    color: 'text-emerald-500',
    text: 'meanwhile IRC has been up since 1988',
  },
  {
    time: '23:42:31',
    user: 'anon_42',
    color: 'text-blue-400',
    text: 'based. no phone number required, no data harvesting',
  },
  {
    time: '23:42:45',
    user: 'cypher',
    color: 'text-cyan-400',
    text: 'just grabbed 50GB over XDCC, zero issues',
  },
  {
    time: '23:42:58',
    user: 'ghost',
    color: 'text-orange-400',
    text: 'the BSV logging feature is sick for channel archives',
  },
]

export function TerminalDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    // Reveal messages one by one
    const messageInterval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= DEMO_MESSAGES.length) {
          clearInterval(messageInterval)
          return prev
        }
        return prev + 1
      })
    }, 800)

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => {
      clearInterval(messageInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="mt-20 mx-auto max-w-4xl rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur overflow-hidden animate-glow-ring">
      {/* Window chrome */}
      <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50 hover:bg-red-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50 hover:bg-yellow-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50 hover:bg-green-500 transition-colors cursor-pointer" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 bg-zinc-800/50 rounded-md text-xs text-zinc-500 font-mono border border-zinc-700/50">
            sirc-client - #general - connected
          </div>
        </div>
        <div className="w-16" />
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm text-left space-y-2 min-h-[200px]">
        {DEMO_MESSAGES.slice(0, visibleMessages).map((msg, i) => (
          <div
            key={i}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {msg.isSystem ? (
              <span className="text-zinc-500">
                {msg.time} &lt;{msg.user}&gt; {msg.text}
              </span>
            ) : (
              <>
                <span className="text-zinc-600 text-xs mr-2">{msg.time}</span>
                <span className={`${msg.color} font-bold`}>
                  &lt;{msg.user}&gt;
                </span>
                <span className="text-zinc-300 ml-1">{msg.text}</span>
              </>
            )}
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="flex items-center gap-1 text-zinc-600">
          <span className="text-xs">23:43:12</span>
          <span className="text-emerald-500 font-bold ml-1">&lt;you&gt;</span>
          <span
            className={`ml-1 text-emerald-400 transition-opacity duration-100 ${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            _
          </span>
        </div>
      </div>
    </div>
  )
}
