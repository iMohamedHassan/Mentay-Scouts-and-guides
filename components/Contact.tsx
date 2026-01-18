
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', stage: 'براعم', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('يرجى ملء جميع البيانات الأساسية (الاسم، البريد، والرسالة)');
      return;
    }
    
    setIsSending(true);
    // محاكاة عملية إرسال
    setTimeout(() => {
      alert(`شكراً لك يا ${formData.name}! تم إرسال رسالتك بنجاح. سيتواصل معك أحد القادة من مرحلة ${formData.stage} قريباً.`);
      setFormData({ name: '', email: '', stage: 'براعم', message: '' });
      setIsSending(false);
    }, 1200);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="inline-block px-4 py-1 bg-[#FFD700]/20 text-[#003366] rounded-full text-xs font-black mb-6 uppercase tracking-widest border border-[#FFD700]/30">
            تواصل معنا
          </div>
          <h2 className="text-4xl font-black mb-8 text-[#003366] wood-text">نحن دائماً هنا للمساعدة</h2>
          <div className="space-y-6">
            <div className="flex gap-4 group">
              <div className="w-14 h-14 bg-[#003366] text-[#FFD700] rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">📍</div>
              <div>
                <h4 className="font-bold text-[#003366]">الموقع</h4>
                <p className="text-gray-600">منطي، القليوبية، مصر</p>
                <p className="text-sm text-gray-400">مركز شباب منطي</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-14 h-14 bg-[#003366] text-[#FFD700] rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">📞</div>
              <div>
                <h4 className="font-bold text-[#003366]">رقم الهاتف</h4>
                <a href="tel:01113230755" className="text-gray-600 hover:text-[#003366] font-bold text-lg">01113230755</a>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-14 h-14 bg-[#003366] text-[#FFD700] rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">✉️</div>
              <div>
                <h4 className="font-bold text-[#003366]">البريد الإلكتروني</h4>
                <p className="text-gray-600">manti.scouts@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 bg-[#fcfbf7] p-8 md:p-12 rounded-[3rem] border-2 border-[#FFD700]/20 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <h3 className="text-2xl font-black mb-8 text-[#003366]">أرسل استفسارك أو طلب الانضمام</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">الاسم</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-[#FFD700] outline-none transition-all" 
                  placeholder="الاسم الرباعي" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-[#FFD700] outline-none transition-all" 
                  placeholder="email@domain.com" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">المرحلة الكشفية المطلوبة</label>
              <select 
                value={formData.stage}
                onChange={(e) => setFormData({...formData, stage: e.target.value})}
                className="w-full px-5 py-4 rounded-2xl border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-[#FFD700] outline-none transition-all font-bold"
              >
                <option>براعم (بنين وبنات)</option>
                <option>أشبال (بنين)</option>
                <option>زهرات (بنات)</option>
                <option>كشافة (بنين)</option>
                <option>مرشدات (بنات)</option>
                <option>كشاف متقدم (بنين)</option>
                <option>متقدمة (بنات)</option>
                <option>جوالة (بنين)</option>
                <option>جوالات (بنات)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">الرسالة</label>
              <textarea 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-5 py-4 rounded-2xl border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-[#FFD700] outline-none transition-all" 
                placeholder="كيف يمكننا مساعدتك؟"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSending}
              className={`w-full md:w-auto px-16 py-5 ${isSending ? 'bg-gray-400' : 'bg-[#003366] hover:bg-[#FFD700] hover:text-[#003366]'} text-white font-black rounded-2xl transition-all shadow-xl active:scale-95`}
            >
              {isSending ? 'جاري الإرسال...' : 'إرسال البيانات'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
