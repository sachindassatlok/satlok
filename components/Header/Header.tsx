import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [tickerPosition, setTickerPosition] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Event data for ticker
  const eventTicker = "Nirvan Diwas 2025: 06-07-08 February 2025 at Satlok Ashram Hisar | Bodh Diwas: 15-16-17 February 2025";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ticker animation
  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    const tickerWidth = tickerElement.offsetWidth;
    const containerWidth = tickerElement.parentElement?.offsetWidth || 0;
    const gap = 24; // Reduced gap to approximately 2-3 words width
    
    const animate = () => {
      setTickerPosition(prev => {
        // When ticker goes beyond container width + gap, reset to initial position
        if (Math.abs(prev) >= tickerWidth + gap) {
          return 0;
        }
        return prev - 1; // Move ticker to the left
      });
    };

    const animationInterval = setInterval(animate, 50);

    return () => clearInterval(animationInterval);
  }, []);

  const menuItems = {
    about: {
      title: 'About Us',
      items: [
        { title: 'History', href: '/about/history' },
        { title: 'Mission & Vision', href: '/about/mission' },
        { title: 'Activities', href: '/about/activities' }
      ]
    },
    akhand: {
      title: 'Akhand Path',
      items: [
        { title: 'Dowry-Free Marriages', href: '/akhand-path/dowry-free-marriages' },
        { title: 'Blood Donation Camp', href: '/akhand-path/blood-donation' },
        { title: 'Spiritual Exhibition', href: '/akhand-path/exhibition' },
        { title: 'Health Camps', href: '/akhand-path/health-camps' },
        { title: 'Huge Bhandara', href: '/akhand-path/bhandara' }
      ]
    },
    teachings: {
      title: 'Teachings of Sant Rampal Ji',
      items: [
        { title: 'Naam Diksha', href: '/teachings/naam-diksha' },
        { title: 'Prophecies', href: '/teachings/prophecies' }
      ]
    },
    events: {
      title: 'Events',
      items: [
        { title: 'Upcoming Events', href: '/events/upcoming' },
        { title: 'Event Timetable', href: '/events/timetable' },
        { title: 'Past Events', href: '/events/past' }
      ]
    },
    ashrams: {
      title: 'All Satlok Ashrams',
      items: [
        { title: 'Satlok Ashram Dhanana', href: '/ashrams/dhanana' },
        { title: 'Satlok Ashram Bhiwani', href: '/ashrams/bhiwani' },
        { title: 'Satlok Ashram Pipli', href: '/ashrams/pipli' },
        { title: 'Satlok Ashram Sojat', href: '/ashrams/sojat' },
        { title: 'Satlok Ashram Vedkhedi', href: '/ashrams/vedkhedi' },
        { title: 'Satlok Ashram Dhuri', href: '/ashrams/dhuri' },
        { title: 'Satlok Ashram Khamano', href: '/ashrams/khamano' },
        { title: 'Satlok Ashram Betul', href: '/ashrams/betul' },
        { title: 'Satlok Ashram Indore', href: '/ashrams/indore' },
        { title: 'Satlok Ashram Mithila', href: '/ashrams/mithila' }
      ]
    }
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* New Top Bar */}
      <div className="bg-[#F04B4B] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            {/* Contact Info - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+911234567890" className="flex items-center text-sm font-bold text-white hover:text-white/90 transition-colors">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (+91) 123-456-7890
              </a>
              <a href="mailto:info@satlokashram.org" className="flex items-center text-sm font-bold text-white hover:text-white/90 transition-colors">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@satlokashram.org
              </a>
            </div>

            {/* Event Ticker */}
            <div className="flex-1 overflow-hidden mx-4 hidden md:block">
              <div className="border-2 border-white/40 rounded-full px-4 py-1.5 bg-white/5">
                <div 
                  ref={tickerRef}
                  className="whitespace-nowrap inline-block"
                  style={{ transform: `translateX(${tickerPosition}px)` }}
                >
                  <span className="text-sm font-medium"> 📅 {eventTicker}</span>
                  <span className="inline-block px-3">&nbsp;</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a href="#" aria-label="Facebook" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#1877F2' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#E4405F' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-1.38-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#000000' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#FF0000' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" aria-label="Threads" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#000000' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.013-5.392 2.866-8.863 7.828-9.497C10.497 2.292 11.623 2.1 12.74 2c2.912-.002 5.258.654 7.039 1.824.065.044.127.09.188.139.087.069.173.138.256.209.086.074.169.149.25.227.258.235.534.546.594 1.002.065.495-.123.96-.438 1.265l-.248.225c-.052.047-.094.085-.127.116-.27.249-.515.384-.764.521-.088.05-.175.098-.267.152-1.724.991-3.666 1.524-5.76 1.588a9.764 9.764 0 0 1-2.898-.272c-.947-.235-1.777-.632-2.462-1.177-.024.558-.004 1.068.07 1.519.236 1.409.89 2.447 1.939 3.077.89.533 1.928.798 3.091.798.293 0 .594-.013.895-.038 2.075-.179 3.747-1.131 4.713-2.68.166-.267.422-.426.713-.442.292-.018.563.116.755.37.19.25.243.567.145.875-.104.327-.236.644-.393.947-.893 1.724-2.296 2.943-4.154 3.63-1.059.392-2.226.591-3.465.591Zm-1.947-9.276c1.323.95 3.242.984 4.378.078.597-.476.945-1.15.945-1.842 0-.735-.373-1.371-.987-1.685-.672-.344-1.527-.369-2.36-.068-.767.278-1.401.78-1.843 1.457-.382.584-.501 1.218-.325 1.733.021.062.107.21.192.327Z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#0A66C2' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="bg-white rounded-full p-1.5 hover:bg-white/90 transition-all" style={{ color: '#E60023' }}>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'py-1.5' : 'py-2.5'} transition-all duration-300`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Logo variant="header" className="h-14" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#F04B4B] text-sm font-bold transition-colors"
              >
                Home
              </Link>
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className="relative group">
                  <button
                    className="text-gray-700 hover:text-[#F04B4B] text-sm font-bold transition-colors flex items-center gap-1"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        if (!document.querySelector(`:hover > .dropdown-${key}`)) {
                          setActiveDropdown(null);
                        }
                      }, 100);
                    }}
                  >
                    {item.title}
                    <svg 
                      className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`dropdown-${key} absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 transition-all duration-200 pointer-events-none ${
                      activeDropdown === key ? 'opacity-100 scale-100 pointer-events-auto' : ''
                    }`}
                  >
                    <div className="py-1 max-h-[70vh] overflow-y-auto rounded-lg">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F04B4B] hover:text-white transition-colors font-bold"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#F04B4B] text-sm font-bold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#F04B4B] p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            {/* Mobile Contact Info */}
            <div className="bg-[#F04B4B] p-4 text-white">
              <a href="tel:+911234567890" className="flex items-center text-sm mb-2 hover:text-white/90 transition-colors">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (+91) 123-456-7890
              </a>
              <a href="mailto:info@satlokashram.org" className="flex items-center text-sm hover:text-white/90 transition-colors">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@satlokashram.org
              </a>
            </div>

            {/* Mobile Menu Links */}
            <div className="py-2 max-h-[70vh] overflow-y-auto">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#F04B4B] transition-colors font-bold">
                Home
              </Link>
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key}>
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#F04B4B] transition-colors flex justify-between items-center font-bold"
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${
                        activeDropdown === key ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-200 ${
                      activeDropdown === key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="bg-gray-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#F04B4B] transition-colors font-bold"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#F04B4B] transition-colors font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
