import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-kanchuka-cream min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/kcontact.jpg"
            alt="Contact Kanchuka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-kanchuka-dark via-transparent to-kanchuka-dark/60"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-white font-sans uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-4 block drop-shadow-lg">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white drop-shadow-2xl">Let's Create <br /><span className="italic text-kanchuka-primary">Something Beautiful</span></h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Panel */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-lg group-hover:bg-kanchuka-primary group-hover:text-white transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-2 text-kanchuka-primary">The Studio</h3>
                  <p className="font-serif text-lg text-gray-700 leading-relaxed">
                    123 Designer Row, Jubilee Hills,<br />
                    Hyderabad, Telangana 500033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-lg group-hover:bg-kanchuka-primary group-hover:text-white transition-colors duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-2 text-kanchuka-primary">Concierge</h3>
                  <p className="font-serif text-lg text-gray-700">+91 98765 43210</p>
                  <p className="font-sans text-[10px] text-gray-400 uppercase tracking-widest mt-1">Available 10am - 8pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-lg group-hover:bg-kanchuka-primary group-hover:text-white transition-colors duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-2 text-kanchuka-primary">Inquiries</h3>
                  <p className="font-serif text-lg text-gray-700">appointments@kanchuka.com</p>
                </div>
              </div>
            </div>

            <div className="p-1 border-2 border-kanchuka-gold/20">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
                alt="Studio Interior"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-white p-12 shadow-2xl rounded-sm">
            <h2 className="font-serif text-3xl mb-10 text-kanchuka-dark border-b border-kanchuka-gold/10 pb-6 text-center">Consultation Request</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full border-0 border-b border-gray-200 focus:border-kanchuka-red focus:ring-0 py-3 px-0 font-serif text-lg transition-colors placeholder:text-gray-200" placeholder="e.g., Ananya Reddy" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full border-0 border-b border-gray-200 focus:border-kanchuka-red focus:ring-0 py-3 px-0 font-serif text-lg transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type of Consultation</label>
                <select className="w-full border-0 border-b border-gray-200 focus:border-kanchuka-red focus:ring-0 py-3 px-0 font-serif text-lg bg-transparent">
                  <option>Bridal Couture</option>
                  <option>Evening Occasion</option>
                  <option>Heritage Transformation</option>
                  <option>Virtual Styling Advice</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tell us your vision</label>
                <textarea rows={4} className="w-full border-0 border-b border-gray-200 focus:border-kanchuka-red focus:ring-0 py-3 px-0 font-serif text-lg resize-none"></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-kanchuka-dark text-white py-5 font-sans uppercase tracking-[0.4em] text-xs hover:bg-kanchuka-primary transition-all duration-700 shadow-xl">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section Teaser */}
      <section className="h-96 relative overflow-hidden grayscale brightness-50 contrast-125">
        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2050&auto=format&fit=crop" alt="Map View" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur px-8 py-4 text-kanchuka-dark font-sans text-xs uppercase tracking-widest font-bold">
            View Interactive Map
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;