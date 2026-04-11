"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TopNavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/companions", label: "Companions" },
    { href: "/nri", label: "For NRI Families" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-lg">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 max-w-screen-2xl mx-auto">
          <Link href="/" className="text-lg md:text-xl font-bold tracking-widest text-primary font-noto-serif whitespace-nowrap">
            THE PRIVATE CONCIERGE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-noto-serif tracking-tight text-sm uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 group transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:inline-block brushed-gold-gradient text-on-primary px-6 md:px-8 py-2 md:py-3 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all hover:shadow-lg active:scale-95">
              Private Consultation
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-surface transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-surface-container-lowest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline text-3xl transition-all duration-300 ${
                  isActive ? "text-primary italic" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-8">
            <Link href="/contact" className="brushed-gold-gradient text-on-primary px-10 py-5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl">
              Private Consultation
            </Link>
          </div>
          
          <div className="absolute bottom-12 text-center text-on-surface-variant font-label text-[10px] uppercase tracking-[0.4em] opacity-40">
            Mumbai &bull; The Private Concierge
          </div>
        </div>
      </div>
    </>
  );
}
