import { Link } from "react-router-dom";
import { ADDRESS, SERVICES } from "@/data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#111111] text-[#F8F7F5]">
    <div className="px-6 md:px-12 lg:px-24 py-20 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="font-serif-display text-4xl lg:text-5xl font-medium leading-tight">
            Let's build your <span className="italic">dream house</span> together.
          </p>
          <Link
            to="/contact"
            data-testid="footer-cta"
            className="inline-block mt-8 border border-[#F8F7F5] px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#F8F7F5] hover:text-[#111111] transition-colors"
          >
            Start your project
          </Link>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#8B8880] mb-6">Services</p>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-sm text-[#CFCCC6] hover:text-white transition-colors link-sweep">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#8B8880] mb-6">Studio</p>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-[#CFCCC6] hover:text-white transition-colors link-sweep">About</Link></li>
            <li><Link to="/projects" className="text-sm text-[#CFCCC6] hover:text-white transition-colors link-sweep">Projects</Link></li>
            <li><Link to="/contact" className="text-sm text-[#CFCCC6] hover:text-white transition-colors link-sweep">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#8B8880] mb-6">Visit</p>
          <p data-testid="footer-address" className="text-sm text-[#CFCCC6] leading-relaxed">{ADDRESS}</p>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between gap-4">
        <p className="text-xs text-[#8B8880] tracking-wide">© {new Date().getFullYear()} ArchtiX — Architect & Interior Designers. All rights reserved.</p>
        <p className="text-xs text-[#8B8880] tracking-wide">
          Designed & Developed by madycloud.me
        </p>
      </div>
    </div>
  </footer>
);
