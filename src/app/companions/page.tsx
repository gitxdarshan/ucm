import Link from "next/link";
import Image from "next/image";

export default function Companions() {
  return (
    <>
      {/* Hero Title Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 text-center pt-24 md:pt-32">
        <div className="inline-block mb-4">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">Curation Excellence</span>
          <div className="h-[1px] w-12 bg-primary/40 mx-auto mt-2"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline text-on-surface tracking-tight mb-6">
          Our Elite Companions
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant font-body font-light text-base md:text-lg leading-relaxed">
          A highly vetted circle of professionals chosen for their emotional intelligence, 
          cultural depth, and unwavering commitment to discreet service.
        </p>
      </header>

      {/* Profiles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {/* Profile Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <Image
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                alt="Photorealistic portrait of Elena, a professional woman with a warm empathetic expression"
                src="/images/companions/elena.png"
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Verified Elite</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-headline text-on-surface">Elena Vance</h3>
              <p className="text-primary font-label text-[10px] uppercase tracking-widest">10 Years Experience</p>
              <p className="text-on-surface-variant text-sm font-light pt-2">Specialty: Emotional Support &amp; Fine Arts</p>
            </div>
          </div>

          {/* Profile Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <Image
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                alt="Photorealistic portrait of Julian, a distinguished professional man in a tailored blazer"
                src="/images/companions/julian.png"
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Verified Elite</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-headline text-on-surface">Julian Thorne</h3>
              <p className="text-primary font-label text-[10px] uppercase tracking-widest">12 Years Experience</p>
              <p className="text-on-surface-variant text-sm font-light pt-2">Specialty: Intellectual Discourse &amp; Global Travel</p>
            </div>
          </div>

          {/* Profile Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <Image
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                alt="Portrait of Sophia, an elegant and gentle woman smiling warmly"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                unoptimized
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Verified Elite</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-headline text-on-surface">Sophia Mercer</h3>
              <p className="text-primary font-label text-[10px] uppercase tracking-widest">8 Years Experience</p>
              <p className="text-on-surface-variant text-sm font-light pt-2">Specialty: Holistic Wellness &amp; Literature</p>
            </div>
          </div>

          {/* Profile Card 4 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <Image
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                alt="Portrait of Alexander, a mature gentleman with a kind face and silver hair"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
                unoptimized
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Verified Elite</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-headline text-on-surface">Alexander St. James</h3>
              <p className="text-primary font-label text-[10px] uppercase tracking-widest">15 Years Experience</p>
              <p className="text-on-surface-variant text-sm font-light pt-2">Specialty: Classical Music &amp; Philosophy</p>
            </div>
          </div>

          {/* Profile Card 5 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <Image
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                alt="Portrait of Marcus, a clean-cut young professional man with a respectful demeanor"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                unoptimized
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Verified Elite</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-headline text-on-surface">Marcus Vane</h3>
              <p className="text-primary font-label text-[10px] uppercase tracking-widest">7 Years Experience</p>
              <p className="text-on-surface-variant text-sm font-light pt-2">Specialty: Tech Literacy &amp; Active Lifestyle</p>
            </div>
          </div>

          {/* Profile Card 6 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <Image
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                alt="Isabelle Croft - Brunette professional with long wavy hair and a notebook"
                src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80"
                unoptimized
              />
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Verified Elite</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-headline text-on-surface">Isabella Croft</h3>
              <p className="text-primary font-label text-[10px] uppercase tracking-widest">9 Years Experience</p>
              <p className="text-on-surface-variant text-sm font-light pt-2">Specialty: Culinary Arts &amp; Cultural History</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 md:mb-32 max-w-5xl mx-auto px-6">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-20 text-center border border-outline-variant/10">
          <h2 className="text-2xl md:text-4xl font-headline mb-6 md:mb-8 text-on-surface">Ready to find the perfect match?</h2>
          <p className="text-on-surface-variant font-body text-sm md:text-base mb-10 max-w-xl mx-auto">Our selection process is deeply personal. We invite you to a private consultation to discuss your family's unique needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary font-label text-[10px] md:text-xs uppercase tracking-widest font-bold py-4 md:py-5 px-8 md:px-12 rounded-xl transition-all hover:opacity-90 inline-block border-0 shadow-lg">
              Schedule Consultation
            </Link>
            <Link href="/services" className="bg-surface-container-highest text-on-surface font-label text-[10px] md:text-xs uppercase tracking-widest font-bold py-4 md:py-5 px-8 md:px-12 rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-all inline-block">
              View Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
