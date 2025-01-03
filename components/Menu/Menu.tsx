'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  {
    title: 'Home',
    path: '/',
    submenu: []
  },
  {
    title: 'About Us',
    path: '/about',
    submenu: [
      { title: 'Our Mission', path: '/about/mission' },
      { title: 'History', path: '/about/history' },
      { title: 'Activities', path: '/about/activities' }
    ]
  },
  {
    title: 'Akhand Path',
    path: '/akhand-path',
    submenu: [
      { title: 'Dowry-Free Marriages', path: '/akhand-path/dowry-free-marriages' },
      { title: 'Blood Donation Camp', path: '/akhand-path/blood-donation-camp' },
      { title: 'Exhibition', path: '/akhand-path/exhibition' },
      { title: 'Health Camps', path: '/akhand-path/health-camps' },
      { title: 'Huge Bhandara', path: '/akhand-path/huge-bhandara' }
    ]
  },
  {
    title: 'Teachings of Sant Rampal Ji',
    path: '/teachings',
    submenu: [
      { title: 'Naam Diksha', path: '/teachings/naam-diksha' },
      { title: 'Prophecies', path: '/teachings/prophecies' }
    ]
  },
  {
    title: 'Events',
    path: '/events',
    submenu: [
      { title: 'Upcoming Events', path: '/events/upcoming' },
      { title: 'Event Timetable', path: '/events/timetable' },
      { title: 'Past Events', path: '/events/past' }
    ]
  },
  {
    title: 'All Satlok Ashrams',
    path: '/ashrams',
    submenu: [
      { title: 'Satlok Ashram Dhana', path: '/ashrams/dhana' },
      { title: 'Satlok Ashram Bhiwani', path: '/ashrams/bhiwani' },
      { title: 'Satlok Ashram Pipli', path: '/ashrams/pipli' },
      { title: 'Satlok Ashram Sojat', path: '/ashrams/sojat' },
      { title: 'Satlok Ashram Vedkhedi', path: '/ashrams/vedkhedi' },
      { title: 'Satlok Ashram Dhuri', path: '/ashrams/dhuri' },
      { title: 'Satlok Ashram Khamano', path: '/ashrams/khamano' },
      { title: 'Satlok Ashram Betul', path: '/ashrams/betul' },
      { title: 'Satlok Ashram Indore', path: '/ashrams/indore' },
      { title: 'Satlok Ashram Mithila', path: '/ashrams/mithila' }
    ]
  },
  {
    title: 'Contact Us',
    path: '/contact',
    submenu: []
  }
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubmenu(null);
    }
  };

  return (
    <nav className="bg-white shadow-lg" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-red-600">Satlok Ashram</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.title)}
              >
                <Link
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === item.path
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {item.title}
                  {item.submenu.length > 0 && (
                    <svg
                      className="ml-1 inline-block h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.submenu.length > 0 && activeSubmenu === item.title && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                className={`w-full flex items-center justify-between px-4 py-2 text-base font-medium ${
                  router.pathname === item.path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <span>{item.title}</span>
                {item.submenu.length > 0 && (
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                      activeSubmenu === item.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.submenu.length > 0 && activeSubmenu === item.title && (
                <div className="bg-gray-50">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className="block py-2 pl-8 pr-4 text-sm text-gray-700 hover:text-red-600"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
