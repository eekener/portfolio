'use client';

import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

const inputClass =
  'w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground ' +
  'placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20 ' +
  'transition-colors';

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [fields, setFields] = React.useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      });
      if (res.ok) {
        setStatus('success');
        setFields({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="flex flex-col gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-5"
      >
        <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
        <div>
          <p className="font-medium text-foreground">Message sent!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Thanks for reaching out — I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'mt-1 self-start')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden aria-hidden="true">
        <label>
          Do not fill this field: <input name="bot-field" tabIndex={-1} />
        </label>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground/80">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={fields.name}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-medium text-foreground/80">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Something went wrong. Please try again or email me directly.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className={cn(buttonVariants({ size: 'lg' }), 'gap-2 self-start')}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
