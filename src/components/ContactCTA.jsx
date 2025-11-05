import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-50/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Let’s power your next smart building
              </h3>
              <p className="mt-2 text-slate-600">
                Share your project details and goals. Our engineers will propose a clean, scalable electrical architecture.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@smartgrid.example"
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-sky-50"
              >
                <Mail className="h-4 w-4" /> Email us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-sky-900"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Response time', value: 'Under 24 hours' },
              { label: 'Regions', value: 'Global projects' },
              { label: 'Delivery', value: 'Design • Install • Maintain' }
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-black/10 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-black">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800">
              Explore services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
