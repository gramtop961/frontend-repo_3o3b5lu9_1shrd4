import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/70 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch gap-10 px-6 py-14 md:flex-row md:items-center lg:py-20">
        {/* Left copy */}
        <div className="z-10 max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">
            Smart Building Electrical • Innovative • Minimalist
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Intelligent Electrical Installation for Modern Buildings
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Design, install, and maintain high‑performance electrical systems that are safer,
            cleaner, and beautifully simple. We combine automation, energy analytics, and
            robust engineering for future‑ready spaces.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-900"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-sky-50"
            >
              Our Solutions
            </a>
          </div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[60vh] w-full shrink-0 rounded-2xl border border-black/10 bg-white/60 shadow-sm md:h-[70vh] md:w-[52%]">
          <Spline
            scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* subtle overlay gradients that do not block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
