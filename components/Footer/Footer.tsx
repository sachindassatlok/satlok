import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Events', href: '/events' },
      { name: 'Teachings', href: '/teachings' },
      { name: 'All Ashrams', href: '/ashrams' }
    ],
    resources: [
      { name: 'Spiritual Books', href: '/books' },
      { name: 'Video Gallery', href: '/videos' },
      { name: 'Photo Gallery', href: '/photos' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' }
    ],
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/jagatgururampalji', icon: 'facebook' },
      { name: 'Twitter', href: 'https://twitter.com/jagatgururampal', icon: 'twitter' },
      { name: 'YouTube', href: 'https://www.youtube.com/c/SantRampalJiMaharaj', icon: 'youtube' },
      { name: 'Instagram', href: 'https://www.instagram.com/jagatgururampalji', icon: 'instagram' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Satlok Ashram</h3>
            <p className="text-gray-400 mb-4">
              Satlok Ashram is dedicated to spreading the spiritual knowledge and teachings of Sant Rampal Ji Maharaj.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-2">
              <p>Satlok Ashram</p>
              <p>Post - Barwala</p>
              <p>Hisar, Haryana - 125121</p>
              <p className="mt-4">Phone: +91 92541-89258</p>
              <p>Email: contact@jagatgururampalji.org</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Satlok Ashram. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
