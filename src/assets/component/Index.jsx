

import React, { useState } from 'react'

import Modern from '../image/Modern.png'

function Index() {
  const [showCookies, setShowCookies] = useState(true)

  return (
    <div className="min-h-screen bg-white font-['Poppins']">

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">

        {/* Background Image */}
     <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${Modern})`
  }}
/>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#102345]/90" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 py-24">

          <div className="max-w-2xl">

            <span className="inline-block text-amber-400 text-xs md:text-sm font-semibold tracking-[3px] uppercase mb-6">
              Trusted Legal Professionals
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Your Trusted Legal
              <br />
              Partner
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Comprehensive legal services and strategic consultancy
              for individuals, businesses and organisations. From
              corporate law to property management, we deliver
              professional legal solutions you can rely on.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="#consultation"
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 px-6 py-3.5 rounded-md text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Consultation
                <span>→</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white/80 text-white hover:bg-white hover:text-slate-950 px-6 py-3.5 rounded-md text-sm font-medium transition-all duration-300"
              >
                Our Services
              </a>

              <a
                href="#testimonials"
                className="inline-flex items-center justify-center border border-white/80 text-white hover:bg-white hover:text-slate-950 px-6 py-3.5 rounded-md text-sm font-medium transition-all duration-300"
              >
                Client Testimonials
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Cookie Consent */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-slate-200 shadow-2xl">

          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5">

            <div className="max-w-3xl">
              <h3 className="font-serif text-sm font-bold text-slate-900 mb-1">
                We Use Cookies
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                We use cookies to enhance your browsing experience,
                analyse site traffic, and personalise content.
                By clicking "Accept All", you consent to our use
                of cookies.
                <a href="#privacy" className="text-slate-900 underline ml-1">
                  Learn more
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">

              <button
                onClick={() => setShowCookies(false)}
                className="border border-slate-200 hover:bg-slate-100 text-slate-700 px-5 py-2.5 rounded-md text-xs font-medium transition-colors"
              >
                Decline
              </button>

              <button
                onClick={() => setShowCookies(false)}
                className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-2.5 rounded-md text-xs font-medium transition-colors"
              >
                Accept All
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Index
