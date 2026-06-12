// backend/services/aiService.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

/**
 * Generates a high-level clinical briefing for health workers.
 * Follows the 'Vital Editorial' philosophy: authoritative, concise, and structured.
 */
async function getEditorialSummary(sessionData) {
  if (!genAI) return "Briefing unavailable. Review patient vitals manually for critical flags.";

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are a Senior Clinical Coordinator. Your goal is to provide a 'Vital Editorial' briefing: high-signal, zero-clutter, and actionable."
    });

    const prompt = `Analyze this clinic session data: ${JSON.stringify(sessionData)}. 
    Generate a 2-sentence briefing. 
    Sentence 1: The most critical clinical priority. 
    Sentence 2: A prediction or preparation tip based on trends. 
    Maintain a professional, 'medical journal' tone.`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Editorial Summary Error:", error);
    return "Unable to generate briefing. Ensure all clinical data is synchronized.";
  }
}

/**
 * Translates clinical data into warm, encouraging advice for patients.
 */
async function getPatientAdvice(vitals) {
  if (!genAI) return "You're doing great! Keep attending your sessions regularly.";

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are a warm, supportive Maternal Health Mentor. You translate medical data into empowering, easy-to-understand advice."
    });

    const prompt = `Based on these vitals: ${JSON.stringify(vitals)}, provide a warm, 1-sentence encouragement for a pregnant mother. Focus on her well-being and her baby's growth. Avoid medical jargon.`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return "Your journey is unique and special. We are here to support you every step of the way.";
  }
}

async function getClinicalInsight(patientData) {
  if (!genAI) {
    return "AI insights currently unavailable. Monitor vitals closely.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Analyze maternal vitals: BP: ${patientData.bp}, Hb: ${patientData.hb}. Status: ${patientData.weeksPregnant} weeks. Provide a 1-sentence clinical recommendation for a health worker. Professional tone only.`;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return "Unable to generate AI insight. Review clinical protocols.";
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
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are a Maternal Health Triage Assistant. You gather info warmly and summarize clinically."
    });
    
    const historyContext = history.map(h => `${h.role === 'user' ? 'Patient' : 'Assistant'}: ${h.text}`).join('\n');
    
    const prompt = `
    CONTEXT:
    ${historyContext}
    
    PATIENT'S NEW MESSAGE: "${symptoms}"
    
    YOUR TASK:
    1. CONVERSATION: Warm response + exactly ONE targeted clinical follow-up question.
    2. SUMMARY: Update 'doctorSummary' with all facts in clinical terms.
    
    FORMAT AS JSON ONLY:
    {
      "patientResponse": "string",
      "doctorSummary": "string"
    }`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleanedText = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    return { 
      patientResponse: "I'm listening. Can you tell me more about that?", 
      doctorSummary: `Patient reported: ${symptoms}` 
    };
  }
}

module.exports = { getClinicalInsight, analyzeSymptoms, getEditorialSummary, getPatientAdvice };
