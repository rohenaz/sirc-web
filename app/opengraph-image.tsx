import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'SIRC - Hello IRC, Meet Bitcoin'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09090b',
        backgroundImage:
          'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Top gradient overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background:
            'linear-gradient(to bottom, rgba(16, 185, 129, 0.1), transparent)',
          display: 'flex',
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '2px solid rgba(16, 185, 129, 0.5)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#10b981',
            fontSize: '32px',
            fontFamily: 'monospace',
          }}
        >
          &gt;_
        </div>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '-0.05em',
          }}
        >
          SIRC
          <span style={{ color: '#10b981' }}>_</span>
        </span>
      </div>

      {/* Main heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            margin: '0 0 8px 0',
            lineHeight: 1.1,
          }}
        >
          Hello IRC,
        </h1>
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: 1.1,
            background: 'linear-gradient(to right, #34d399, #22d3ee)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Meet Bitcoin
        </h1>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: '24px',
          color: '#a1a1aa',
          marginTop: '32px',
          maxWidth: '800px',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        No accounts. No tracking. No corporate overlords. Encrypted chat on the
        protocol that built the internet.
      </p>

      {/* Terminal preview box */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '48px',
          width: '700px',
          backgroundColor: 'rgba(9, 9, 11, 0.9)',
          border: '1px solid #27272a',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            borderBottom: '1px solid #27272a',
            backgroundColor: 'rgba(24, 24, 27, 0.5)',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.5)',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'rgba(234, 179, 8, 0.2)',
              border: '1px solid rgba(234, 179, 8, 0.5)',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.5)',
            }}
          />
          <span
            style={{
              marginLeft: '16px',
              fontSize: '12px',
              color: '#71717a',
              fontFamily: 'monospace',
            }}
          >
            sirc-client - #general - connected
          </span>
        </div>
        {/* Terminal content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            fontFamily: 'monospace',
            fontSize: '14px',
            gap: '8px',
          }}
        >
          <span style={{ color: '#71717a' }}>
            23:42:01 &lt;system&gt; Connected via TLS 1.3
          </span>
          <span style={{ color: '#e4e4e7' }}>
            <span style={{ color: '#a78bfa', fontWeight: 'bold' }}>
              &lt;neo&gt;
            </span>{' '}
            discord went down again lol
          </span>
          <span style={{ color: '#e4e4e7' }}>
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>
              &lt;satchmo&gt;
            </span>{' '}
            meanwhile IRC has been up since 1988
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
