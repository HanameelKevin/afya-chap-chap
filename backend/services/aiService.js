// backend/services/aiService.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

async function getClinicalInsight(patientData) {
  if (!genAI) {
    return "AI insights currently unavailable (Missing API Key). Monitor vitals closely.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Analyze these maternal vitals for a 32-week pregnancy: BP: ${patientData.bp}, Hb: ${patientData.hb}. Provide a 1-sentence clinical recommendation. Keep it professional and concise.`;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI Insight Error:", error);
    return "Unable to generate AI insight at this time.";
  }
}

module.exports = { getClinicalInsight };
