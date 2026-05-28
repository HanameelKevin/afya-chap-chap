// backend/services/smsService.js
async function sendSMS(phone, message) {
  if (!process.env.AFRICAS_TALKING_API_KEY) {
    console.log(`[SMS Simulation] To: ${phone}, Msg: ${message}`);
    return { success: true, simulated: true };
  }

  // Real implementation for Africa's Talking would go here
  try {
    console.log(`Sending SMS to ${phone}...`);
    return { success: true };
  } catch (error) {
    console.error("SMS Error:", error);
    return { success: false };
  }
}

module.exports = { sendSMS };
