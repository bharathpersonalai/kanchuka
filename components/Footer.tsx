import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 overflow-hidden rounded-full border border-kanchuka-primary/20">
                <img src="/klogo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-[0.1em] text-kanchuka-primary">Kanchuka</h3>
                <p className="font-sans text-[8px] text-gray-500 tracking-[0.3em] uppercase">The Art of Elegance</p>
              </div>
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-xs">
              Crafting stories through fabric. We specialize in bespoke bridal wear, intricate embroidery, and reviving traditional weaves for the modern woman.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-sans text-sm">
              <li>
                <Link to="/" className="hover:text-kanchuka-primary transition-colors cursor-pointer">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-kanchuka-primary transition-colors cursor-pointer">Collections</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-kanchuka-primary transition-colors cursor-pointer">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-kanchuka-primary transition-colors cursor-pointer">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-white">Visit Us</h4>
            <div className="space-y-6 text-gray-400 font-sans text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-kanchuka-gold shrink-0 mt-1" size={18} />
                <p>
                  123, Kondapur,<br />
                  Hyderabad, Telangana 500033
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-kanchuka-gold shrink-0" size={18} />
                <p>+91 12345 67890</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-kanchuka-gold shrink-0" size={18} />
                <p>info@kanchuka.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-gray-500 font-sans text-[11px] tracking-wider">
            &copy; {new Date().getFullYear()} Kanchuka Designer Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;