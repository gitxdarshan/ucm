import Link from "next/link";
import Image from "next/image";

export default function NRI() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            className="object-cover opacity-30"
            alt="Photorealistic wide shot of a luxury apartment overlooking a city skyline at dusk"
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] md:text-sm">For Families Living Abroad</span>
            <h1 className="font-headline text-5xl md:text-8xl leading-tight tracking-tight italic text-on-surface">
              Bridging the <br />
              <span className="text-on-surface-variant not-italic">Distance</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl">
              While your success spans continents, your heart remains home. We curate the presence you cannot provide physically.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="brushed-gold-gradient text-on-primary font-headline text-sm tracking-widest uppercase px-10 py-5 rounded-xl hover:opacity-90 transition-all group inline-flex items-center gap-4 border-0">
                Request a Prospectus
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:flex items-center justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
              <div className="relative glass-panel p-1 rounded-full overflow-hidden border border-white/5">
                <Image
                  width={450}
                  height={600}
                  className="object-cover rounded-full transition-all duration-1000"
                  alt="Sophisticated wealthy reader, reflecting the serene and refined lifestyle we curate"
                  src="https://scarletstate.co.uk/uploads/2025/07/thumbnail-how-many-hours-do-rich-people-really-read-each-day-surprising-habits-of-wealthy-readers.webp"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Emotional Story Section */}
      <section className="py-20 md:py-32 bg-surface-container-lowest px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl md:text-5xl leading-tight text-on-surface">The Peace of Mind That <br /> Comes from Knowing.</h2>
                <div className="w-24 h-px bg-primary"></div>
              </div>
              <div className="space-y-8 text-on-surface-variant font-light text-lg leading-relaxed">
                <p>
                  Living thousands of miles away brings a unique weight. The missed festivals, the unasked health questions, the quiet moments of loneliness that your parents might never mention over a phone call.
                </p>
                <p>
                  At The Private Concierge, we serve as your hands and eyes. Our companions aren't just caregivers; they are curated matches who share interests, language, and cultural nuances with your family.
                </p>
                <p className="italic text-on-surface">
                  "We provide the presence that ensures you never have to wonder if they are truly okay. You see it for yourself."
                </p>
              </div>
            </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                <div className="space-y-4 md:space-y-6 pt-12 relative">
                  <div className="rounded-xl w-full h-64 md:h-80 relative overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt="Two hands clasped together, one young and one older, in a gesture of comfort and trust, soft focus background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhGXN174Wyb_J62f1kb4fJwmDBldwqzzfLG7PbSmfRKoksOKvx24FvgNqrfg4EWIUeyr0ZAse_j6740cd8OqKKoO6yGjuvlMADmIuSGcJoPgOaGl9SJshSOaAKH8nKEXWwQpVAcLgyck6nMQ9wdVk61nSJIHb9GpUFOmG7GzSwyikpXFjofeWshAPLyN4u8D83W967w4AoO5edp1XTjD-3i1jrdnFJxLearrnKQz5vvWyK2CO2F9Zu8imhUQmKdFSDFjS0-nvuqTg"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-xl w-full h-32 md:h-48 relative overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt="Luxury home library with classic leather chairs and warm amber lighting reflecting off polished wood"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDZN-a4gUdXpBibcpPRifM9DdNMqxCtEspkOmAPllO4P7CZoQOjZKrzFYHsOo2AcK7kMAlXuDC5tVfr1HMnjeHF_PmzUKv4JSSOnHTPUYLasINVjoHDgTG-4IKFDS5i3gvEgm93y2WPus-aUwIHk92FiicPAIMbhthMOTsMt-CytINXmei1zRw81jWhylAinsYztUDaCW1HCA-owRcFNk7E1H9-UqqQSMq-YgSqd7DpRN1VHX71PiNZbo2vU-zKjBxNSvVK5yt3as"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 relative">
                  <div className="rounded-xl w-full h-32 md:h-48 relative overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt="A companion reading a book to an elderly man in a sunlit garden, peaceful and serene atmosphere"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6HMic3k6tn33klbSq4Gt96VV5C-COcJakO3mmFqr9zSGyaDu8JeE3P-u2ChT-bk6ACs0atCJ8pJXt6fn6yJLfArzbD9YG2deOThvNhFV-qRvwN-8lqFyRuwhijf_vt9i-yXtcPa8-bZUQcWl921DhQXmbB-bffPVcys_a8-s_5_tYaIr0Dmoxxf6QnAgszeVTMCKiLI093HmmZ999fgFZ9vrNg_O7_4vy__lSd7DYLd3N1ZerG3hBiC_NlsYrI_zff_xoF6PQwL0"
                      unoptimized
                    />
                  </div>
                  <div className="rounded-xl w-full h-64 md:h-80 relative overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt="Close up of high-end herbal tea being poured into a porcelain cup, steam rising elegantly"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNp_bYF5q52u_w2_MkcUEHw0i60C-XPxSx1BCXYxKzaM2zgYFHSNGRsJIWNfjJucNOyCG56hQCNBrAi4kbh-PC58RnoNtzBQjH3cc8Y-yWWHMZ96kcankMrWfOqXXWGQQMVllFDBF9GpQx1PRQz4zaYSUdoo7mgP5yajW3jUoaaJrkkA7NjUFpbJAoXjsk1GGVSlvzQUzvl7lHM6SxDz6vz0HLEC496_Vk5WTOWcj9vNSl-JAhkUAbMBrb97sRNhxUc9DZX4jeMaQ"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* The Update System Section (Dashboard Mockup) */}
      <section className="py-20 md:py-32 bg-surface relative overflow-hidden px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] md:text-xs">Total Transparency</span>
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface">The Update System</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h3 className="font-headline text-2xl text-on-surface">Digital Proximity</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">Our proprietary dashboard allows you to feel present at a moment's notice. No more relying on vague responses; receive detailed visual and narrative updates directly on your device.</p>
              </div>
              <ul className="space-y-6 md:space-y-8">
                <li className="flex items-start gap-4 md:gap-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">photo_camera</span>
                  <div>
                    <h4 className="font-medium mb-1 text-on-surface text-sm md:text-base">Visual Moments</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">Daily photographs of meals, walks, and activities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">description</span>
                  <div>
                    <h4 className="font-medium mb-1 text-on-surface">Health &amp; Wellness Log</h4>
                    <p className="text-sm text-on-surface-variant">Professional summaries of medical vitals and mood tracking.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                  <div>
                    <h4 className="font-medium mb-1 text-on-surface">Weekly Video Narrative</h4>
                    <p className="text-sm text-on-surface-variant">A personal video message from the companion summarizing the week.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[400px]">
                {/* Smartphone UI Mock */}
                <div className="bg-surface-container-highest border-[8px] border-surface-container-high rounded-[3rem] aspect-[9/19] shadow-2xl overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-high rounded-b-2xl z-20"></div>
                  {/* UI Content */}
                  <div className="p-6 pt-12 space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Welcome back, Rohan</p>
                        <h4 className="font-headline text-xl text-on-surface">Parent Update</h4>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-primary/20 bg-surface-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-primary">notifications</span>
                      </div>
                    </div>
                    <div className="glass-panel p-4 rounded-xl space-y-4 border border-white/5 bg-surface/30">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-on-surface-variant">CURRENT STATUS</span>
                        <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[8px] rounded-full">ACTIVE NOW</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative">
                          <Image fill className="object-cover" alt="Close-up of an elderly man with silver hair and gentle eyes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCU83cwICupvaTAJxGthbmx33DmTdzq-NbA7j8BNLENqPFqb0uemxJhLxcnXGYemxcILfsvP0hX-aszMgKVEzveNFAo92-PJYlTY-vowKpadXhIGbiEHeMRBAcrNw7ZXcjPUi8TrOy3xJIsXQl3GZq5aDWkavkrhurzqCrfZPwhdEGLB7-smBrsfqVwsNqevqVVvbnSQ-ExhX9Y7MYScdwkwkwiUoO9xw8w9yvKuY1FPm9HSl2C7EVTirllF6qsQ-zg1yYvc8hB5U" unoptimized/>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-on-surface">Mr. Advani</p>
                          <p className="text-[10px] text-on-surface-variant italic">Enjoying a garden tea in Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">LATEST ACTIVITIES</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-square rounded-lg overflow-hidden bg-surface-container relative">
                          <Image fill className="object-cover opacity-80" alt="Plate of fresh gourmet healthy meal with vibrantly colored vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRFJMQGYfywhH7T3tmtOMCLb8HGWIGQbouoAJogtQXTQhnMAXBk51F7rIzD1x7belp2InIo-wllGed5pTl-L6bAxBA7AzqlkiX2Hx0eFEnjRj3WZsO8zuX3eUWKiM3XOS_IYWkWEwvrEK5ev6M-I8Xss-UxbQQKaWJqv7N-mKbMK83763Cd05EyQUFQA5PZ1DWBQwa1_K96AQXHV2-aS67GMBb8_hrofu45orZEi48rYfKYio6qf1nJOyjAR13sJYvG4voKZovdg" unoptimized/>
                          <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] text-white">Nutrition</div>
                        </div>
                        <div className="aspect-square rounded-lg overflow-hidden bg-surface-container relative">
                          <Image fill className="object-cover opacity-80" alt="Scenic park with lush greenery and a walking path in morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX-FGj-_ieR1eZP4Nd3sfiaBpy3fmK8m8b_IfbOA6m5LR2IBJm811EPYMO8pOMxSxKCC-MwA9CjJkTQSCm0auDEIB_87b5-h6BTUh0-Cww-SSdmfXKDlTdAQmQgBqn-OzvNISMcikZEz-LZ0qYtlyrxHRb3JHyjIlOBIAJeuNgIq-_4AxahfPaAM3ZOuCHT38Xv5Vt32o1RmEyNcLx6TlLvDlqd5tUc2oUDE0_c57YohD3Yawlft7i4vBXM6qPak4XGvHzo-nofX0" unoptimized/>
                          <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] text-white">Wellness</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-bold text-primary">COMPANION REPORT</p>
                        <span className="text-[8px] text-on-surface-variant">10:30 AM</span>
                      </div>
                      <p className="text-[11px] leading-relaxed italic text-on-surface-variant">"Mr. Advani was in high spirits today. We discussed the new cricket series over tea. He walked for 20 mins..."</p>
                    </div>
                  </div>
                </div>
                {/* Floating Accents */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars Section */}
      <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-surface p-8 md:p-12 rounded-xl space-y-6 hover:bg-surface-container-high transition-all duration-500 shadow-lg">
              <span className="material-symbols-outlined text-primary text-4xl">support_agent</span>
              <h3 className="font-headline text-2xl text-on-surface">24/7 Global Support</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-light">Regardless of your time zone, our concierge desk is always awake. Real-time assistance for urgent requests and immediate updates.</p>
            </div>
            <div className="bg-surface p-8 md:p-12 rounded-xl space-y-6 hover:bg-surface-container-high transition-all duration-500 shadow-lg border-t border-primary/20">
              <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
              <h3 className="font-headline text-2xl text-on-surface">Verified Professionals</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-light">Every companion undergoes a rigorous background check, psychometric testing, and cultural alignment training before their first visit.</p>
            </div>
            <div className="bg-surface p-8 md:p-12 rounded-xl space-y-6 hover:bg-surface-container-high transition-all duration-500 shadow-lg">
              <span className="material-symbols-outlined text-primary text-4xl">assignment_turned_in</span>
              <h3 className="font-headline text-2xl text-on-surface">Weekly Audited Reports</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-light">Comprehensive summaries audited by our internal wellness experts to ensure the highest standard of care and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA / Final Reassurance */}
      <section className="py-24 md:py-32 text-center bg-background px-6">
        <div className="max-w-screen-md mx-auto space-y-10 md:space-y-12">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl leading-tight text-on-surface">The Distance is Emotional, <br />Not Physical.</h2>
          <p className="text-on-surface-variant text-base md:text-xl font-light">Connect with a private advisor today to discuss a bespoke plan for your family in India.</p>
          <div className="flex justify-center">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary font-headline text-xs md:text-sm tracking-widest uppercase px-10 md:px-12 py-4 md:py-5 rounded-xl hover:opacity-90 transition-all inline-block border-0 shadow-xl">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
