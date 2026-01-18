
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 bg-topo rounded-[3rem] py-16">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ffcc00]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1523456760081-306716a4956d?auto=format&fit=crop&q=80&w=1200" 
              alt="Scouts around fire" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-[#1a4d2e] text-white p-8 rounded-[2rem] shadow-2xl transform -rotate-3 hidden md:block border-4 border-[#ffcc00]">
            <p className="text-5xl font-black leading-none">15+</p>
            <p className="text-sm font-bold opacity-80 mt-2">سنة من التميز</p>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="inline-block px-4 py-1 bg-green-100 text-[#1a4d2e] rounded-full text-xs font-black mb-6 uppercase tracking-widest">
            قصتنا وبدايتنا
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#1a4d2e] leading-tight wood-text">
            نحن أكثر من مجرد فريق، <br/> نحن <span className="text-[#ffcc00]">عائلة</span> واحدة.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
            مجموعات منطي الكشفية والإرشادية هي صرح تربوي يهدف إلى تنمية الشباب من كافة الجوانب. نؤمن بأن الطبيعة هي المعلم الأول، وبأن العمل الجماعي هو مفتاح النجاح.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium">
            منذ تأسيسنا، عملنا على غرس قيم الصدق، الأمانة، والخدمة العامة في نفوس أبنائنا، لنخرج جيلاً قادراً على مواجهة تحديات المستقبل بكل ثقة ومسؤولية.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border-2 border-dashed border-[#1a4d2e]/10 hover:border-[#ffcc00] transition-all">
              <div className="w-14 h-14 bg-[#1a4d2e] rounded-2xl flex items-center justify-center text-3xl shadow-lg">🌟</div>
              <div>
                <h4 className="font-black text-[#1a4d2e]">رسالة سامية</h4>
                <p className="text-xs text-gray-500 font-bold mt-1">بناء المواطن الصالح.</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border-2 border-dashed border-[#1a4d2e]/10 hover:border-[#ffcc00] transition-all">
              <div className="w-14 h-14 bg-[#ffcc00] rounded-2xl flex items-center justify-center text-3xl shadow-lg">⛺</div>
              <div>
                <h4 className="font-black text-[#1a4d2e]">حياة الخلاء</h4>
                <p className="text-xs text-gray-500 font-bold mt-1">التعلم بالممارسة والمغامرة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
