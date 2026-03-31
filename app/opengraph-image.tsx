import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Emre Ekener — WordPress Developer & Designer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 24px',
            borderRadius: '9999px',
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.2)',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          <span
            style={{
              color: '#4ade80',
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '0.08em',
            }}
          >
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          Emre Ekener
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '-0.02em',
            marginBottom: '56px',
          }}
        >
          WordPress Developer &amp; Designer
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.12em',
          }}
        >
          ekener.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
