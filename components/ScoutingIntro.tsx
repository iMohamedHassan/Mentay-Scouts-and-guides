
import React from 'react';

const ScoutingIntro: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-6 text-green-900">تعريف الحركة الكشفية</h2>
        <p className="text-gray-600 text-xl">
          الحركة الكشفية هي حركة تربوية تطوعية غير سياسية للشباب، مفتوحة للجميع دون تمييز.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "الهدف", content: "المساهمة في تنمية الشباب لتحقيق أقصى قدراتهم البدنية والعقلية والروحية.", icon: "🎯" },
          { title: "المبادئ", content: "الواجب نحو الله، الواجب نحو الآخرين، والواجب نحو الذات.", icon: "⚖️" },
          { title: "الطريقة", content: "نظام تربوي يعتمد على الوعد والقانون، والتعلم بالممارسة، ونظام المجموعات الصغيرة.", icon: "🛠️" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 text-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-green-800">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoutingIntro;
