import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-12 mb-32 pt-32">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-headline text-6xl md:text-8xl tracking-tight leading-none mb-8">
            Our Bespoke <br /> <span className="italic font-light">Services</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed font-light">
            Elevating the standard of daily existence through invisible threads of care, discretion, and sophisticated management.
          </p>
        </div>
      </section>

      {/* Services Grid - Asymmetric Alternate Layout */}
      <div className="space-y-48 pb-48">
        {/* Service 1: Personal Companion Visits */}
        <section className="max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl relative">
                <Image
                  fill
                  className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                  alt="Cinematic shot of a young professional woman smiling warmly at an elderly gentleman in a sunlit library room with mahogany shelves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWoMbIEek7ut5VBYwg72JZBvJP5sFa4LUPSIffHLToNOqayoNCq2o7jcFyA7vBtTqAHlpse5FT-47DB6WzuMyGeclTsyA0OFMIZQEx2CO-eRXW6H3yJ1BD3NHzvz2K6pXD-kqGt2F7ueKTcfOSOkbYQE_jZJRSvQjQslPux67jhFrLUbLgnWaBR5r0GnlYt7URhQ3rnDzoyD_Lk_rqakwfEwvfKGJh6aV9oVAmihB14J7yRnvHHOhlN6ekutIr19L-FwizLMUapjw"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 brushed-gold-gradient opacity-10 blur-3xl rounded-full"></div>
            </div>
            <div className="md:col-span-5 space-y-6 md:pl-12">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
                <span className="font-label text-xs tracking-[0.3em] uppercase font-bold">Heritage Care</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl leading-tight text-on-surface">Personal Companion Visits</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                Daily human connection and engagement tailored to intellectual and emotional needs. Our companions are chosen for their empathy and cultural alignment, ensuring every visit is a meaningful exchange.
              </p>
              <div className="pt-4">
                <ul className="space-y-4 font-label text-sm text-on-surface/80">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Intellectual stimulation and discourse
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Accompaniment to cultural events
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Daily Lifestyle Assistance */}
        <section className="max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1 space-y-6 md:pr-12">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                <span className="font-label text-xs tracking-[0.3em] uppercase font-bold">Seamless Living</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl leading-tight text-on-surface">Daily Lifestyle Assistance</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                Managing the finer details of high-end living so you don't have to. From travel coordination to household management and administrative oversight, we maintain the equilibrium of your private world.
              </p>
              <div className="pt-4">
                <ul className="space-y-4 font-label text-sm text-on-surface/80">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Bespoke travel and itinerary planning
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Administrative and financial oversight
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl relative">
                <Image
                  fill
                  className="object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
                  alt="Minimalist aesthetic shot of a glass table with a high-end leather notebook, a gold pen, and an expensive watch in a modern penthouse"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8swHBeg2SKm8Dxt2vn8TT-fpOIeXehzBebYKuyvcNaNQ4zHe6PFJHUHLpzhYLjxq2yxzBFqB4SgffFqm0WaqUJiu_4eYp3YUr6roR0ZwnljW41e4LVc9q9JqRcgsmRmv-Idc7q59Nf0MkGDNJF1IT1XAOOXaut69iaXLn2Z_EzkghgSRveXA1EI6PmrlHCh51RgMp-8sFfg99K8hA7BaPN15hRGQDo7ecCjrqG6NZmhYBIDeN7xABbd26sZert0uS6awguY0eeg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Hospital & Appointment Companion */}
        <section className="max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl relative">
                <Image
                  fill
                  className="object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  alt="Professional attendant in elegant navy attire gently guiding an elderly client through a modern architectural atrium with soft lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsM-kxpXpZxsMjnpvN8BA-s42nxukpj9Mf03zcYgmYA3bbCwXkvQwENmx91-xrJG1qYBppms3j-Ap1qWrJV4sykDDKkcCVhcqqR3pMh6byMeHUCrlmAenemhrqyKBg27W99Sa8B-ItepJauQrvH7luzwq8tLaH7kdZDJraYM_fH8r6cetcD1pFwe8Tbe_IcMNf0JNPk5euKjQwRB0cihIhjBjNfwAtolABCMG5yv_CQxrWZMkFFUezicmqpQZ8trra5AJ00gXXwR0"
                  unoptimized
                />
              </div>
            </div>
            <div className="md:col-span-5 space-y-6 md:pl-12">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
                <span className="font-label text-xs tracking-[0.3em] uppercase font-bold">Trusted Advocacy</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl leading-tight text-on-surface">Hospital &amp; Appointment Companion</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                Professional advocacy and presence during medical engagements. We provide clarity and comfort, ensuring information is communicated accurately and emotional support is unwavering.
              </p>
              <div className="pt-4">
                <ul className="space-y-4 font-label text-sm text-on-surface/80">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Detailed post-consultation reporting
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Liaising with healthcare professionals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Social & Emotional Engagement */}
        <section className="max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1 space-y-6 md:pr-12">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-3xl">nightlife</span>
                <span className="font-label text-xs tracking-[0.3em] uppercase font-bold">Curated Joy</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl leading-tight text-on-surface">Social &amp; Emotional Engagement</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                Curating social opportunities that resonate with your history and passions. From hosting private dinners to arranging intimate gatherings, we ensure your social calendar remains vibrant and prestigious.
              </p>
              <div className="pt-4">
                <ul className="space-y-4 font-label text-sm text-on-surface/80">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Private event curation and coordination
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Niche interest group facilitation
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl relative">
                <Image
                  fill
                  className="object-cover grayscale-[5%] group-hover:scale-105 transition-transform duration-700"
                  alt="Exquisite table setting at night with warm candlelight, crystal glasses, and soft floral arrangements in a high-end private dining room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEfGxome7sygILt22c15q80fHtV6rn2OnTkDhqMT5W58KQfrKyW9TSA8Yq5A9b8eQ0dg6B8_TDohwk18zt1CWAxDwD30PxczkhAbmq94NfGEM3IR1CJtR9bjOx39vCSMps6_GEkKJLOCqqOQE1yciNApmDocgjl1I2Is_fPGMl-K9wGgSbFvaOYsh58QzYGXeSaOJ6xSmVG5bKn6kHQNEtwchdparzlbr99UEPQ98ix5CvOIY6w9FQmi9H4a63FTnGOMQOgE25taA"
                  unoptimized
                />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] brushed-gold-gradient blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-12 relative z-10 text-center">
          <h3 className="font-headline text-5xl md:text-6xl mb-12 leading-tight text-on-surface">Tailor Your Experience</h3>
          <p className="font-label text-on-surface-variant uppercase tracking-[0.4em] mb-16 text-sm">Contact for Consultation</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary px-12 py-5 rounded-xl font-bold tracking-widest uppercase hover:opacity-90 transition-all text-sm inline-block">
              Request Invitation
            </Link>
            <Link href="/companions" className="bg-surface-container-high text-on-surface px-12 py-5 rounded-xl font-bold tracking-widest uppercase hover:bg-surface-container-highest transition-all text-sm border border-outline-variant/20 inline-block">
              Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
