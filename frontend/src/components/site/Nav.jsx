import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F8F7F5]/70 border-b border-[#DCD9D3]">
      <div className="px-6 md:px-12 lg:px-24 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-baseline gap-1">
          <span className="font-serif-display text-2xl md:text-3xl font-semibold tracking-tight">Archti</span>
          <span className="font-serif-display text-2xl md:text-3xl font-semibold italic">X</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-bold link-sweep transition-colors ${
                  isActive ? "text-[#111111]" : "text-[#5C5A56] hover:text-[#111111]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-cta"
            className="group flex items-center gap-2 bg-[#111111] text-[#F8F7F5] px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-colors"
          >
            Consultation
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#F8F7F5] border-t border-[#DCD9D3]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-serif-display text-3xl font-medium"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
