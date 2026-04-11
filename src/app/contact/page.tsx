"use client";

import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Title Section */}
      <header className="mb-16 md:mb-24 text-center md:text-left">
        <span className="font-label text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-4 md:6 block drop-shadow-sm">Discretion & Trust Guaranteed</span>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-on-surface leading-[1.05] mb-6 md:8 whitespace-pre-line md:whitespace-normal">
          Begin Your <br />
          <span className="italic text-primary drop-shadow-md">Private Consultation</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl font-body font-light text-base md:text-xl leading-relaxed">
          Whether you are across the street or across the globe, we are your local bridge to exceptional care.
        </p>
      </header>
      
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Contact Information Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low relative">
              <Image
                fill
                className="object-cover group-hover:scale-105 transition-all duration-1000"
                alt="Professional management consultant in a luxury study, representing trust and elite service"
                src="https://imageio.forbes.com/specials-images/imageserve/5e56f223d378190007f46149/A-management-consulting-career--How-to-build-a-career-as-a-management-consultant-/0x0.jpg?format=jpg&width=480"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 p-6 md:p-10 bg-surface-container-high/90 backdrop-blur-2xl rounded-xl shadow-2xl max-w-[240px] md:max-w-xs border border-primary/20">
              <p className="font-headline text-base md:text-lg italic text-on-surface leading-relaxed">
                "Our service begins the moment we are invited into your story."
              </p>
            </div>
          </div>
          <div className="pt-12 space-y-8">
            <div>
              <h4 className="font-label text-[10px] tracking-[0.4em] uppercase text-primary mb-4">Direct Communication</h4>
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-light text-on-surface">mumbai@privateconcierge.com</p>
                <p className="text-lg md:text-xl font-light text-on-surface">+91 22 6123 4567</p>
              </div>
            </div>
            <div>
              <h4 className="font-label text-[10px] tracking-[0.4em] uppercase text-primary mb-4">Global Headquarters</h4>
              <p className="text-on-surface-variant font-light leading-loose">
                Bandra Kurla Complex, Mumbai<br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-10 md:p-16 rounded-xl border border-outline-variant/10 shadow-2xl">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="block font-label text-[10px] tracking-widest uppercase text-primary/70 mb-1">Full Name</label>
                <input
                  className="w-full py-4 text-on-surface placeholder:text-surface-container-highest/50 font-light tracking-wide bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary transition-all duration-300 focus:outline-none focus:pl-1"
                  placeholder="ALEXANDER STERLING"
                  type="text"
                />
              </div>
              <div className="relative">
                <label className="block font-label text-[10px] tracking-widest uppercase text-primary/70 mb-1">Email Address</label>
                <input
                  className="w-full py-4 text-on-surface placeholder:text-surface-container-highest/50 font-light tracking-wide bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary transition-all duration-300 focus:outline-none focus:pl-1"
                  placeholder="A.STERLING@DOMAIN.COM"
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="block font-label text-[10px] tracking-widest uppercase text-primary/70 mb-1">Phone Number</label>
                <input
                  className="w-full py-4 text-on-surface placeholder:text-surface-container-highest/50 font-light tracking-wide bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary transition-all duration-300 focus:outline-none focus:pl-1"
                  placeholder="+1 (000) 000-0000"
                  type="tel"
                />
              </div>
              <div className="relative">
                <label className="block font-label text-[10px] tracking-widest uppercase text-primary/70 mb-1">City of Interest</label>
                <input
                  className="w-full py-4 text-on-surface placeholder:text-surface-container-highest/50 font-light tracking-wide bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary transition-all duration-300 focus:outline-none focus:pl-1"
                  placeholder="MUMBAI / SOUTH BOMBAY"
                  type="text"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">How can we assist your family?</label>
              <textarea
                className="w-full py-4 text-on-surface placeholder:text-surface-container-highest font-light tracking-wide bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary transition-all resize-none focus:outline-none"
                placeholder="PLEASE DESCRIBE YOUR UNIQUE NEEDS..."
                rows={4}
              ></textarea>
            </div>
            <div className="pt-6">
              <button
                className="w-full sm:w-auto brushed-gold-gradient text-on-primary px-8 md:px-12 py-4 md:py-5 rounded-xl font-body font-bold text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-all shadow-[0_20px_40px_rgba(242,202,80,0.15)] active:scale-[0.98] border-0"
                type="submit"
              >
                Request Private Consultation
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-20 md:mt-32">
        <div className="w-full h-64 md:h-96 rounded-2xl bg-surface-container-lowest relative border border-outline-variant/10 shadow-[inner_0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200')" }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-surface/80 backdrop-blur-md px-6 py-4 rounded-xl border border-primary/20 shadow-2xl text-center">
              <span className="material-symbols-outlined text-primary mb-2">location_on</span>
              <p className="font-headline text-sm tracking-widest uppercase text-on-surface">Global Presence</p>
              <p className="text-[10px] text-on-surface-variant tracking-wider mt-1 uppercase">Exclusive Mumbai Presence</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
