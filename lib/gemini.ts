import { GoogleGenAI } from "@google/genai";
import { QuizQuestion } from "../types";

// Ensure the API_KEY is set in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

export async function getExplanationForWrongAnswer(question: QuizQuestion): Promise<string> {
    const { verb, formToGuess, correctAnswer } = question;

    const prompt = `
      ဂျပန်စာလေ့လာနေသူတစ်ယောက်က ကြိယာပုံစံပြောင်းရာမှာ အမှားလုပ်မိပါတယ်။
      
      မေးခွန်း:
      - Dictionary Form: ${verb.dictionary} (${verb.burmese})
      - ပြောင်းရမည့် Form: ${formToGuess} form
      
      အဖြေမှန်ကတော့ "${correctAnswer}" ဖြစ်ပါတယ်။

      ဒီအဖြေ ဘာကြောင့်မှန်ကန်ကြောင်း သဒ္ဒါစည်းမျဉ်းကို အသေးစိတ်ရှင်းပြပေးပါ။
      
      ရှင်းပြချက်တွင် အောက်ပါအချက်များပါဝင်ပါစေ:
      1. ဒီကြိယာ (${verb.dictionary}) ဟာ Group ဘယ်လောက်မှာရှိတယ်။
      2. အဲ့ဒီ Group ရဲ့ ${formToGuess} form ပြောင်းနည်း စည်းမျဉ်းကဘာလဲ။
      3. စည်းမျဉ်းအတိုင်း ဒီကြိယာကို ဘယ်လိုအဆင့်ဆင့်ပြောင်းသွားပြီး "${correctAnswer}" ဆိုတဲ့အဖြေထွက်လာတယ်ဆိုတာကို ရှင်းပြပါ။
      
      ရှင်းလင်းချက်ကို မြန်မာဘာသာဖြင့်သာ ရေးသားပေးပါ။
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text.trim();

    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return 'AI ထံမှရှင်းလင်းချက်ရယူရာတွင် အမှားအယွင်းဖြစ်ပေါ်နေပါသည်။ နောက်တစ်ကြိမ်ကြိုးစားပေးပါ။';
    }
}
