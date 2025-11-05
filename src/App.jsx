import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Highlights from './components/Highlights';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-sky-600" />
            <span className="text-sm font-semibold tracking-tight text-black">BlueGrid Electric</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Highlights />
        <ContactCTA />
      </main>

      <footer className="border-t border-black/10 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} BlueGrid Electric. All rights reserved.</p>
          <div className="text-xs text-slate-500">Minimalist • Futuristic • Reliable</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
