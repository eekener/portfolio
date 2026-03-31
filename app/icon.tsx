import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0a0a0a',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '7px 6px',
          gap: 4,
        }}
      >
        <div style={{ height: 4, background: 'white', borderRadius: 2, width: '100%' }} />
        <div style={{ height: 4, background: 'rgba(255,255,255,0.5)', borderRadius: 2, width: '60%' }} />
        <div style={{ height: 4, background: 'white', borderRadius: 2, width: '100%' }} />
      </div>
    ),
    { ...size },
  );
}
