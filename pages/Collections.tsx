import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MOCK_COLLECTION: CollectionItem[] = [
  { id: 1, title: 'Royal Velvet Lehenga', category: 'Bridal', imageUrl: '/c1.jpg', price: 'On Request' },
  { id: 2, title: 'Banarasi Silk Anarkali', category: 'Ethnic', imageUrl: '/c2.jpg', price: '₹4500' },
  { id: 3, title: 'Floral Organza Saree', category: 'Sarees', imageUrl: '/c3.jpg', price: '₹2200' },
  { id: 4, title: 'Embroidered Raw Silk Blouse', category: 'Blouses', imageUrl: '/c4.jpg', price: '₹1200' },
  { id: 5, title: 'Fusion Crop Top Skirt', category: 'Indo-Western', imageUrl: '/c5.jpg', price: '₹3000' },
  { id: 6, title: 'Zardosi Work Dupatta', category: 'Accessories', imageUrl: '/c6.jpg', price: '₹1500' },
  { id: 7, title: 'Pastel Engagement Gown', category: 'Bridal', imageUrl: '/c7.jpg', price: 'On Request' },
  { id: 8, title: 'Cotton Ikkat Kurta', category: 'Casual', imageUrl: '/c8.jpg', price: '₹8000' },
];

const CATEGORIES = ['All', 'Bridal', 'Ethnic', 'Sarees', 'Indo-Western'];

const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerAnim = useScrollAnimation('up', 0);

  const filteredItems = activeCategory === 'All'
    ? MOCK_COLLECTION
    : MOCK_COLLECTION.filter(item => item.category === activeCategory);

  return (
    <div className="bg-kanchuka-cream min-h-screen">
      {/* Header Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/kcollection.jpg"
            alt="Kanchuka Collections"
            className="w-full h-full object-cover"
          />
          {/* Stronger overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-kanchuka-dark via-transparent to-kanchuka-dark/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
          <div {...headerAnim}>
            <span className="text-white font-sans uppercase tracking-[0.5em] text-[10px] md:text-sm font-bold mb-4 block drop-shadow-lg">
              Curated Portfolios
            </span>
            <h1 className="font-serif text-5xl md:text-8xl text-white drop-shadow-2xl">
              Artistry in <br /><span className="italic text-kanchuka-primary">Threads</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Categories Bar - Moved Below Image */}
      <div className="bg-white border-b border-gray-100 sticky top-20 md:top-28 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 md:gap-8 py-4 md:py-6 overflow-x-auto no-scrollbar scroll-smooth">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative whitespace-nowrap px-4 py-2 text-[10px] md:text-sm font-sans uppercase tracking-widest transition-all duration-300 group ${activeCategory === cat
                  ? 'text-kanchuka-primary font-bold'
                  : 'text-gray-400 hover:text-kanchuka-dark'
                  }`}
              >
                {cat}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-kanchuka-primary transition-transform duration-500 scale-x-0 group-hover:scale-x-100 ${activeCategory === cat ? 'scale-x-100' : ''}`}></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-8 shadow-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-kanchuka-dark/0 group-hover:bg-kanchuka-dark/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-kanchuka-dark px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-kanchuka-gold hover:text-white transition shadow-xl">
                    View Details
                  </button>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur px-4 py-1 text-[10px] uppercase tracking-[0.3em] font-bold text-kanchuka-primary">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="text-center w-full px-4">
                <h3 className="font-serif text-3xl text-kanchuka-dark mb-2">{item.title}</h3>
                <div className="w-12 h-px bg-kanchuka-gold mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <p className="font-serif italic text-kanchuka-gold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-24 bg-white border-t border-kanchuka-gold/10 text-center px-6">
        <p className="font-sans text-gray-400 uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">Can't find what you're looking for?</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-10 md:mb-12">We specialize in custom creations</h2>
        <Link to="/contact" className="inline-block border-2 border-kanchuka-dark px-10 md:px-12 py-4 font-sans uppercase tracking-[0.3em] text-[10px] md:text-sm hover:bg-kanchuka-dark hover:text-white transition-all duration-500 w-full md:w-auto">
          Start Your Design Journey
        </Link>
      </section>
    </div>
  );
};

export default Collections;