
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <div className="container mx-auto px-4 relative overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 border-2 border-[#ffcc00] animate-bounce">
            <span className="text-3xl">🏆</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#003366]">إنجازات و أوسمة</h2>
        <p className="text-gray-600 font-bold">نفخر بكوننا أحد أكثر المجموعات تميزاً في القليوبية.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {ACHIEVEMENTS.map((item) => (
          <div key={item.id} className="group relative bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-[#ffcc00] transition-all hover:-translate-y-4 hover:shadow-2xl flex flex-col items-center text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[3rem] overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#003366]">
                    <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
                </svg>
            </div>
            
            <div className="text-6xl mb-8 transform group-hover:scale-125 transition-transform drop-shadow-lg">
              {item.icon}
            </div>
            <div className="bg-[#003366] text-[#ffcc00] px-6 py-1.5 rounded-full text-xs font-black mb-6 shadow-md border-2 border-white">
              {item.year}
            </div>
            <h3 className="text-2xl font-black mb-4 text-[#003366]">{item.title}</h3>
            <p className="text-gray-600 font-medium leading-relaxed">{item.description}</p>
            
            <div className="mt-8 flex gap-1">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#ffcc00] text-sm opacity-30 group-hover:opacity-100 transition-opacity">★</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
