import React from 'react';
import { CheckCircle, Gauge, Shield, Sparkles } from 'lucide-react';

const items = [
  {
    icon: <Shield className="h-6 w-6 text-sky-600" />,
    title: 'Certified Safety',
    desc: 'Engineered to IEC and local codes with proper protection, selectivity, and documentation.'
  },
  {
    icon: <Gauge className="h-6 w-6 text-sky-600" />,
    title: 'Measured Efficiency',
    desc: 'Sub-metering and analytics expose waste and unlock 15–30% savings across portfolios.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-sky-600" />,
    title: 'Minimalist Aesthetics',
    desc: 'Clean panels, tidy routing, and quiet technology that blends into architecture.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-sky-600" />,
    title: 'Future‑Ready',
    desc: 'Open protocols and modular hardware keep upgrades simple and cost-effective.'
  }
];

function Highlights() {
  return (
    <section className="bg-sky-50/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">Why choose us</h2>
          <p className="mt-2 text-slate-600">
            A technology-first approach with meticulous craftsmanship and a minimalist design ethos.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 ring-1 ring-sky-100">
                  {it.icon}
                </div>
                <h3 className="text-base font-semibold text-black">{it.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
