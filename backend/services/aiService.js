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

async function analyzeSymptoms(symptoms, history = []) {
  if (!genAI) {
    return { 
      patientResponse: "I've noted your symptoms. I'll share them with your doctor.", 
      doctorSummary: `Patient reported: ${symptoms}` 
    };
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const historyContext = history.map(h => `${h.role === 'user' ? 'Patient' : 'Assistant'}: ${h.text}`).join('\n');
    
    const prompt = `You are a Senior Maternal Health Triage Assistant for the Afya Chap Chap clinic.
    
    CONTEXT:
    ${historyContext}
    
    PATIENT'S NEW MESSAGE: "${symptoms}"
    
    YOUR TASK:
    1. CONVERSATION: Be warm and helpful. Do NOT repeat that you have relayed the message in every turn—the patient already knows. Instead, focus on GATHERING info.
    2. INVESTIGATION: Ask exactly ONE targeted follow-up question. If they say "headache", ask about "blurred vision" or "swelling". If they say "fever", ask about "chills" or "hydration".
    3. SUMMARY: Update the technical "doctorSummary" with EVERYTHING known so far in clinical terms (e.g., "Patient reports persistent migraine for 2 days, no blurred vision yet").
    
    FORMAT AS JSON ONLY:
    {
      "patientResponse": "Your warm response + your single investigative question",
      "doctorSummary": "Comprehensive clinical summary of all facts gathered so far"
    }`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleanedText = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Symptom Analysis Error:", error);
    return { 
      patientResponse: "I'm listening. Can you tell me more about that?", 
      doctorSummary: `Patient reported: ${symptoms}` 
    };
  }
}

module.exports = { getClinicalInsight, analyzeSymptoms };
