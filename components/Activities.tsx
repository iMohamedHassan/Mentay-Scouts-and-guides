
import React from 'react';
import { ACTIVITIES } from '../constants';

const Activities: React.FC = () => {
  const openGallery = () => {
    alert('سيتم توجيهك إلى معرض الصور الكامل والأنشطة التاريخية للمجموعة قريباً!');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-[#003366] wood-text">ألبوم الأنشطة</h2>
          <p className="text-gray-600 font-bold">لحظات لا تُنسى في معسكراتنا ورحلاتنا.</p>
        </div>
        <button 
          onClick={openGallery}
          className="px-8 py-3 bg-[#ffcc00] text-[#003366] font-black rounded-xl hover:shadow-xl transition-all active:scale-95"
        >
          المعرض الكامل
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {ACTIVITIES.map((activity, idx) => (
          <div key={activity.id} className={`group cursor-pointer transform transition-all hover:-translate-y-4 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
            <div className="bg-white p-5 pb-12 shadow-2xl rounded-sm border border-gray-100">
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#003366] text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                  {activity.category}
                </div>
              </div>
              <h3 className="text-xl font-black text-[#003366] leading-tight mb-2">
                {activity.title}
              </h3>
              <p className="text-xs font-bold text-gray-400 italic">📅 {activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
