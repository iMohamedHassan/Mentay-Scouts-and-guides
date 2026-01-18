
import React from 'react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToIntro = () => {
    document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&q=80&w=2070" 
          alt="Scouting Night" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/40 to-black/70"></div>
      </div>

      {/* Floating Logo Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none w-full max-w-2xl">
        <img src="./logo.png" alt="" className="w-full h-auto animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="mb-10 inline-block animate-float relative">
            {/* The Logo itself in the Hero */}
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-white rounded-full flex items-center justify-center p-2 shadow-[0_0_60px_rgba(255,215,0,0.4)] border-4 border-[#FFD700] overflow-hidden">
                <img src="./logo.png" alt="Official Logo" className="w-full h-full object-contain" />
            </div>
            
            {/* Logo inspired Stars */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {[1,2,3,4,5].map((s, i) => (
                    <span key={i} className="text-[#FFD700] text-xl drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">★</span>
                ))}
            </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
          كن مستعداً <br/> 
          لـ <span className="text-[#FFD700] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">مستقبل أفضل</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-50 font-medium leading-relaxed drop-shadow-sm">
          مجموعات منطي الكشفية و الإرشادية - مركز شباب منطي. <br/>
          بناء الإنسان، خدمة المجتمع، والانتماء للوطن.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToAbout}
            className="group px-14 py-5 bg-[#FFD700] hover:bg-white text-[#003366] font-black rounded-2xl transition-all shadow-2xl hover:shadow-[#FFD700]/50 flex items-center gap-3 active:scale-95"
          >
            بدء الرحلة
            <span className="group-hover:translate-x-1 transition-transform">←</span>
          </button>
          <button 
            onClick={scrollToIntro}
            className="px-14 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl border-2 border-white/30 transition-all active:scale-95"
          >
            تعريف الحركة
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
        <div className="w-px h-16 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD700]">اسحب للأسفل</span>
      </div>
    </div>
  );
};

export default Hero;
