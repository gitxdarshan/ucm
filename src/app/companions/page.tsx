import Link from "next/link";
import Image from "next/image";

const team = [
  { name: "Advait Patil", title: "Founder", image: "https://i.ibb.co/yByJwTMr/Whats-App-Image-2026-04-17-at-2-47-47-PM.jpg" },
  { name: "Darshan More", title: "CEO", image: "https://i.ibb.co/Wp7Ld2Lp/Whats-App-Image-2026-04-17-at-2-06-51-PM.jpg" },
  { name: "Mandar Shinde", title: "COO", image: "https://i.ibb.co/JwWSb14m/Whats-App-Image-2026-04-17-at-2-09-21-PM.jpg" },
  { name: "Harvinder Singh Ramgadiya", title: "CTO", image: "https://i.ibb.co/JjcmnCff/Whats-App-Image-2026-04-17-at-2-41-41-PM.jpg" },
  { name: "Anuj Sinare", title: "CMO", image: "https://i.ibb.co/4nzzqDQ3/Whats-App-Image-2026-04-17-at-2-07-47-PM.jpg" },
  { name: "Divya Pawar", title: "VP of Sales", image: "https://i.ibb.co/HpqLwnRx/Whats-App-Image-2026-04-17-at-2-49-46-PM.jpg" },
  { name: "Yogeshwar Kagade", title: "CFO", image: "https://i.ibb.co/3Y5hQSgg/Whats-App-Image-2026-04-17-at-2-44-14-PM.jpg" },
];

export default function LeadershipTeam() {
  return (
    <>
      {/* Hero Title Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 text-center pt-24 md:pt-32">
        <div className="inline-block mb-4">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">The People Behind the Promise</span>
          <div className="h-[1px] w-12 bg-primary/40 mx-auto mt-2"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline text-on-surface tracking-tight mb-6">
          Our Leadership Team
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant font-body font-light text-base md:text-lg leading-relaxed">
          A distinguished group of professionals united by a shared commitment to excellence, 
          discretion, and the highest standards of personalised service.
        </p>
      </header>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {team.map((member) => (
            <div key={member.name} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                {member.image ? (
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    alt={`Portrait of ${member.name}, ${member.title}`}
                    src={member.image}
                    unoptimized
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-3 text-on-surface-variant/40">
                    <span className="material-symbols-outlined text-6xl">person</span>
                    <span className="font-label text-[9px] uppercase tracking-widest">Photo Coming Soon</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">verified</span>
                  <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface">Leadership</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-headline text-on-surface">{member.name}</h3>
                <p className="text-primary font-label text-[10px] uppercase tracking-widest">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 md:mb-32 max-w-5xl mx-auto px-6">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-20 text-center border border-outline-variant/10">
          <h2 className="text-2xl md:text-4xl font-headline mb-6 md:mb-8 text-on-surface">Ready to experience our service?</h2>
          <p className="text-on-surface-variant font-body text-sm md:text-base mb-10 max-w-xl mx-auto">Our team is here to guide you through a deeply personal consultation tailored to your family&apos;s unique needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary font-label text-[10px] md:text-xs uppercase tracking-widest font-bold py-4 md:py-5 px-8 md:px-12 rounded-xl transition-all hover:opacity-90 inline-block border-0 shadow-lg">
              Schedule Consultation
            </Link>
            <Link href="/services" className="bg-surface-container-highest text-on-surface font-label text-[10px] md:text-xs uppercase tracking-widest font-bold py-4 md:py-5 px-8 md:px-12 rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-all inline-block">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
