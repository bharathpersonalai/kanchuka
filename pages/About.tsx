import React from 'react';
import { Sparkles, Heart, Scissors, Award } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-kanchuka-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/kabout.jpg"
                        alt="Kanchuka Studio Legacy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-kanchuka-dark via-transparent to-kanchuka-dark/60"></div>
                </div>

                <div className="relative z-10 text-center px-6 animate-fade-in-up">
                    <span className="text-white font-sans uppercase tracking-[0.5em] text-[10px] md:text-sm font-bold mb-4 block drop-shadow-lg">Our Legacy</span>
                    <h1 className="font-serif text-5xl md:text-8xl text-white mb-6 drop-shadow-2xl">The Soul of <br /><span className="italic text-kanchuka-primary">Kanchuka</span></h1>
                    <p className="font-sans text-gray-200 uppercase tracking-[0.3em] text-[10px] md:text-xs drop-shadow-md">Crafting Elegance Since 1998</p>
                </div>
            </section>

            {/* Philosophy & Story */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1974&auto=format&fit=crop"
                                    alt="Founder's Craft"
                                    className="w-full aspect-[4/5] object-cover shadow-2xl"
                                />
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-kanchuka-primary/10 -z-10 hidden md:block"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-10">
                            <div className="space-y-4">
                                <span className="text-kanchuka-primary font-sans uppercase tracking-widest text-xs font-bold block">The Philosophy</span>
                                <h2 className="font-serif text-4xl md:text-6xl text-kanchuka-dark leading-tight">Beyond Fabric, We Weave <span className="italic">Destinies</span></h2>
                            </div>
                            <p className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                                "Kanchuka was born out of a desire to preserve the vanishing arts of hand-weaving and intricate embroidery while dressing the modern woman in silhouettes that celebrate her power."
                            </p>
                            <p className="font-sans text-gray-600 leading-relaxed text-lg">
                                For over two decades, our studio in the heart of Hyderabad has been more than just a boutique; it is a living atelier where master artisans collaborate to create pieces that are handed down through generations as heirlooms.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-kanchuka-primary/5 flex items-center justify-center text-kanchuka-primary">
                                        <Heart size={24} />
                                    </div>
                                    <span className="font-sans font-bold uppercase tracking-widest text-[10px]">Pure Passion</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-kanchuka-primary/5 flex items-center justify-center text-kanchuka-primary">
                                        <Award size={24} />
                                    </div>
                                    <span className="font-sans font-bold uppercase tracking-widest text-[10px]">Master Artisanry</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Craft Section */}
            <section className="py-24 bg-kanchuka-dark text-[#fff9fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl md:text-7xl mb-6">The Kanchuka <span className="italic text-kanchuka-primary">Craft</span></h2>
                        <p className="font-sans text-gray-400 uppercase tracking-widest text-xs">Our meticulous process of creation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                        {[
                            {
                                title: 'Textile Curation',
                                desc: 'Locating the rarest hand-loomed silks and organzas from the weavers of Banaras and Kanchipuram.',
                                icon: <Sparkles />
                            },
                            {
                                title: 'Intricate Detail',
                                desc: 'Hundreds of hours spent on Zardosi, Aari, and Gota Patti by our master craftsmen.',
                                icon: <Scissors />
                            },
                            {
                                title: 'Modern Fit',
                                desc: 'Innovative draping techniques that bring traditional fabrics to life in contemporary silhouettes.',
                                icon: <Heart />
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="group space-y-8 text-center md:text-left">
                                <div className="text-kanchuka-primary w-12 h-12 mx-auto md:mx-0 p-3 border border-kanchuka-primary/30 rounded-full group-hover:bg-kanchuka-primary group-hover:text-white transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="font-serif text-3xl">{step.title}</h3>
                                <p className="font-sans text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-32 px-6 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-kanchuka-primary/5 -skew-x-12 translate-x-1/3"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="font-serif text-4xl md:text-6xl text-kanchuka-dark mb-10 leading-tight">Every Stitch is a <br /> <span className="italic text-kanchuka-primary">Conversation</span></h2>
                    <p className="font-serif text-xl text-gray-600 italic leading-relaxed mb-16 px-4">
                        We don't just sell outfits; we create the atmosphere for your most cherished memories. From the first sketch to the final fitting, your journey is handled with the grace and attention it deserves.
                    </p>
                    <div className="w-16 h-px bg-kanchuka-primary mx-auto"></div>
                </div>
            </section>
        </div>
    );
};

export default About;
