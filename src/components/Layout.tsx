import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Menu, X, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-[20px] transition-colors duration-300 border-b border-outline-variant/5">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-6 md:px-8 h-20">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-base md:text-lg font-bold uppercase tracking-[0.1em] text-[#2b3437] truncate">
            Katie Vu | Portfolio
          </Link>
          <a 
            href="https://www.linkedin.com/in/katie-vu-b25477133/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#555f6f] hover:text-[#2b3437] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center p-1 rounded-sm hover:bg-[#555f6f]/10"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} strokeWidth={2.5} />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-headline tracking-tight transition-all text-sm",
                  location.pathname === link.href
                    ? "text-[#2b3437] font-bold border-b-2 border-[#555f6f] pb-1"
                    : "text-[#586064] hover:text-[#2b3437]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a 
            href="mailto:katielvu@gmail.com"
            className="bg-[#555f6f] text-[#f6f7ff] px-6 py-2.5 rounded-lg font-medium hover:opacity-70 transition-opacity scale-95 active:scale-100 text-sm inline-block"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#2b3437] hover:bg-surface-container-low rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed left-0 right-0 top-20 bg-[#f8f9fa] z-40 md:hidden transition-all duration-300 ease-in-out border-b border-outline-variant/10 shadow-xl",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link, index) => (
            <div key={link.name}>
              <Link
                to={link.href}
                className={cn(
                  "text-xl font-headline tracking-tight transition-all flex items-center justify-between py-2",
                  location.pathname === link.href
                    ? "text-[#2b3437] font-bold"
                    : "text-[#586064] hover:text-[#2b3437]"
                )}
              >
                {link.name}
                {location.pathname === link.href && <div className="w-1.5 h-1.5 rounded-full bg-[#555f6f]" />}
              </Link>
              {index < navLinks.length - 1 && <div className="h-px bg-outline-variant/10 mt-4" />}
            </div>
          ))}
          <div className="pt-4">
            <a 
              href="mailto:katielvu@gmail.com"
              className="w-full bg-[#555f6f] text-white px-8 py-4 rounded-xl font-bold text-lg text-center inline-block shadow-md active:scale-[0.98] transition-transform"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-16 mt-12 bg-[#f1f4f6]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-8 gap-8">
        <div className="font-body text-sm leading-relaxed tracking-wide text-[#555f6f]">
          © 2026 Katie Vu. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="mailto:katielvu@gmail.com" className="font-body text-sm leading-relaxed tracking-wide text-[#586064] hover:text-[#2b3437] transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/katie-vu-b25477133/" target="_blank" rel="noopener noreferrer" className="font-body text-sm leading-relaxed tracking-wide text-[#586064] hover:text-[#2b3437] transition-colors">LinkedIn</a>
          <a href="#" className="font-body text-sm leading-relaxed tracking-wide text-[#586064] hover:text-[#2b3437] transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
