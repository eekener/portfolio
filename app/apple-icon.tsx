import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0a0a0a',
          borderRadius: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '42px 40px',
          gap: 20,
        }}
      >
        <div style={{ height: 22, background: 'white', borderRadius: 10, width: '100%' }} />
        <div style={{ height: 22, background: 'rgba(255,255,255,0.5)', borderRadius: 10, width: '60%' }} />
        <div style={{ height: 22, background: 'white', borderRadius: 10, width: '100%' }} />
      </div>
    ),
    { ...size },
  );
}
