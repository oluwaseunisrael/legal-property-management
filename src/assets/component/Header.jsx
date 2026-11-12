
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false)

  const discoverLinks = [
    {
      name: 'About Us',
      description: 'Our history, mission and vision',
      href: '#about',
    },
    {
      name: 'Our Attorneys',
      description: 'Meet our legal professionals',
      href: '#attorneys',
    },
    {
      name: 'Practice Areas',
      description: 'Our legal services and expertise',
      href: '#practice-areas',
    },
    {
      name: 'Case Studies',
      description: 'Our achievements and success stories',
      href: '#case-studies',
    },
    {
      name: 'Articles & News',
      description: 'Legal insights and updates',
      href: '#articles',
    },
  ]

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setMobileDiscoverOpen(false)
  }

  return (
    <header className="relative z-50 bg-slate-950 text-white shadow-xl font-['Poppins']">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Brand */}
          <a href="#" className="group shrink-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              BOLDIDEASOLICITORS
            </h1>

            <p className="text-[9px] md:text-xs text-slate-400 uppercase tracking-[2px] md:tracking-[3px] mt-1">
              Legal & Property Management
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">

            {/* Home */}
            <a
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300"
            >
              Home
            </a>

            {/* Discover Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDiscoverOpen(true)}
              onMouseLeave={() => setDiscoverOpen(false)}
            >
              <button
                onClick={() => setDiscoverOpen(!discoverOpen)}
                className="flex items-center gap-2 py-7 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300"
                aria-expanded={discoverOpen}
              >
                Discover

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    discoverOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 origin-top transition-all duration-300 ${
                  discoverOpen
                    ? 'opacity-100 visible translate-y-0 scale-100'
                    : 'opacity-0 invisible -translate-y-3 scale-95'
                }`}
              >
                {discoverLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg hover:bg-amber-50 group transition-colors duration-200"
                  >
                    <span className="block text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                      {link.name}
                    </span>

                    <span className="block text-xs text-slate-500 mt-1">
                      {link.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Property Management */}
            <a
              href="#property-management"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300 whitespace-nowrap"
            >
              Property Management
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300"
            >
              Contact
            </a>

          </nav>

          {/* Desktop Consultation Button */}
          <a
            href="#consultation"
            className="hidden lg:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
          >
            Book Consultation
            <span>↗</span>
          </a>

          {/* Animated Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[60] w-11 h-11 flex flex-col items-center justify-center gap-[6px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[2px] bg-amber-400 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'translate-y-[8px] rotate-45' : ''
              }`}
            />

            <span
              className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />

            <span
              className={`block w-5 h-[2px] bg-amber-400 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? 'max-h-[850px] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl px-5 py-6">

          <p className="text-xs uppercase tracking-[3px] text-amber-400 mb-5">
            Navigation
          </p>

          <nav>
            <ul className="flex flex-col">

              {/* Mobile Home */}
              <li>
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="block py-4 border-b border-white/10 text-slate-200 hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>

              {/* Mobile Discover Dropdown */}
              <li className="border-b border-white/10">

                <button
                  onClick={() => setMobileDiscoverOpen(!mobileDiscoverOpen)}
                  className="w-full flex items-center justify-between py-4 text-slate-200 hover:text-amber-400 transition-colors"
                  aria-expanded={mobileDiscoverOpen}
                >
                  <span>Discover</span>

                  <svg
                    className={`w-4 h-4 text-amber-400 transition-transform duration-300 ${
                      mobileDiscoverOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Dropdown Items */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    mobileDiscoverOpen
                      ? 'max-h-[450px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pb-3 border-l border-amber-500/40 ml-2">

                    {discoverLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={closeMobileMenu}
                        style={{
                          transitionDelay: mobileDiscoverOpen
                            ? `${index * 60}ms`
                            : '0ms',
                        }}
                        className={`block py-3 transition-all duration-300 ${
                          mobileDiscoverOpen
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-4 opacity-0'
                        }`}
                      >
                        <span className="block text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
                          {link.name}
                        </span>

                        <span className="block text-xs text-slate-500 mt-1">
                          {link.description}
                        </span>
                      </a>
                    ))}

                  </div>
                </div>
              </li>

              {/* Mobile Property Management */}
              <li>
                <a
                  href="#property-management"
                  onClick={closeMobileMenu}
                  className="block py-4 border-b border-white/10 text-slate-200 hover:text-amber-400 transition-colors"
                >
                  Property Management
                </a>
              </li>

              {/* Mobile Contact */}
              <li>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block py-4 border-b border-white/10 text-slate-200 hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Mobile Consultation Button */}
          <a
            href="#consultation"
            onClick={closeMobileMenu}
            className="mt-6 flex items-center justify-center gap-3 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 py-4 rounded-xl font-bold transition-all duration-300 active:scale-[0.98]"
          >
            Book Consultation
            <span>↗</span>
          </a>

          <p className="text-center text-xs text-slate-500 mt-6">
            BOLDIDEASOLICITORS
          </p>

        </div>
      </div>

    </header>
  )
}

export default Header
