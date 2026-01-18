
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export async function askScoutAssistant(question: string) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "عذراً، مساعد الذكاء الاصطناعي غير مهيأ حالياً. يرجى التأكد من إعداد مفتاح API.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `أنت مساعد ذكي خبير في الحركة الكشفية لمجموعات منطي الكشفية و الإرشادية. 
        أجب على أسئلة الزوار عن الحركة الكشفية، تاريخها، مهارات الخلاء، العقد، القيم الكشفية، ومعلومات عن مجموعة منطي. 
        اجعل إجاباتك ودودة، محفزة، وباللغة العربية الفصحى البسيطة.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error asking Gemini:", error);
    return "عذراً، حدث خطأ أثناء محاولة الرد. حاول مرة أخرى لاحقاً.";
  }
}
