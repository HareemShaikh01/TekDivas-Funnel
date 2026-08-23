'use client'

import { useExitIntent } from "@/hooks/useExitIntent";
import ExitIntentModal from "@/components/ui/ExitIntentModal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Script from "next/script";

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Globe2,
  HeartHandshake,
  MessageCircle,
  MousePointer2,
  Quote,
  Star,
  Wrench,
  Calendar,
  Clock,
  Mail,
  SearchX,
  ShieldQuestion,
  UsersRound,
  Sparkles,
  Eye,
  Rocket,
  Search,
  Headphones,
  Check,
} from 'lucide-react'

const CTA = "Let's Discuss the Endless Opportunities"

const problems = [
  {
    icon: Globe2,
    title: 'Customers can’t find you',
    copy: 'When people search for what you offer, your business should be there waiting for them.',
  },
  {
    icon: MousePointer2,
    title: 'Customers can’t trust you',
    copy: 'Your online presence is often the first impression people have of your business. Make it count.',
  },
  {
    icon: MessageCircle,
    title: 'Customers can’t reach you',
    copy: 'Give interested customers a clear, simple way to learn more, get in touch, and take the next step.',
  },
]

const offer = [
  {
    icon: Globe2,
    title: 'Website',
    copy: 'Professionally designed and built, ready to launch with your story front and center.',
  },
  {
    icon: Bot,
    title: 'Smart Features',
    copy: 'AI chat, automated booking, and thoughtful workflows built around your business.',
  },
  {
    icon: Wrench,
    title: 'Ongoing Support',
    copy: 'We stay with you after launch for updates, fixes, and friendly help when you need it.',
  },
]

const faqs = [
  [
    'I do not know what I need.',
    'That is exactly where we start. We will ask the right questions, make clear recommendations, and handle the technical decisions for you.',
  ],
  [
    'How much does it cost?',
    'Every business is different, so we shape the package around your goals and needs. Book a quick call and we will give you a clear, no-pressure plan.',
  ],
  [
    'How long does it take?',
    'Most launches move from first call to a polished website in a few weeks. We keep the process focused, simple, and collaborative.',
  ],
  [
    'What if I need changes later?',
    'You will never be left on your own. Ongoing support means we can keep your site current as your business grows.',
  ],
]

function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function Logo() {
  return (
    <a
      href="#top"
      className="group flex items-center"
      aria-label="TekDivas home"
    >
      <img
        src="/logo (1)-Photoroom.png"
        alt="TekDivas"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
      />
    </a>
  )
}

export default function Page() {
  const { show, close } = useExitIntent({ delay: 5000 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add('is-visible'),
        ),
      { threshold: 0.12 },
    )

    document
      .querySelectorAll('.reveal')
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* =========================================================
          ROBOTO
      ========================================================= */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <main
        id="top"
        className="overflow-hidden bg-background font-['Roboto',sans-serif]"
      >
        {show && <ExitIntentModal onClose={close} />}

        {/* =========================================================
            FIXED DECORATIVE CIRCLES
        ========================================================= */}
        {/* Top Left Circle */}
        <div className="fixed -left-32 -top-32 z-0 size-96 rounded-full bg-cyan-400/20 pointer-events-none" />

        {/* Bottom Right Circle */}
        <div className="fixed -bottom-32 -right-32 z-0 size-96 rounded-full bg-cyan-400/20 pointer-events-none" />

        {/* =========================================================
            NAVBAR
        ========================================================= */}
        <nav className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between rounded-2xl border border-[#12304F] bg-[#061426]/95 px-3 py-2.5 shadow-xl shadow-[#061426]/10 backdrop-blur-xl sm:px-4 sm:py-3 lg:px-5">

              <Logo />

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm lg:px-5"
              >
                <span className="hidden xs:inline">
                  Get Your Free Business Audit
                </span>

                <span className="xs:hidden">
                  Free Audit
                </span>

                <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
              </a>

            </div>
          </div>
        </nav>

        {/* =========================================================
                HERO
            ========================================================= */}
        <section className="relative mx-auto flex min-h-[60vh] max-w-[1600px] items-center px-4 pb-16 pt-20 md:px-34 md:pb-8 md:pt-24">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-32 top-24 size-96 rounded-full bg-accent/50 blur-3xl" />

          <div className="relative z-10 grid w-full items-center gap-25 lg:grid-cols-2 lg:gap-20 xl:gap-24">

            {/* =========================================================
        LEFT — HERO CONTENT
    ========================================================= */}

            <div className="pl-0 text-center lg:pl-4 lg:text-left">

              <Reveal>
                <h1 className="mx-auto max-w-2xl text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0B1F3A] sm:text-4xl md:text-5xl lg:text-[clamp(3.5rem,4.5vw,5rem)] lg:leading-[0.98]">

                  <span className="mr-[0.15em] inline-block sm:mr-[0.25em]">
                    <span className="text-[1.06em]">G</span>et
                  </span>

                  <span className="mr-[0.15em] inline-block sm:mr-[0.25em]">
                    <span className="text-[1.06em]">Y</span>our
                  </span>

                  <span className="mr-[0.15em] inline-block text-primary sm:mr-[0.25em]">
                    <span className="text-[1.06em]">B</span>usiness
                  </span>

                  <span className="inline-block text-primary">
                    <span className="text-[1.06em]">O</span>nline
                  </span>

                  <br />

                  <span className="mr-[0.15em] inline-block sm:mr-[0.25em]">
                    <span className="text-[1.06em]">W</span>ith
                  </span>

                  <span className="mr-[0.15em] inline-block sm:mr-[0.25em]">
                    <span className="text-[1.06em]">a</span>
                  </span>

                  <span className="inline-block">
                    <span className="text-[1.06em]">C</span>omplete
                  </span>

                  <br />

                  <span className="mr-[0.15em] inline-block text-primary sm:mr-[0.25em]">
                    <span className="text-[1.06em]">W</span>eb
                  </span>

                  <span className="inline-block text-primary">
                    <span className="text-[1.06em]">P</span>resence
                  </span>

                </h1>
              </Reveal>


              {/* =======================================================
          SUBTEXT + CTA
      ======================================================= */}

              <Reveal className="mt-4 sm:mt-6">

                <p className="flex flex-wrap items-center justify-center gap-y-1.5 text-sm font-medium text-[#0B1F3A]/70 sm:gap-y-2 sm:text-base lg:justify-start lg:text-lg">

                  <span>Websites</span>

                  <span className="px-1.5 text-primary sm:px-2">
                    ·
                  </span>

                  <span>Smart Features</span>

                  <span className="px-1.5 text-primary sm:px-2">
                    ·
                  </span>

                  <span>Ongoing Support</span>

                </p>


                <a
                  href="#contact"
                  className="group mt-4 inline-flex max-w-full items-center gap-2 rounded-full bg-primary px-4 py-3 text-xs font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-2xl sm:mt-5 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-sm lg:px-6 lg:py-4 lg:text-base"
                >

                  Get your FREE business audit right now

                  <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-5" />

                </a>

              </Reveal>

            </div>


            {/* =========================================================
        RIGHT — HERO IMAGE
    ========================================================= */}

            <div className="relative flex w-full justify-center lg:justify-end">
              <div className="w-full max-w-3xl scale-155 lg:scale-200">
                <DotLottieReact
                  src="https://lottie.host/ba30c20f-f73b-4efc-a4ea-5020e198ca4b/uqfdJDiCqV.lottie"
                  loop
                  autoplay
                  className="w-full"
                />
              </div>
            </div>
          </div>

        </section>


        {/* =========================================================
                PROBLEMS
            ========================================================= */}

        <section className="overflow-hidden py-16 sm:py-20 lg:py-24 pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

            {/* SECTION INTRO */}
            <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
              <h2 className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#0B1F3A] sm:text-4xl md:text-5xl lg:text-6xl">
                Your Business Deserves To Be Found.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#0B1F3A]/65 sm:mt-5 sm:text-lg md:text-xl lg:leading-8">
                The customers you never hear from are the ones you never get to win.
                Because having no Website simply means...
              </p>
            </Reveal>

            {/* =====================================================
    THREE CARDS + BUBBLY FLOW
====================================================== */}
            <div className="mx-auto max-w-5xl">

              {/* DESKTOP FLOW */}
              <div className="hidden items-center lg:grid lg:grid-cols-[1fr_60px_1fr_60px_1fr] xl:grid-cols-[1fr_76px_1fr_76px_1fr]">

                {/* =================================================
        CARD 01
    ================================================== */}
                <Reveal>
                  <article className="group overflow-hidden rounded-3xl border border-[#0B1F3A]/8 bg-white shadow-[0_10px_32px_rgba(11,31,58,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(11,31,58,0.10)]">

                    {/* ILLUSTRATION */}
                    <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-3xl bg-[#EAFBFD] sm:h-55 md:h-60">

                      <div className="absolute right-[-15%] top-[4%] h-[115%] w-[110%] rounded-full bg-primary/10" />

                      <div className="absolute right-[14%] top-[14%] size-3 rounded-full border-[3px] border-primary/35 sm:size-4" />

                      <div className="absolute right-[7%] top-[34%] size-10 rounded-full border-[6px] border-white bg-primary/5 sm:size-12" />

                      <div className="absolute right-[17%] top-[11%] grid grid-cols-3 gap-1 opacity-50 sm:gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span
                            key={i}
                            className="size-1 rounded-full bg-primary sm:size-1.5"
                          />
                        ))}
                      </div>

                      <img
                        src="/problem1.png"
                        alt="Person representing customers who cannot find your business"
                        className="absolute bottom-0 left-1/2 z-10 h-48 w-auto max-w-[95%] -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-55 md:h-60"
                      />
                    </div>

                    {/* HEADING */}
                    <div className="px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
                      <h3 className="text-xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A] sm:text-2xl lg:text-[1.65rem]">
                        People can&apos;t
                        <span className="block text-primary">
                          find you.
                        </span>
                      </h3>

                      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-5 sm:w-20" />
                    </div>
                  </article>
                </Reveal>


                {/* =================================================
        ARROW 01 → 02
    ================================================== */}
                <div className="flex items-center justify-center">

                  <svg
                    viewBox="0 0 76 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full overflow-visible"
                  >

                    {/* small bubbles */}
                    <circle
                      cx="13"
                      cy="25"
                      r="4"
                      className="fill-primary/25"
                    />

                    <circle
                      cx="23"
                      cy="17"
                      r="2.5"
                      className="fill-primary/45"
                    />

                    <circle
                      cx="31"
                      cy="59"
                      r="3"
                      className="fill-primary/25"
                    />

                    {/* bubbly curved arrow */}
                    <path
                      d="M3 43 C18 17, 43 17, 62 40"
                      className="stroke-primary"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* arrow head */}
                    <path
                      d="M54 31 L67 41 L54 51"
                      className="stroke-primary"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* final bubble */}
                    <circle
                      cx="72"
                      cy="41"
                      r="3.5"
                      className="fill-primary/25"
                    />

                  </svg>

                </div>


                {/* =================================================
        CARD 02
    ================================================== */}
                <Reveal>
                  <article className="group overflow-hidden rounded-3xl border border-[#0B1F3A]/8 bg-white shadow-[0_10px_32px_rgba(11,31,58,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(11,31,58,0.10)]">

                    {/* ILLUSTRATION */}
                    <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-3xl bg-[#EAFBFD] sm:h-55 md:h-60">

                      <div className="absolute right-[-15%] top-[4%] h-[115%] w-[110%] rounded-full bg-primary/10" />

                      <div className="absolute right-[14%] top-[14%] size-3 rounded-full border-[3px] border-primary/35 sm:size-4" />

                      <div className="absolute right-[7%] top-[34%] size-10 rounded-full border-[6px] border-white bg-primary/5 sm:size-12" />

                      <div className="absolute right-[17%] top-[11%] grid grid-cols-3 gap-1 opacity-50 sm:gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span
                            key={i}
                            className="size-1 rounded-full bg-primary sm:size-1.5"
                          />
                        ))}
                      </div>

                      <img
                        src="/problem2.png"
                        alt="Person representing customers who do not know who to trust"
                        className="absolute bottom-0 left-1/2 z-10 h-48 w-auto max-w-[95%] -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-55 md:h-60"
                      />
                    </div>

                    {/* HEADING */}
                    <div className="px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
                      <h3 className="text-xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A] sm:text-2xl lg:text-[1.65rem]">
                        People don&apos;t know
                        <span className="block text-primary">
                          who to trust.
                        </span>
                      </h3>

                      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-5 sm:w-20" />
                    </div>
                  </article>
                </Reveal>


                {/* =================================================
        ARROW 02 → 03
    ================================================== */}
                <div className="flex items-center justify-center">

                  <svg
                    viewBox="0 0 76 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full overflow-visible"
                  >

                    {/* small bubbles */}
                    <circle
                      cx="13"
                      cy="55"
                      r="4"
                      className="fill-primary/25"
                    />

                    <circle
                      cx="23"
                      cy="63"
                      r="2.5"
                      className="fill-primary/45"
                    />

                    <circle
                      cx="31"
                      cy="21"
                      r="3"
                      className="fill-primary/25"
                    />

                    {/* bubbly curved arrow */}
                    <path
                      d="M3 37 C18 63, 43 63, 62 40"
                      className="stroke-primary"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* arrow head */}
                    <path
                      d="M54 29 L67 39 L54 49"
                      className="stroke-primary"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* final bubble */}
                    <circle
                      cx="72"
                      cy="39"
                      r="3.5"
                      className="fill-primary/25"
                    />

                  </svg>

                </div>


                {/* =================================================
        CARD 03
    ================================================== */}
                <Reveal>
                  <article className="group overflow-hidden rounded-3xl border border-[#0B1F3A]/8 bg-white shadow-[0_10px_32px_rgba(11,31,58,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(11,31,58,0.10)]">

                    {/* ILLUSTRATION */}
                    <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-3xl bg-[#EAFBFD] sm:h-55 md:h-60">

                      <div className="absolute right-[-15%] top-[4%] h-[115%] w-[110%] rounded-full bg-primary/10" />

                      <div className="absolute right-[14%] top-[14%] size-3 rounded-full border-[3px] border-primary/35 sm:size-4" />

                      <div className="absolute right-[7%] top-[34%] size-10 rounded-full border-[6px] border-white bg-primary/5 sm:size-12" />

                      <div className="absolute right-[17%] top-[11%] grid grid-cols-3 gap-1 opacity-50 sm:gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span
                            key={i}
                            className="size-1 rounded-full bg-primary sm:size-1.5"
                          />
                        ))}
                      </div>

                      <img
                        src="/problem3.png"
                        alt="Person representing customers choosing another business"
                        className="absolute bottom-0 left-1/2 z-10 h-48 w-auto max-w-[95%] -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-55 md:h-60"
                      />
                    </div>

                    {/* HEADING */}
                    <div className="px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
                      <h3 className="text-xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A] sm:text-2xl lg:text-[1.65rem]">
                        People move on
                        <span className="block text-primary">
                          to someone else.
                        </span>
                      </h3>

                      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-5 sm:w-20" />
                    </div>
                  </article>
                </Reveal>

              </div>


              {/* =====================================================
      MOBILE — NORMAL STACK
  ====================================================== */}
              <div className="grid gap-6 sm:gap-8 lg:hidden">

                {/* CARD 01 */}
                <Reveal>
                  <article className="group overflow-hidden rounded-3xl border border-[#0B1F3A]/8 bg-white shadow-[0_10px_32px_rgba(11,31,58,0.06)]">

                    <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-3xl bg-[#EAFBFD] sm:h-55 md:h-60">

                      <div className="absolute right-[-15%] top-[4%] h-[115%] w-[110%] rounded-full bg-primary/10" />

                      <div className="absolute right-[14%] top-[14%] size-3 rounded-full border-[3px] border-primary/35 sm:size-4" />

                      <div className="absolute right-[7%] top-[34%] size-10 rounded-full border-[6px] border-white bg-primary/5 sm:size-12" />

                      <div className="absolute right-[17%] top-[11%] grid grid-cols-3 gap-1 opacity-50 sm:gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span key={i} className="size-1 rounded-full bg-primary sm:size-1.5" />
                        ))}
                      </div>

                      <img
                        src="/problem1.png"
                        alt="Person representing customers who cannot find your business"
                        className="absolute bottom-0 left-1/2 z-10 h-48 w-auto max-w-[95%] -translate-x-1/2 object-contain sm:h-55 md:h-60"
                      />
                    </div>

                    <div className="px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
                      <h3 className="text-xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A] sm:text-2xl">
                        People can&apos;t
                        <span className="block text-primary">find you.</span>
                      </h3>

                      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-5 sm:w-20" />
                    </div>
                  </article>
                </Reveal>


                {/* CARD 02 */}
                <Reveal>
                  <article className="group overflow-hidden rounded-3xl border border-[#0B1F3A]/8 bg-white shadow-[0_10px_32px_rgba(11,31,58,0.06)]">

                    <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-3xl bg-[#EAFBFD] sm:h-55 md:h-60">

                      <div className="absolute right-[-15%] top-[4%] h-[115%] w-[110%] rounded-full bg-primary/10" />

                      <div className="absolute right-[14%] top-[14%] size-3 rounded-full border-[3px] border-primary/35 sm:size-4" />

                      <div className="absolute right-[7%] top-[34%] size-10 rounded-full border-[6px] border-white bg-primary/5 sm:size-12" />

                      <div className="absolute right-[17%] top-[11%] grid grid-cols-3 gap-1 opacity-50 sm:gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span key={i} className="size-1 rounded-full bg-primary sm:size-1.5" />
                        ))}
                      </div>

                      <img
                        src="/problem2.png"
                        alt="Person representing customers who do not know who to trust"
                        className="absolute bottom-0 left-1/2 z-10 h-48 w-auto max-w-[95%] -translate-x-1/2 object-contain sm:h-55 md:h-60"
                      />
                    </div>

                    <div className="px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
                      <h3 className="text-xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A] sm:text-2xl">
                        People don&apos;t know
                        <span className="block text-primary">who to trust.</span>
                      </h3>

                      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-5 sm:w-20" />
                    </div>
                  </article>
                </Reveal>


                {/* CARD 03 */}
                <Reveal>
                  <article className="group overflow-hidden rounded-3xl border border-[#0B1F3A]/8 bg-white shadow-[0_10px_32px_rgba(11,31,58,0.06)]">

                    <div className="relative mx-3 mt-3 h-48 overflow-hidden rounded-3xl bg-[#EAFBFD] sm:h-55 md:h-60">

                      <div className="absolute right-[-15%] top-[4%] h-[115%] w-[110%] rounded-full bg-primary/10" />

                      <div className="absolute right-[14%] top-[14%] size-3 rounded-full border-[3px] border-primary/35 sm:size-4" />

                      <div className="absolute right-[7%] top-[34%] size-10 rounded-full border-[6px] border-white bg-primary/5 sm:size-12" />

                      <div className="absolute right-[17%] top-[11%] grid grid-cols-3 gap-1 opacity-50 sm:gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span key={i} className="size-1 rounded-full bg-primary sm:size-1.5" />
                        ))}
                      </div>

                      <img
                        src="/problem3.png"
                        alt="Person representing customers choosing another business"
                        className="absolute bottom-0 left-1/2 z-10 h-48 w-auto max-w-[95%] -translate-x-1/2 object-contain sm:h-55 md:h-60"
                      />
                    </div>

                    <div className="px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
                      <h3 className="text-xl font-black leading-[1.05] tracking-[-0.035em] text-[#0B1F3A] sm:text-2xl">
                        People move on
                        <span className="block text-primary">to someone else.</span>
                      </h3>

                      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-5 sm:w-20" />
                    </div>
                  </article>
                </Reveal>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================= */}
        <section id="services" className="overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

            {/* =====================================================
        INTRO
    ====================================================== */}
            <Reveal className="mx-auto max-w-3xl text-center">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.22em]">
                One complete online package
              </p>

              <h2 className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#0B1F3A] sm:text-4xl md:text-5xl lg:text-6xl">
                Not just a website.
                <span className="block text-primary">
                  Your whole online presence.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#0B1F3A]/65 sm:mt-5 sm:text-lg md:text-xl lg:leading-8">
                We make sure your business is visible, credible, and always online, so your only problem? Too many customers.
              </p>

            </Reveal>


            {/* =====================================================
        PACKAGE BLUEPRINT
    ====================================================== */}
            <Reveal className="mt-10 sm:mt-14 lg:mt-16">

              <div className="relative overflow-hidden rounded-3xl bg-[#0B1F3A] px-4 py-6 shadow-[0_24px_70px_rgba(11,31,58,0.14)] sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-14 xl:py-12">

                {/* BACKGROUND DECORATION */}
                <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-primary/5 blur-3xl" />


                {/* =================================================
            THREE PART PACKAGE
        ================================================== */}
                <div className="relative mt-6 sm:mt-8 lg:mt-10">

                  {/* CONNECTION LINE */}
                  <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-white/10 lg:block" />

                  <div className="grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-12">

                    {/* =================================================
01 WEBSITE
================================================= */}
                    <div className="relative">

                      <div className="relative z-10 mb-4 flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-[#0B1F3A] shadow-[0_0_0_6px_rgba(11,31,58,1)] sm:mb-5 sm:size-18 lg:mb-6 lg:size-20">

                        <span className="text-lg font-black text-primary sm:text-xl lg:text-2xl">
                          01
                        </span>

                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <Globe2 className="size-4 text-primary sm:size-5" />

                        <h4 className="text-xl font-black text-white sm:text-2xl">
                          Website
                        </h4>
                      </div>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/55 sm:mt-3 sm:text-base sm:leading-7">
                        A clean, professional website that works smoothly on every screen and
                        makes it easy for people to take the next step.
                      </p>

                      <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5 lg:mt-6">

                        {[
                          "Custom design",
                          "Works on every screen",
                          "Clear next steps",
                          "Fast & smooth experience",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs font-medium text-white/70 sm:gap-3 sm:text-sm"
                          >
                            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-primary/15 sm:size-5">
                              <Check className="size-2.5 text-primary sm:size-3" />
                            </span>

                            {item}
                          </div>
                        ))}

                      </div>

                    </div>


                    {/* =================================================
02 SEO
================================================= */}
                    <div className="relative">

                      <div className="relative z-10 mb-4 flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-[#0B1F3A] shadow-[0_0_0_6px_rgba(11,31,58,1)] sm:mb-5 sm:size-18 lg:mb-6 lg:size-20">

                        <span className="text-lg font-black text-primary sm:text-xl lg:text-2xl">
                          02
                        </span>

                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <Search className="size-4 text-primary sm:size-5" />

                        <h4 className="text-xl font-black text-white sm:text-2xl">
                          SEO
                        </h4>
                      </div>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/55 sm:mt-3 sm:text-base sm:leading-7">
                        We set your website up to be easier for Google to understand and easier
                        for the right people to find.
                      </p>

                      <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5 lg:mt-6">

                        {[
                          "SEO-ready website",
                          "Search-friendly content",
                          "Technical SEO setup",
                          "Google-ready structure",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs font-medium text-white/70 sm:gap-3 sm:text-sm"
                          >
                            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-primary/15 sm:size-5">
                              <Check className="size-2.5 text-primary sm:size-3" />
                            </span>

                            {item}
                          </div>
                        ))}

                      </div>

                    </div>


                    {/* =================================================
03 ONGOING SUPPORT
================================================= */}
                    <div className="relative">

                      <div className="relative z-10 mb-4 flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-[#0B1F3A] shadow-[0_0_0_6px_rgba(11,31,58,1)] sm:mb-5 sm:size-18 lg:mb-6 lg:size-20">

                        <span className="text-lg font-black text-primary sm:text-xl lg:text-2xl">
                          03
                        </span>

                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <Headphones className="size-4 text-primary sm:size-5" />

                        <h4 className="text-xl font-black text-white sm:text-2xl">
                          Ongoing Support
                        </h4>
                      </div>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/55 sm:mt-3 sm:text-base sm:leading-7">
                        Need a change after launch? We stay available to keep your website
                        updated, working well, and moving forward.
                      </p>

                      <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5 lg:mt-6">

                        {[
                          "Website updates",
                          "Quick technical help",
                          "Performance improvements",
                          "Help when you need it",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs font-medium text-white/70 sm:gap-3 sm:text-sm"
                          >
                            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-primary/15 sm:size-5">
                              <Check className="size-2.5 text-primary sm:size-3" />
                            </span>

                            {item}
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </Reveal>


            {/* =====================================================
        BOTTOM CTA
    ====================================================== */}
            <Reveal className="mx-auto mt-12 max-w-3xl text-center sm:mt-14 lg:mt-16 xl:mt-20">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.2em]">
                Ready when you are
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#0B1F3A] sm:mt-3 sm:text-3xl md:text-4xl">
                Let&apos;s make your business
                <span className="text-primary"> easier to find.</span>
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#0B1F3A]/60 sm:mt-4 sm:text-base sm:leading-7">
                Tell us what you do, and we&apos;ll figure out what your business needs
                to get online properly.
              </p>

              <a
                href="#contact"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(11,31,58,0.18)] sm:mt-6 sm:gap-3 sm:px-6 sm:py-3.5 lg:mt-7 lg:px-7 lg:py-4"
              >
                Start the conversation

                <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
              </a>

            </Reveal>

          </div>
        </section>


        {/* =========================================================
            TESTIMONIALS
        ========================================================= */}
        <section className="bg-secondary py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <Reveal>
              <p className="max-w-2xl text-white text-3xl tracking-tight sm:text-4xl md:text-5xl">
                This is what our <span className="text-primary">previous clients</span> say about us.
              </p>
            </Reveal>

            <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">

              {[
                {
                  quote:
                    "I kept putting my website off because I thought it would be a huge headache. TekDivas made it surprisingly simple. They handled everything and I finally have something I'm genuinely proud to share.",
                  name: "Maya",
                  role: "Wellness business",
                  initials: "M",
                },
                {
                  quote:
                    "What I loved most was that they actually listened. They understood what I wanted my business to feel like and turned that into a website that feels like me.",
                  name: "Jordan",
                  role: "Local consultant",
                  initials: "J",
                },
                {
                  quote:
                    "I never felt lost during the process. They explained things clearly, kept me updated, and took care of the details I didn't even know I needed to think about.",
                  name: "Aisha",
                  role: "Creative studio",
                  initials: "A",
                },
              ].map((testimonial, i) => (
                <Reveal
                  key={testimonial.name}
                  className={`relative flex h-full ${i !== 1 ? "lg:mt-0" : ""
                    }`}
                >
                  <div
                    className={`group relative flex w-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-5 transition-all duration-300 sm:p-6 lg:p-7 ${i === 1
                      ? "shadow-[0_20px_50px_rgba(11,31,58,0.16)] hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(11,31,58,0.22)]"
                      : "shadow-[0_14px_35px_rgba(11,31,58,0.10)] hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(11,31,58,0.16)]"
                      }`}
                  >

                    {/* TOP ACCENT */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-primary/70" />

                    {/* HEADER */}
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 sm:size-11 lg:size-12">
                        <Quote className="size-4 text-primary sm:size-4.5 lg:size-5" />
                      </div>

                      <div className="flex gap-0.5 pt-1.5 text-primary sm:gap-1 sm:pt-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className="size-3 fill-current sm:size-3.5 lg:size-4"
                          />
                        ))}
                      </div>
                    </div>

                    {/* TESTIMONIAL */}
                    <p className="mt-4 text-base font-medium leading-7 text-foreground sm:mt-5 lg:mt-7 lg:text-lg lg:leading-8">
                      “{testimonial.quote}”
                    </p>

                    {/* CLIENT DETAILS — ALWAYS AT BOTTOM */}
                    <div className="mt-auto pt-6 sm:pt-8 lg:pt-10">
                      <div className="flex items-center gap-3 border-t border-border pt-4 sm:pt-5 lg:pt-6">

                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-xs font-black text-primary sm:size-10 sm:text-sm lg:size-11">
                          {testimonial.initials}
                        </div>

                        <div>
                          <p className="text-sm font-bold sm:text-base">
                            {testimonial.name}
                          </p>

                          <p className="text-xs text-muted-foreground sm:text-sm">
                            {testimonial.role}
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                </Reveal>
              ))}

            </div>

          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================= */}
        <section id="process" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* HEADER */}
            <Reveal className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.22em]">
                Simple from start to finish
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:mt-3 sm:text-4xl md:text-5xl">
                How it works.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7 lg:mt-5 lg:text-lg">
                You tell us what you need. We handle the work and keep you involved
                every step of the way.
              </p>
            </Reveal>

            {/* =========================================================
        DESKTOP PROCESS
    ========================================================== */}
            <div className="relative mt-12 hidden md:block lg:mt-16 xl:mt-20">

              {/* MAIN HORIZONTAL LINE */}
              <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-border" />

              <div className="grid grid-cols-4">

                {[
                  {
                    number: "01",
                    title: "Tell Us About Your Business",
                    copy:
                      "We learn about your business, your goals, and what you want your online presence to achieve.",
                    icon: MessageCircle,
                  },
                  {
                    number: "02",
                    title: "We Build It",
                    copy:
                      "We turn everything into a professional online presence designed around your business.",
                    icon: Sparkles,
                  },
                  {
                    number: "03",
                    title: "You Review",
                    copy:
                      "You see the work, share your thoughts, and we make the final touches together.",
                    icon: Eye,
                  },
                  {
                    number: "04",
                    title: "Go Live",
                    copy:
                      "Everything is ready. Your new online presence is live and ready to work for you.",
                    icon: Rocket,
                  },
                ].map(({ number, title, copy, icon: Icon }, index) => {

                  const isTop = index % 2 === 0;

                  return (
                    <Reveal
                      key={number}
                      className="relative h-100 sm:h-110 lg:h-120 xl:h-125"
                    >

                      {/* STEP CONTENT */}
                      <div
                        className={`absolute left-1/2 w-full max-w-52 -translate-x-1/2 text-center ${isTop
                          ? "bottom-[calc(50%+50px)] sm:bottom-[calc(50%+55px)] lg:bottom-[calc(50%+60px)] xl:bottom-[calc(50%+65px)]"
                          : "top-[calc(50%+50px)] sm:top-[calc(50%+55px)] lg:top-[calc(50%+60px)] xl:top-[calc(50%+65px)]"
                          }`}
                      >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:tracking-[0.2em]">
                          Step {number}
                        </p>

                        <h3 className="mt-1.5 text-base font-black leading-tight sm:mt-2 sm:text-lg lg:text-xl xl:text-2xl">
                          {title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-muted-foreground sm:mt-2.5 sm:text-sm sm:leading-6 lg:mt-3 lg:text-base">
                          {copy}
                        </p>
                      </div>

                      {/* CENTER NODE */}
                      <div className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-background bg-primary shadow-[0_10px_35px_rgba(11,31,58,0.18)] sm:size-18 lg:size-20">
                        <Icon className="size-5 text-primary-foreground sm:size-6 lg:size-7" />
                      </div>

                    </Reveal>
                  );
                })}

              </div>
            </div>

            {/* =========================================================
        MOBILE PROCESS
    ========================================================== */}
            <div className="relative mt-10 md:hidden">

              {/* VERTICAL LINE */}
              <div className="absolute bottom-6 left-6 top-6 w-px bg-border sm:left-7" />

              <div className="space-y-10 sm:space-y-12">

                {[
                  {
                    number: "01",
                    title: "Tell Us About Your Business",
                    copy:
                      "We learn about your business, your goals, and what you want your online presence to achieve.",
                    icon: MessageCircle,
                  },
                  {
                    number: "02",
                    title: "We Build It",
                    copy:
                      "We turn everything into a professional online presence designed around your business.",
                    icon: Sparkles,
                  },
                  {
                    number: "03",
                    title: "You Review",
                    copy:
                      "You see the work, share your thoughts, and we make the final touches together.",
                    icon: Eye,
                  },
                  {
                    number: "04",
                    title: "Go Live",
                    copy:
                      "Everything is ready. Your new online presence is live and ready to work for you.",
                    icon: Rocket,
                  },
                ].map(({ number, title, copy, icon: Icon }) => (
                  <Reveal
                    key={number}
                    className="relative flex gap-4 sm:gap-5"
                  >

                    {/* MOBILE NODE */}
                    <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary shadow-[0_8px_25px_rgba(11,31,58,0.15)] sm:size-16">
                      <Icon className="size-4 text-primary-foreground sm:size-5" />
                    </div>

                    {/* CONTENT */}
                    <div className="pt-0.5 sm:pt-1">

                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.18em]">
                        Step {number}
                      </p>

                      <h3 className="mt-0.5 text-base font-black leading-tight sm:mt-1 sm:text-lg">
                        {title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground sm:mt-2 sm:text-sm sm:leading-6">
                        {copy}
                      </p>

                    </div>

                  </Reveal>
                ))}

              </div>
            </div>

          </div>
        </section>



        {/* =========================================================
    CONTACT CTA
========================================================= */}

        <section
          id="contact"
          className="relative overflow-hidden bg-primary px-8 py-6 text-primary-foreground md:px-22 sm:py-8 lg:py-10 xl:py-12"
        >
          {/* DECORATIVE BLOBS */}
          {/* <div className="absolute -left-24 top-10 size-72 rounded-[45%_55%_60%_40%] bg-white/10 blur-sm" /> */}
          {/* <div className="absolute -right-20 bottom-0 size-80 rounded-[55%_45%_40%_60%] bg-[#0B1F3A]/10" /> */}

          <div className="relative z-10 mx-auto max-w-6xl">

            {/* HEADER */}
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex size-10 items-center justify-center rounded-2xl bg-white/15 sm:size-11 lg:size-12">
                <Calendar className="size-5 text-primary-foreground sm:size-5.5 lg:size-6" />
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:mt-5 sm:text-4xl md:text-5xl">
                Ready when you are.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
                Pick a time that works for you, or reach out directly. We&apos;ll
                figure out the best next step for your business.
              </p>
            </Reveal>

            {/* BOOKING AREA */}
            <div className="mt-8 grid items-center gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[3fr_2fr] lg:gap-10 xl:gap-12">

              {/* LEFT — TEXT + CONTACT OPTIONS */}
              <Reveal className="text-center lg:text-left">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/60 sm:text-sm sm:tracking-[0.18em]">
                  Let&apos;s talk
                </p>

                <h3 className="mt-1.5 text-2xl font-black sm:mt-2 sm:text-3xl lg:text-4xl">
                  Have a project in mind?
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-primary-foreground/75 sm:mt-3 sm:text-base sm:leading-7">
                  Book a quick 30-minute call and tell us what you&apos;re looking
                  to build. No pressure, no complicated process.
                </p>

                {/* CONTACT BUTTONS */}
                <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:gap-3 lg:mt-6">

                  {/* EMAIL */}
                  <a
                    href={`mailto:tekdivas4@gmail.com?subject=${encodeURIComponent(
                      "Let's talk about my project"
                    )}&body=${encodeURIComponent(
                      "Hi TekDivas,\n\nI'd like to discuss a project with you.\n\nHere's what I'm looking to build:\n\n"
                    )}`}
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-background px-5 text-xs font-bold text-primary shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-12 sm:gap-3 sm:px-6 sm:text-sm"
                  >
                    <Mail className="size-3.5 sm:size-4" />
                    Email Us

                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/923367072788?text=Hi%20TekDivas%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:h-12 sm:gap-3 sm:px-6 sm:text-sm"
                  >
                    <MessageCircle className="size-3.5 sm:size-4" />
                    WhatsApp

                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
                  </a>

                </div>

                <p className="mt-3 text-xs text-primary-foreground/50 sm:mt-4">
                  Prefer a quick message? Email or WhatsApp us anytime.
                </p>

              </Reveal>


              {/* RIGHT — SMALLER CALENDLY */}
              <Reveal className="flex justify-center lg:justify-end">

                <div className="w-full max-w-[320px] overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-130">

                  <div
                    className="calendly-inline-widget w-full overflow-hidden"
                    data-url="https://calendly.com/tekdivas4/30min?text_color=020621&primary_color=02cfd6"
                    style={{
                      minWidth: "280px",
                      height: "480px",
                    }}
                  />

                </div>

              </Reveal>

            </div>

          </div>

          {/* CALENDLY SCRIPT */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </section>

        {/* =========================================================
            FOOTER
        ========================================================= */}
        <footer className="border-t border-white/10 bg-[#0B1F3A] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-10 lg:px-8">

            <Logo />

            <div className="flex flex-col gap-2 text-xs font-semibold sm:flex-row sm:items-center sm:gap-3 sm:text-sm lg:gap-4">

              <a
                href="mailto:tekdivas4@gmail.com"
                className="transition-colors hover:text-primary"
              >
                tekdivas4@gmail.com
              </a>

              <span className="hidden text-white/20 sm:block">
                |
              </span>

              <a
                href="https://wa.me/923367072788"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp: +92 336 7072788
              </a>

            </div>

          </div>
        </footer>

      </main>
    </>
  )
}