
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'نبذة عنا', href: '#about' },
    { label: 'الحركة الكشفية', href: '#intro' },
    { label: 'المراحل', href: '#stages' },
    { label: 'الإنجازات', href: '#achievements' },
    { label: 'الأنشطة', href: '#activities' },
    { label: 'المكتبة', href: '#library' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // إغلاق القائمة عند الضغط
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || isMenuOpen ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden border-2 border-[#FFD700]">
              <img 
                src="./logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://cdn-icons-png.flaticon.com/512/2822/2822452.png";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-base md:text-xl tracking-tight leading-none ${isScrolled || isMenuOpen ? 'text-[#003366]' : 'text-white'}`}>
                مجموعات منطي
              </span>
              <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${isScrolled || isMenuOpen ? 'text-[#003366]/70' : 'text-[#FFD700]'}`}>
                Groups Mentay Scout & Guides
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-bold hover:text-[#FFD700] transition-all relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className={`hidden md:block px-6 py-2 rounded-xl font-black text-sm transition-all border-2 ${
                  isScrolled 
                  ? 'bg-[#003366] border-[#003366] text-white hover:bg-white hover:text-[#003366]' 
                  : 'bg-[#FFD700] border-[#FFD700] text-[#003366] hover:bg-transparent hover:text-white'
              }`}>
                  انضم إلينا
              </button>
              
              {/* Hamburger Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`xl:hidden p-2 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isScrolled || isMenuOpen ? 'text-[#003366] bg-gray-100' : 'text-white bg-white/10'
                }`}
                aria-label="القائمة"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
              </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#003366] transition-all duration-500 flex flex-col items-center justify-center gap-8 px-6 ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full pointer-events-none'
        }`}
      >
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-2 mb-4">
           <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="text-2xl font-black text-white hover:text-[#FFD700] transition-all transform hover:scale-110"
          >
            {item.label}
          </button>
        ))}
        <button 
          onClick={() => scrollToSection('#contact')}
          className="mt-4 px-12 py-4 bg-[#FFD700] text-[#003366] font-black rounded-2xl text-xl shadow-2xl active:scale-95"
        >
          انضم للفريق الآن
        </button>
      </div>
    </>
  );
};

export default Header;
