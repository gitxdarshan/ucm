import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            className="object-cover opacity-60 grayscale-[0.2]"
            alt="Cinematic luxury wide shot of an elegant drawing room with a companion and an elderly person"
            src="/images/about/hero.png"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/20 via-surface/40 to-surface z-10"></div>
        </div>
        <div className="relative z-20 text-center px-6 mt-20">
          <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 block drop-shadow-md">Our Ethos</span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-on-surface max-w-5xl mx-auto leading-tight italic drop-shadow-xl">
            A Legacy of Care and Presence
          </h1>
        </div>
      </section>

      {/* Section 1: The Vision (Split Screen) */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl text-primary">The Vision</h2>
              <div className="w-24 h-[1px] bg-primary/40"></div>
            </div>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-on-surface-variant leading-relaxed font-light">
              <p>
                We believe that aging is not a retreat, but a refined progression. THE PRIVATE CONCIERGE was born from a singular realization: that the most valuable luxury in the modern world is not service, but <span className="text-on-surface italic font-headline">presence</span>.
              </p>
              <p>
                For families separated by oceans—especially our NRI clients—the physical distance from their elders can be a heavy burden. We bridge that gap by acting as your dedicated local extension. We curate a lifestyle that honors the history and stature of our clients, ensuring they receive the same profound devotion you would personally provide.
              </p>
              <p>
                In an era of automated interactions, we remain steadfastly human. Our experienced companions are chosen for their intellect, their empathy, and their shared appreciation for the finer nuances of a life well-lived.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 rounded-xl transition-transform duration-700 group-hover:scale-105"></div>
            <div className="relative z-10 rounded-xl w-full aspect-[4/5] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <Image
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Close-up of a younger professional gently resting their hand over an elder's hand holding a teacup"
                src="/images/about/vision.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Pillars */}
      <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline text-4xl md:text-5xl mb-4 text-on-surface">The Pillars</h2>
            <p className="font-label text-primary tracking-widest uppercase text-[10px] md:text-sm drop-shadow-sm">Our Core Commitments to Your Family</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group space-y-8 text-center p-12 rounded-xl bg-surface-container-high/40 border border-outline-variant/10 transition-all duration-300 hover:bg-surface hover:shadow-2xl hover:-translate-y-2">
              <span className="material-symbols-outlined text-primary text-4xl block">visibility_off</span>
              <div className="space-y-4">
                <h3 className="font-headline text-2xl text-on-surface">Absolute Discretion</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Our presence is felt emotionally, but remains entirely private to the outside world. We operate with absolute confidentiality.
                </p>
              </div>
            </div>
            <div className="group space-y-8 text-center p-12 rounded-xl bg-surface-container-high/40 border border-outline-variant/10 transition-all duration-300 hover:bg-surface hover:shadow-2xl hover:-translate-y-2">
              <span className="material-symbols-outlined text-primary text-4xl block">volunteer_activism</span>
              <div className="space-y-4">
                <h3 className="font-headline text-2xl text-on-surface">Profound Empathy</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  We don't simply offer care; we offer genuine emotional connection. We tailor our companionship to match the intellectual rhythm of your parents.
                </p>
              </div>
            </div>
            <div className="group space-y-8 text-center p-12 rounded-xl bg-surface-container-high/40 border border-outline-variant/10 transition-all duration-300 hover:bg-surface hover:shadow-2xl hover:-translate-y-2">
              <span className="material-symbols-outlined text-primary text-4xl block">public</span>
              <div className="space-y-4">
                <h3 className="font-headline text-2xl text-on-surface">Global Bridge</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  For NRIs, absolute communication ensures peace of mind. We keep you inherently connected to your parents' daily triumphs and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cinematic Gallery (Global Bridge) */}
      <section className="py-20 md:py-32 bg-surface px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">A Trusted Global Bridge</h2>
            <p className="font-body text-base md:text-xl text-on-surface-variant leading-relaxed font-light">
              We aren't just caregivers; we are the steadfast link connecting distant shores to the warmth of home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
              <Image
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="A sleek tablet displaying a video call with a smiling elder, showing global connectivity"
                src="/images/about/tablet.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-headline text-3xl text-white mb-2 italic">Unbroken Connections</h3>
                <p className="text-on-surface-variant text-sm tracking-wide font-light">Seamless video insights and deep emotional check-ins, bringing NRI families closer.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
              <Image
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="An elegant elderly person and their companion walking through a botanical garden"
                src="/images/about/garden.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <h3 className="font-headline text-2xl md:text-3xl text-white mb-2 italic">Refined Engagement</h3>
                <p className="text-on-surface-variant text-xs md:text-sm tracking-wide font-light">Accompanying elders to serene environments, ensuring a vibrant and dignified lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-surface-container-lowest border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 italic leading-tight text-on-surface drop-shadow-lg font-light">Allow us to accompany your next chapter with the dignity it deserves.</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary px-10 md:px-12 py-4 md:py-5 rounded-xl font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm shadow-[0_0_30px_rgba(242,202,80,0.2)] hover:scale-105 transition-all inline-flex items-center gap-3 border border-primary/20">
              Inquire Privately <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
