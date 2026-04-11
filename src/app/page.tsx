import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section: Cinematic Backdrop */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Backdrop Video Placeholder as Image with Vignette */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/40 via-transparent to-surface-container-lowest z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3xSR1wTvgP-K0fW7-iiG_znMMmYkVLyVtpKxOie3b457LK6n3PaKBfi0G9RXFMgfa0Uls96WXKRCivVwbC0JtGG_o1WcmLD1HV6btyeE4g1-ar50HCA4jQpHCcOJFbpyW-kAjbyAPW3e43va_7FFq3Z_IdiAX94y1lTEQ4DL3xuiyRGEAxaLLHh3K759U62N875FVtmNz5uNtLgdc_ZMMHvNnuOtnGVbGi6SASFUkhk_WV3-27KRnnmc0DtqrOEkn5bwx4HJO5j4"
            alt="Cinematic wide shot of a peaceful sun-drenched library with an elderly person reading a book near a window, soft floating dust motes"
            fill
            className="object-cover grayscale opacity-50"
            unoptimized
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6 md:px-12 mt-24">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-on-surface mb-8 tracking-tighter leading-tight drop-shadow-2xl">
            Personal Companionship for Those Who Deserve Presence
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            A private, discreet concierge for families who value dignity and deep emotional connection.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary px-10 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(242,202,80,0.2)] transition-all">
              Request Private Consultation
            </Link>
            <Link href="/services" className="px-10 py-5 rounded-xl border border-outline-variant text-on-surface font-bold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </header>

      {/* Section 1: The Art of Presence (Asymmetric Layout) */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-primary font-label text-xs tracking-[0.3em] uppercase">The Philosophy</span>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-on-surface leading-snug italic">
              "The Art of Presence is the ultimate luxury in a busy world."
            </h2>
            <p className="font-body text-on-surface-variant text-base md:text-lg leading-relaxed max-w-md">
              We believe that luxury isn't found in objects, but in the time shared with someone who truly listens. Our approach focuses on emotional intelligence and the quiet dignity of companionship.
            </p>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] w-full bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                fill
                className="object-cover opacity-80 mix-blend-luminosity"
                alt="Black and white close-up of two hands gently resting on each other, showing age and care, soft lighting emphasizing textures"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFhns_6LdhadSRI517N4qYg_6eLFMK5OMzlUyhVfLSLYNmDulXJFKaPjgPB6BFVpx-gDSRr8FLRlGbUSJsTkkMTN9O2IWfJw1QSPAfCRl32sUXXUYVo4MrZ8rZTi8UfN1dYj4sTy9J2LOSJJ7KflwK-BUjcD2hj5-jYEBZRhmYN_DIy5o0ozsl_IHj3dZtwy-rEQwWbwbw2rYv2b8YjLn2C4JFfbCqLM9D8cd5rMpN0OFegFXJUB6Mt166EoLRnzYfUSW-ZGBbdtw"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-12 -left-12 hidden lg:block glass-panel bg-surface-bright/60 p-12 rounded-xl max-w-xs shadow-2xl">
              <p className="font-headline italic text-primary text-xl">"Curated care is an act of love."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services (Bento/Glassmorphism) */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">Our Services</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel bg-surface-container-high/40 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-500 group border border-outline-variant/10 flex flex-col items-start">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">person_pin</span>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Personal Visits</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                Dedicated hours of meaningful conversation, reading, or simply being present.
              </p>
              <Link href="/services" className="text-primary text-xs uppercase tracking-widest font-bold inline-block border-b border-primary/30 pb-1 group-hover:border-primary transition-all mt-auto">Discover More</Link>
            </div>
            <div className="glass-panel bg-surface-container-high/40 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-500 group border border-outline-variant/10 flex flex-col items-start">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">concierge</span>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Lifestyle Assistance</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                Managing daily errands, appointments, and personal logistics with grace.
              </p>
              <Link href="/services" className="text-primary text-xs uppercase tracking-widest font-bold inline-block border-b border-primary/30 pb-1 group-hover:border-primary transition-all mt-auto">Discover More</Link>
            </div>
            <div className="glass-panel bg-surface-container-high/40 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-500 group border border-outline-variant/10 flex flex-col items-start">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">medical_services</span>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Medical Companion</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                Support during doctor visits, ensuring clear communication and peace of mind.
              </p>
              <Link href="/services" className="text-primary text-xs uppercase tracking-widest font-bold inline-block border-b border-primary/30 pb-1 group-hover:border-primary transition-all mt-auto">Discover More</Link>
            </div>
            <div className="glass-panel bg-surface-container-high/40 p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-500 group border border-outline-variant/10 flex flex-col items-start">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">theater_comedy</span>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Social Engagement</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                Curating outings, theater trips, and cultural experiences to spark joy.
              </p>
              <Link href="/services" className="text-primary text-xs uppercase tracking-widest font-bold inline-block border-b border-primary/30 pb-1 group-hover:border-primary transition-all mt-auto">Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: For Families Abroad */}
      <section className="relative py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            fill
            className="object-cover"
            alt="Abstract view of modern high-rise buildings and city lights at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO3fyiyopBZgevgQ5hXWyN41di4qQsPDUyVQbMcOpa_aUWKIuzIiYb5BmAomj1wIVUxp6vBNJm0IZ_mxlGjlZAUyiJ40E2kxVM6TGFORlAN7lYZlI8Pq4YJMrWV5q5GM2BzkPaXnYHdh5PtMz_VPd53YP0EDzGcYRHmJk6DZoFGCQiNnAAC36MGR2t_eseHetyinpS7ZyMSiCYrdaFF8htJV_69ypxY-mW7MNj-qj7v-Af4iVaNF8_ztrFyudheljKoc7nv3fXjpU"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0e0e0e]/90 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <span className="text-primary font-label text-xs tracking-[0.4em] uppercase mb-6 md:mb-8 block">Global Connectivity</span>
          <h2 className="font-headline text-3xl md:text-6xl text-on-surface mb-6 md:mb-8">For Families Abroad</h2>
          <p className="font-body text-base md:text-xl text-on-surface-variant leading-relaxed mb-10 md:mb-12">
            We provide the "local eyes" and emotional bridge for NRI families. Rest assured that your elders are receiving the same level of devotion you would give if you were here.
          </p>
          <div className="flex justify-center">
            <Link href="/nri" className="brushed-gold-gradient text-on-primary px-8 md:px-12 py-4 md:py-5 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl flex border-0 transition-transform active:scale-95">
              Our Global Process
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Our Companions (Elite Grid) */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">Our Companions</h2>
              <p className="font-body text-on-surface-variant text-base md:text-lg">
                Meet the elite curators of comfort. Each companion is hand-selected for their empathy, education, and social grace.
              </p>
            </div>
            <Link href="/companions" className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm border-b-2 border-primary pb-2">View Full Directory</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[3/4] mb-8 overflow-hidden rounded-xl bg-surface-container-low flex relative">
                <Image
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt="Portrait of a sophisticated professional woman in her 40s"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyxaMSgUjA_daw9jAPcDt5hOTKC51p9GhuGoxL0bI7ra_wOD1fpi8xB1ll8ifz35xaGvm3rWBqHHg9aYdV9BYSiHseUeqDv11Jj9_tbZK-8cuHPNZy092OXHDxHSMIRvasPoW70yVlwh3KfZDlev5xkN1ZnO-q1rh_fO88unBhQpdY5H_kJE9aTIo0TqvVFf7OxGXpYYqHewIAtQH-W-EZXbT78FDmZu7htGLmcGHzREaVF9YhrqCY2qGR-Sp74M1HNTS2v654qHc"
                  unoptimized
                />
              </div>
              <h4 className="font-headline text-2xl text-on-surface mb-2">Elena V.</h4>
              <p className="font-label text-primary text-xs uppercase tracking-widest mb-4">Master in Fine Arts, Certified Care Giver</p>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
                "I believe every elder has a story that deserves a devoted audience."
              </p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] mb-8 overflow-hidden rounded-xl bg-surface-container-low flex relative">
                <Image
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt="Portrait of a refined gentleman in his 50s"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGa_qq6v5erUmKy3_REY3B7gc1WAcGnbBf_XQrknursBMdNaeaukyXPsBwoT2S8CDN45AdAGWEO3EWgkAMj7mv3mBhl6YPIqNHHNXiNuGwA0tpqqD3x0GXYiIKlunZnDmAe5WZAZWhBiLgk3ja8WGrIYhN4p8cVP0t8tg44cfTWmMhAbEJjYxsHueZW5P2xOq5-09CLPl6Hgxksxgzg-tliz8CH5uqgi_xqaJDGNdZVttarkcNbwV26lMLc6FmNIc93M5KQ2MgPWE"
                  unoptimized
                />
              </div>
              <h4 className="font-headline text-2xl text-on-surface mb-2">Julian R.</h4>
              <p className="font-label text-primary text-xs uppercase tracking-widest mb-4">Former University Dean, Cultural Curator</p>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
                "Engagement is the bridge to mental vitality and emotional wellness."
              </p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] mb-8 overflow-hidden rounded-xl bg-surface-container-low flex relative">
                <Image
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt="Portrait of a composed woman with expressive eyes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtm62EybarZyS3R7POSSDU0ibFiJWK6Q1dV6ieQWWP-l9gM_kzgcU3wVNbcOTt-VbaEd_YMKhImYeNbNAEu0pPlw7gA93t7pRSjJA09C3IqMgPz_Ae59OAaT9CXaEfSlMOKhwQb_c8KqQX8NefUs9Sjno2nq3m_MsMchDqJ_VQuiEcMWzmqg7IysY-vVO2l2muwo5ySWEs1OB7wt6L6zcmy48K4JHmNH_Z7TLjlasuzHFajpEpzMkSuGS_cFnVBvHZet3DmIO7Bgk"
                  unoptimized
                />
              </div>
              <h4 className="font-headline text-2xl text-on-surface mb-2">Anya K.</h4>
              <p className="font-label text-primary text-xs uppercase tracking-widest mb-4">Registered Nurse, Music Enthusiast</p>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
                "Bridging medical safety with genuine human friendship is my mission."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Client Experiences */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-label text-[10px] md:text-xs tracking-[0.4em] uppercase text-center block mb-12 md:mb-16">The Whispers of Gratitude</span>
          <div className="space-y-16 md:space-y-24">
            <blockquote className="text-center">
              <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-on-surface italic leading-relaxed mb-6 md:mb-8">
                "For the first time in years, my father is looking forward to Tuesdays. Julian doesn't just visit; he engages, challenges, and connects. It’s the best investment I’ve ever made for his happiness."
              </p>
              <cite className="font-label text-primary text-[10px] md:text-xs tracking-widest uppercase not-italic">— Michael S., London</cite>
            </blockquote>
            <blockquote className="text-center opacity-70">
              <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-on-surface italic leading-relaxed mb-6 md:mb-8">
                "Living in New York, I was always anxious about my mother's isolation. Elena has become more than a concierge; she is family. The reports I receive are detailed, but the spark in my mom's voice is the real proof."
              </p>
              <cite className="font-label text-primary text-[10px] md:text-xs tracking-widest uppercase not-italic">— Sarah L., New York</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-surface text-center">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          <h2 className="font-headline text-3xl md:text-5xl text-on-surface">Secure Your Peace of Mind</h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant">
            Experience the difference of a concierge service that prioritizes presence over checklists.
          </p>
          <Link href="/contact" className="brushed-gold-gradient text-on-primary px-10 md:px-16 py-4 md:py-6 rounded-xl font-bold text-sm md:text-base uppercase tracking-[0.2em] hover:scale-105 transition-all inline-block border-0 shadow-2xl">
            Schedule Your Private Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
