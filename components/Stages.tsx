
import React from 'react';
import { STAGES } from '../constants';

const Stages: React.FC = () => {
  const handleExplore = (stageName: string) => {
    alert(`سيتم فتح الدليل الكامل لمرحلة ${stageName} قريباً! يمكنك التواصل معنا للحصول على المناهج.`);
  };

  return (
    <div className="container mx-auto px-6 relative">
      <div className="absolute top-0 right-0 -translate-y-12 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" className="fill-[#003366]">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
          </svg>
      </div>

      <div className="text-center mb-20 relative">
        <span className="text-[#ffcc00] font-black text-sm uppercase tracking-widest mb-4 block">مسار النمو الكشفي</span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#003366] wood-text">المراحل الكشفية</h2>
        <div className="flex justify-center gap-2 mb-4">
             {[1,2,3,4,5].map(i => <span key={i} className="text-[#ffcc00] text-xl">★</span>)}
        </div>
        <div className="w-24 h-1.5 bg-[#ffcc00] mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {STAGES.map((stage) => (
          <div key={stage.id} className="group relative">
            <div className={`absolute inset-0 transform transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 rounded-[2.5rem] shadow-xl ${stage.color} opacity-10 border-4 border-dashed border-[#ffcc00]/40`}></div>
            
            <div className="relative z-10 bg-white rounded-[2.5rem] p-8 border-2 border-[#003366]/5 shadow-sm transition-all group-hover:shadow-2xl group-hover:-translate-y-3 flex flex-col items-center text-center h-full">
              <div className={`w-20 h-20 ${stage.color} text-white rounded-full flex items-center justify-center text-4xl mb-6 shadow-2xl transform transition-transform group-hover:scale-110 ring-4 ring-[#ffcc00]/10`}>
                {stage.icon}
              </div>
              <h3 className="text-xl font-black mb-2 text-[#003366]">{stage.name}</h3>
              <div className="px-4 py-1 bg-[#fcfbf7] border border-[#ffcc00]/30 rounded-full text-[10px] font-black text-[#003366] mb-4 tracking-widest uppercase">
                {stage.ageRange}
              </div>
              <p className="text-gray-600 text-xs leading-relaxed font-medium mb-6">
                {stage.description}
              </p>
              
              <div className="mt-auto w-full">
                <button 
                  onClick={() => handleExplore(stage.name)}
                  className="w-full py-3 bg-[#003366] text-white rounded-xl text-xs font-black hover:bg-[#ffcc00] hover:text-[#003366] transition-all transform active:scale-95 shadow-lg"
                >
                  استكشف المرحلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stages;
