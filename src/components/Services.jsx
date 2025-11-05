import React from 'react';
import { Zap, Building2, Cpu, Shield, Cable, Smartphone, Wrench, Leaf } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="h-6 w-6 text-sky-600" />,
    title: 'Power Distribution',
    desc: 'Low-voltage distribution boards, cable tray systems, and clean panel layouts built for safety and scalability.'
  },
  {
    icon: <Zap className="h-6 w-6 text-sky-600" />,
    title: 'Smart Lighting',
    desc: 'DALI/0–10V lighting with presence and daylight control to reduce energy and elevate ambiance.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-sky-600" />,
    title: 'Automation & BMS',
    desc: 'Seamless integration with building management systems for HVAC, metering, scheduling, and scenes.'
  },
  {
    icon: <Shield className="h-6 w-6 text-sky-600" />,
    title: 'Life Safety',
    desc: 'Emergency lighting, surge protection, and redundancy engineered for mission-critical reliability.'
  },
  {
    icon: <Cable className="h-6 w-6 text-sky-600" />,
    title: 'Structured Cabling',
    desc: 'High-performance data, PoE, and fiber infrastructure ready for IoT and future expansion.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-sky-600" />,
    title: 'IoT & Controls',
    desc: 'Sensors, edge controllers, and mobile dashboards to monitor, automate, and optimize usage.'
  },
  {
    icon: <Wrench className="h-6 w-6 text-sky-600" />,
    title: 'Commissioning & Maintenance',
    desc: 'End-to-end testing, documentation, and lifecycle support to keep systems performing flawlessly.'
  },
  {
    icon: <Leaf className="h-6 w-6 text-sky-600" />,
    title: 'Energy & Sustainability',
    desc: 'Sub-metering, analytics, and EV readiness that drive measurable savings and ESG outcomes.'
  }
];

function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">Core Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Modular, code-compliant installations that prioritize safety, efficiency, and elegant simplicity.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 ring-1 ring-sky-100">
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold text-black">{s.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
