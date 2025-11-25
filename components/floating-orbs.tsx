'use client'

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large emerald orb - top right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 40%, transparent 70%)',
        }}
      />

      {/* Cyan orb - bottom left */}
      <div
        className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full animate-float-delayed"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
        }}
      />

      {/* Small purple orb - center right */}
      <div
        className="absolute top-1/2 -right-20 w-[300px] h-[300px] rounded-full animate-float"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)',
        }}
      />

      {/* Accent orb - top left */}
      <div
        className="absolute top-40 -left-20 w-[200px] h-[200px] rounded-full animate-pulse-glow"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
