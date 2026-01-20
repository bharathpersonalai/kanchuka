import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-effect sticky top-0 z-[100] border-b border-kanchuka-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 z-[110]">
            <Link to="/" className="block">
              <img
                src="/klogo.png"
                alt="Kanchuka Logo"
                className="w-48 sm:w-56 md:w-72 lg:w-40 h-auto object-contain transition-all duration-500 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-sans text-[11px] uppercase tracking-[0.3em] transition-all duration-500 group py-2 ${isActive(link.path) ? 'text-kanchuka-primary' : 'text-gray-500 hover:text-kanchuka-dark'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-px bg-kanchuka-primary transition-transform duration-500 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-[110]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-kanchuka-dark hover:text-kanchuka-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-white transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          <div className="mb-12 opacity-30">
            <img src="/klogo.png" alt="Logo" className="w-48 h-auto grayscale" />
          </div>
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-serif text-4xl tracking-widest transition-all duration-500 delay-[${idx * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isActive(link.path) ? 'text-kanchuka-primary' : 'text-kanchuka-dark'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-12 border-t border-kanchuka-primary/10 w-full text-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-gray-400">The Art of Elegance</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;