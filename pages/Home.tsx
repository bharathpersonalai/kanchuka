import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Scissors } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const heroAnim = useScrollAnimation('left', 0);
  const philosophyTitleAnim = useScrollAnimation('left', 100);
  const philosophyTextAnim = useScrollAnimation('right', 200);
  const collectionsTitleAnim = useScrollAnimation('up', 0);

  return (
    <div className="flex flex-col min-h-screen bg-kanchuka-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/khero.jpg"
            alt="Kanchuka Hero"
            className="w-full h-full object-cover opacity-85 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kanchuka-dark/70 via-kanchuka-dark/40 to-kanchuka-dark/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div {...heroAnim} className="max-w-2xl text-left md:mt-20">
            <span className="text-white font-sans uppercase tracking-[0.5em] text-sm md:text-lg font-bold mb-6 block drop-shadow-2xl">
              The Art of Elegance
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter drop-shadow-2xl">
              Timeless <br />
              <span className="italic text-kanchuka-primary">Elegance</span>
            </h1>
            <p className="font-sans font-light text-lg md:text-2xl text-gray-100 mb-8 md:mb-12 max-w-xl leading-relaxed drop-shadow-xl">
              Our master artisans spend hundreds of hours crafting personal masterpieces that celebrate your unique narrative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start">
              <Link
                to="/collections"
                className="group relative overflow-hidden bg-kanchuka-primary text-white px-8 md:px-10 py-4 font-sans uppercase tracking-widest text-xs md:text-sm transition-all duration-500 hover:scale-105 shadow-2xl text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Collections <ArrowRight size={18} />
                </span>
                <div className="absolute inset-0 bg-kanchuka-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
              <Link
                to="/about"
                className="group border-2 border-white text-white px-8 md:px-10 py-4 font-sans uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-kanchuka-dark transition-all duration-500 flex items-center justify-center gap-3 text-center backdrop-blur-md"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-10 left-10 hidden lg:block animate-bounce-slow">
          <div className="w-px h-32 bg-kanchuka-gold/60 mx-auto mb-4"></div>
          <span className="font-serif italic text-kanchuka-gold text-sm vertical-text tracking-widest uppercase drop-shadow-md">Est. 1998</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 animate-fade-in">
                <img
                  src="/kg4.jpg"
                  alt="Process"
                  className="w-full aspect-[4/5] object-cover shadow-[40px_40px_0px_-10px_rgba(212,175,55,0.1)]"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-kanchuka-gold/30"></div>
            </div>

            <div className="lg:col-span-7 pl-0 lg:pl-16">
              <div {...philosophyTitleAnim}>
                <span className="text-kanchuka-gold font-sans uppercase tracking-widest text-sm mb-4 block font-bold">Our Philosophy</span>
                <h2 className="font-serif text-5xl md:text-6xl text-kanchuka-dark mb-8 leading-tight">
                  Where Hand-Crafted <br />
                  <span className="text-kanchuka-primary">Meets Modern Grace</span>
                </h2>
              </div>
              <div {...philosophyTextAnim}>
                <p className="font-sans text-xl text-gray-600 leading-relaxed mb-10">
                  At Kanchuka, we believe every garment should be as unique as the person wearing it. Our artisans spend hundreds of hours on a single piece, ensuring every stitch is a testament to quality. We honor the traditions of the past while designing for the confident woman of today.
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="font-serif text-3xl text-kanchuka-primary mb-2">100%</h4>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">Handmade Detail</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl text-kanchuka-primary mb-2">25+</h4>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">Master Artisans</p>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-3 text-kanchuka-primary font-bold uppercase tracking-[0.2em] group">
                  The Kanchuka Experience
                  <span className="w-12 h-px bg-kanchuka-primary group-hover:w-20 transition-all duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Collections */}
      <section className="py-24 bg-kanchuka-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div {...collectionsTitleAnim}>
              <span className="text-kanchuka-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Curated Portfolios</span>
              <h2 className="font-serif text-4xl md:text-7xl">Signature <br /><span className="italic text-kanchuka-gold">Series</span></h2>
            </div>
            <Link to="/collections" className="bg-white text-kanchuka-dark px-6 md:px-8 py-3 font-sans uppercase tracking-widest text-[10px] md:text-xs hover:bg-kanchuka-gold hover:text-white transition shadow-xl w-full md:w-auto text-center">
              View All Collections
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'The Bridal Edit', img: '/kg1.jpg' },
              { title: 'Evening Soirée', img: '/kg2.jpg' },
              { title: 'Modern Heritage', img: '/kg3.jpg' }
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kanchuka-dark via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="font-serif text-3xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                  <div className="h-px w-0 group-hover:w-full bg-kanchuka-gold transition-all duration-500 delay-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-kanchuka-primary/5 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-kanchuka-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-10 animate-fade-in">
            <img src="/klogo.png" alt="Kanchuka Logo" className="w-48 md:w-72 h-auto mx-auto object-contain drop-shadow-sm" />
          </div>
          <h2 className="font-serif text-3xl md:text-6xl mb-12 text-kanchuka-dark leading-tight">Ready for a garment that <br /> <span className="italic">speaks your language?</span></h2>
          <Link
            to="/contact"
            className="inline-block bg-kanchuka-primary text-white px-10 md:px-12 py-4 md:py-5 font-sans uppercase tracking-[0.3em] text-[10px] md:text-sm hover:bg-kanchuka-dark transition-all duration-500 shadow-2xl rounded-sm"
          >
            Consult with a Stylist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;