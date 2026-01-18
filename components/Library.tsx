
import React from 'react';
import { LIBRARY_BOOKS } from '../constants';

const Library: React.FC = () => {
  const handleRead = (title: string) => {
    alert(`جاري تحميل كتاب: ${title}... يرجى الانتظار، سيفتح قريباً بنسخة PDF.`);
  };

  const handleBrowseAll = () => {
    alert('سيتم فتح المكتبة الكاملة التي تضم جميع مناهج وكتب الحركة الكشفية قريباً!');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-[#003366] font-black text-sm uppercase tracking-widest mb-4 block">مركز المعرفة</span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#003366] wood-text">مكتبة المستكشف</h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium">أفضل المراجع الكشفية والكتب التعليمية التي يحتاجها كل قائد ومستكشف في رحلته.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {LIBRARY_BOOKS.map((book) => (
          <div key={book.id} className="group flex flex-col items-center">
            <div className="relative w-full aspect-[2/3] mb-6 perspective-1000">
              <div className="w-full h-full relative transition-transform duration-500 transform-style-3d group-hover:rotate-y-[-15deg] shadow-2xl rounded-r-lg rounded-l-md overflow-hidden border-r-4 border-[#003366]/20">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-y-0 left-0 w-4 bg-black/20 blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                    <button 
                      onClick={() => handleRead(book.title)}
                      className="bg-[#ffcc00] text-[#003366] px-6 py-3 rounded-xl font-black shadow-xl active:scale-95"
                    >
                        قراءة الآن
                    </button>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-[#003366] text-[#ffcc00] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg z-20">
                {book.category}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-black text-xl text-[#003366] mb-1 line-clamp-1">{book.title}</h3>
              <p className="text-sm font-bold text-gray-400 mb-3">{book.author}</p>
              <div className="flex justify-center gap-1">
                  {[1,2,3,4,5].map(s => (
                      <span key={s} className="text-[#ffcc00] text-xs">★</span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
          <button 
            onClick={handleBrowseAll}
            className="px-10 py-4 bg-white border-2 border-[#003366] text-[#003366] font-black rounded-2xl hover:bg-[#003366] hover:text-white transition-all shadow-md active:scale-95"
          >
              استعرض المكتبة الكاملة
          </button>
      </div>
    </div>
  );
};

export default Library;
