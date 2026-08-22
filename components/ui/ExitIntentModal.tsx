// components/ui/ExitIntentModal.tsx
'use client'

import { useState, FormEvent } from 'react'
import { X, Mail, ArrowRight, Check } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface ExitIntentModalProps {
  onClose: () => void
}

export default function ExitIntentModal({ onClose }: ExitIntentModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      // Connect to your email service here (same place as your footer form)
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email, source: 'exit-intent' }) })
      await new Promise((r) => setTimeout(r, 600)) // placeholder
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B1F3A]/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-4xl border border-[#0B1F3A]/8 bg-background p-8 shadow-[0_24px_70px_rgba(11,31,58,0.25)] sm:p-10"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full text-[#0B1F3A]/40 transition-colors hover:bg-[#0B1F3A]/5 hover:text-[#0B1F3A]"
        >
          <X className="size-4" />
        </button>

        {status !== 'success' ? (
          <>
            {/* ICON */}
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
              <Mail className="size-6 text-primary" />
            </div>

            {/* HEADING */}
            <h3 className="mt-6 text-3xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A]">
              Don&apos;t leave yet!
            </h3>

            <p className="mt-3 text-base leading-7 text-[#0B1F3A]/65">
              Not ready to talk right now? No pressure — drop your email
              and we&apos;ll stay in touch with useful ideas for when the
              time is right.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-14 w-full rounded-full border border-[#0B1F3A]/12 bg-white px-6 text-sm font-medium text-[#0B1F3A] outline-none placeholder:text-[#0B1F3A]/40 focus:ring-2 focus:ring-primary/40"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Keep Me Posted'}
                {status !== 'loading' && (
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </form>

            <button
              onClick={onClose}
              className="mt-4 w-full text-center text-sm font-semibold text-[#0B1F3A]/45 transition-colors hover:text-[#0B1F3A]/70"
            >
              No thanks, I&apos;ll pass
            </button>

            <p className="mt-4 text-center text-xs text-[#0B1F3A]/45">
              No spam. Just useful updates and ideas.
            </p>
          </>
        ) : (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center py-4 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
              <Check className="size-6 text-primary" />
            </div>
            <h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-[#0B1F3A]">
              You&apos;re on the list!
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#0B1F3A]/60">
              We&apos;ll reach out with useful ideas when the time is right for
              your business.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}