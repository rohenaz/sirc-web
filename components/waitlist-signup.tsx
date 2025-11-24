"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface WaitlistSignupProps {
  className?: string;
  variant?: 'inline' | 'hero';
}

export function WaitlistSignup({ className = '', variant = 'inline' }: WaitlistSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 text-emerald-400 ${className}`}>
        <CheckCircle size={20} />
        <span className="font-medium">You&apos;re on the list! Check your email.</span>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className={`w-full max-w-md mx-auto ${className}`}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 h-14 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-emerald-500"
            />
          </div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            size="lg"
            className="h-14 px-8 bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              'Join Waitlist'
            )}
          </Button>
        </div>
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
        )}
        <p className="mt-3 text-sm text-zinc-500">
          Be the first to know when SIRC launches. No spam, ever.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-emerald-500"
      />
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="bg-emerald-600 hover:bg-emerald-500 text-white"
      >
        {status === 'loading' ? (
          <Loader2 className="animate-spin" size={16} />
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
}
