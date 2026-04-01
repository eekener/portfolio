'use client';

// Temporary diagnostic: shows React rendering errors on-screen
// Remove after the Safari crash is identified and fixed
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          background: '#0a0a0a',
          color: '#f0f0f0',
          fontFamily: 'ui-monospace, monospace',
          padding: '2rem',
          margin: 0,
        }}
      >
        <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem' }}>
          ekener.dev — diagnostic error output
        </p>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
          Page failed to render
        </h1>
        <pre
          style={{
            background: '#1a1a1a',
            border: '1px solid #333',
            padding: '1rem',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '11px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            lineHeight: 1.6,
            color: '#ff6b6b',
          }}
        >
          {error?.message ?? 'Unknown error'}
          {'\n\n'}
          {error?.stack ?? '(no stack)'}
          {error?.digest ? `\n\ndigest: ${error.digest}` : ''}
        </pre>
        <button
          onClick={reset}
          style={{
            marginTop: '1.25rem',
            padding: '0.5rem 1.25rem',
            background: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
