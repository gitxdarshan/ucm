import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] dark:bg-[#0e0e0e] w-full border-t border-[#2a2a2a] mt-auto relative z-10">
      <div className="flex flex-col items-center gap-8 py-12 md:py-20 px-6 md:px-12 text-center max-w-screen-2xl mx-auto">
        <div className="text-base md:text-lg font-noto-serif italic text-primary tracking-widest">
          THE PRIVATE CONCIERGE
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-manrope text-[10px] md:text-xs tracking-[0.2em] md:tracking-widest uppercase">
          <Link className="text-[#c7c6c4] hover:text-primary transition-colors hover:opacity-70" href="#">Privacy Policy</Link>
          <Link className="text-[#c7c6c4] hover:text-primary transition-colors hover:opacity-70" href="#">Terms of Service</Link>
          <Link className="text-[#c7c6c4] hover:text-primary transition-colors hover:opacity-70" href="#">Imprint</Link>
          <Link className="text-[#c7c6c4] hover:text-primary transition-colors hover:opacity-70" href="#">Press</Link>
          <Link className="text-[#c7c6c4] hover:text-primary transition-colors hover:opacity-70" href="#">Careers</Link>
        </div>
        <div className="text-primary font-manrope text-[9px] md:text-xs tracking-[0.3em] md:tracking-widest uppercase mt-4 md:mt-8 opacity-60">
          © THE PRIVATE CONCIERGE. BY PRIVATE APPOINTMENT ONLY.
        </div>
      </div>
    </footer>
  );
}
