// backend/services/smsService.js
const africastalking = require('africastalking');

/**
 * Sends an SMS using Africa's Talking SDK.
 * Falls back to simulation if credentials are missing.
 */
async function sendSMS(phone, message) {
  const apiKey = process.env.AFRICAS_TALKING_API_KEY;
  const username = process.env.AFRICAS_TALKING_USERNAME;

  if (!apiKey || !username) {
    console.log(`[SMS Simulation] To: ${phone}, Msg: ${message}`);
    return { success: true, simulated: true };
  }

  const at = africastalking({
    apiKey: apiKey,
    username: username
  });

  const sms = at.SMS;

  try {
    const result = await sms.send({
      to: [phone],
      message: message,
      // shortCode: 'XXXXX' // Optional: Uncomment and add your shortCode/SenderID if you have one
    });
    console.log(`✅ SMS sent successfully to ${phone}`);
    return { success: true, result };
  } catch (error) {
    console.error("❌ SMS Error:", error.message || error);
    return { success: false, error: error.message };
  }
}

module.exports = { sendSMS };
